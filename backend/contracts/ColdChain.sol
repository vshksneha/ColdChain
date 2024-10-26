// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

library CryptoSuite {
    function splitSignature(bytes memory sig) internal pure returns (uint8 v, bytes32 r, bytes32 s) {
        require(sig.length == 65, "Invalid signature length");

        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    function recoverSigner(bytes32 message, bytes memory sig) internal pure returns (address) {
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);
        return ecrecover(message, v, r, s);
    }
}

contract ColdChain {
    enum Mode { ISSUER, PROVER, VERIFIER }
    enum Status { MANUFACTURED, DELIVERING_INTERNATIONAL, STORED, DELIVERING_LOCAL, DELIVERED }

    struct Entity {
        address id;
        Mode mode;
        uint[] certificateIds;
    }

    struct Certificate {
        uint id;
        address issuer;
        address prover;
        bytes signature;
        Status status;
    }

    struct VaccineBatch {
        uint id;
        string brand;
        address manufacturer;
        uint[] certificateIds;
    }

    uint public constant MAX_CERTIFICATIONS = 2;
    uint public certificateIds;
    uint public vaccineBatchIds;

    mapping(uint => VaccineBatch) public vaccineBatches;
    mapping(uint => Certificate) public certificates;
    mapping(address => Entity) public entities;

    event AddEntity(address indexed entityId, Mode entityMode);
    event AddVaccineBatch(uint indexed vaccineBatchId, address indexed manufacturer);
    event IssueCertificate(address indexed issuer, address indexed prover, uint certificateId);

    function addEntity(address _id, string memory _mode) public {
        Mode mode = unmarshalMode(_mode);
        uint[] memory _certificateIds = new uint[](MAX_CERTIFICATIONS);
        entities[_id] = Entity(_id, mode, _certificateIds);

        emit AddEntity(_id, mode);
    }

    function unmarshalMode(string memory _mode) private pure returns (Mode mode) {
        bytes32 encodedMode = keccak256(abi.encodePacked(_mode));
        if (encodedMode == keccak256(abi.encodePacked("ISSUER"))) {
            return Mode.ISSUER;
        } else if (encodedMode == keccak256(abi.encodePacked("PROVER"))) {
            return Mode.PROVER;
        } else if (encodedMode == keccak256(abi.encodePacked("VERIFIER"))) {
            return Mode.VERIFIER;
        }
        revert("Invalid entity mode");
    }

    function addVaccineBatch(string memory brand, address manufacturer) public returns (uint) {
        uint[] memory _certificateIds = new uint[](MAX_CERTIFICATIONS);
        uint id = vaccineBatchIds++;
        vaccineBatches[id] = VaccineBatch(id, brand, manufacturer, _certificateIds);

        emit AddVaccineBatch(id, manufacturer);
        return id;
    }

    function issueCertificate(
        address _issuer,
        address _prover,
        string memory _status,
        bytes memory signature
    ) public returns (uint) {
        Entity storage issuerEntity = entities[_issuer];
        require(issuerEntity.mode == Mode.ISSUER, "Invalid issuer");

        Entity storage proverEntity = entities[_prover];
        require(proverEntity.mode == Mode.PROVER, "Invalid prover");

        Status status = unmarshalStatus(_status);
        uint id = certificateIds++;
        certificates[id] = Certificate(id, _issuer, _prover, signature, status);

        emit IssueCertificate(_issuer, _prover, id);
        return id;
    }

    function unmarshalStatus(string memory _status) private pure returns (Status status) {
        bytes32 encodedStatus = keccak256(abi.encodePacked(_status));
        if (encodedStatus == keccak256(abi.encodePacked("MANUFACTURED"))) {
            return Status.MANUFACTURED;
        } else if (encodedStatus == keccak256(abi.encodePacked("DELIVERING_INTERNATIONAL"))) {
            return Status.DELIVERING_INTERNATIONAL;
        } else if (encodedStatus == keccak256(abi.encodePacked("STORED"))) {
            return Status.STORED;
        } else if (encodedStatus == keccak256(abi.encodePacked("DELIVERING_LOCAL"))) {
            return Status.DELIVERING_LOCAL;
        } else if (encodedStatus == keccak256(abi.encodePacked("DELIVERED"))) {
            return Status.DELIVERED;
        }
        revert("Invalid status");
    }

    function isMatchingSignature(bytes32 message, uint id, address issuer) public view returns (bool) {
        Certificate storage cert = certificates[id];
        require(cert.issuer == issuer, "Issuer does not match");

        address recoveredSigner = CryptoSuite.recoverSigner(message, cert.signature);
        return recoveredSigner == cert.issuer;
    }
}
