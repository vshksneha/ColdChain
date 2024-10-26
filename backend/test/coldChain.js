const Web3 = require('web3').default;
const ColdChain = require('../build/contracts/ColdChain.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = new Web3(new HDWalletProvider(process.env.MNEMONIC, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));

const contractAddress = "0xYourActualDeployedContractAddress"; // Replace with your deployed contract address
const coldChainContract = new web3.eth.Contract(ColdChain.abi, contractAddress);

exports.addBatch = async (req, res) => {
    const { brand, manufacturer } = req.body;
    try {
        const accounts = await web3.eth.getAccounts();
        const batchId = await coldChainContract.methods.addVaccineBatch(brand, manufacturer).send({ from: accounts[0] });
        res.status(200).json({ message: "Batch added successfully", batchId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBatchDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const batch = await coldChainContract.methods.vaccineBatches(id).call();
        res.status(200).json(batch);
    } catch (error) {
        res.status(500).json({ error: "Batch not found" });
    }
};

exports.addEntity = async (req, res) => {
    const { id, mode } = req.body;
    try {
        const accounts = await web3.eth.getAccounts();
        await coldChainContract.methods.addEntity(id, mode).send({ from: accounts[0] });
        res.status(200).json({ message: "Entity added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.issueCertificate = async (req, res) => {
    const { issuer, prover, status, signature } = req.body;
    try {
        const accounts = await web3.eth.getAccounts();
        const certificateId = await coldChainContract.methods.issueCertificate(issuer, prover, status, signature).send({ from: accounts[0] });
        res.status(200).json({ message: "Certificate issued successfully", certificateId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
