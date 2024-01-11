import initializeWeb3 from "./initializeWeb3";


const web3 = initializeWeb3();
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            }
        ],
        "name": "cancelJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            }
        ],
        "name": "completeJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            }
        ],
        "name": "JobCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "freelancer",
                "type": "address"
            }
        ],
        "name": "JobCompleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "payment",
                "type": "uint256"
            }
        ],
        "name": "JobPosted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "paymentInEth",
                "type": "uint256"
            }
        ],
        "name": "postJob",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "freelancer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "proposal",
                "type": "string"
            }
        ],
        "name": "ProposalSubmitted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "proposal",
                "type": "string"
            }
        ],
        "name": "submitProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllJobs",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "payment",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isOpen",
                        "type": "bool"
                    },
                    {
                        "internalType": "address payable",
                        "name": "freelancer",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "proposal",
                        "type": "string"
                    }
                ],
                "internalType": "struct FreelancePlatform.Job[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            }
        ],
        "name": "getJobDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "payment",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isOpen",
                        "type": "bool"
                    },
                    {
                        "internalType": "address payable",
                        "name": "freelancer",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "proposal",
                        "type": "string"
                    }
                ],
                "internalType": "struct FreelancePlatform.Job",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "jobId",
                "type": "uint256"
            }
        ],
        "name": "getSubmittedProposal",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "jobCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "jobs",
        "outputs": [
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "payment",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isOpen",
                "type": "bool"
            },
            {
                "internalType": "address payable",
                "name": "freelancer",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "proposal",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


const contractAddress = '0x23BF2Df81Fe7508D5c7b1496265e9056BD3f46f0';


const contract = new web3.eth.Contract(contractABI, contractAddress);




export const postJobMethod = async (title, description, paymentInEth) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const paymentInWei = web3.utils.toWei(paymentInEth.toString(), 'ether');
 
      return await contract.methods.postJob(title, description, paymentInEth)
        .send({ from: accounts[0], value: paymentInWei });
    } catch (error) {
      console.error("Error in postJobMethod:", error);
      throw error;
    }
  };
 


  export const submitProposalMethod = async (jobId, proposal) => {
    try {
      const accounts = await web3.eth.getAccounts();
 
      return await contract.methods.submitProposal(jobId, proposal)
        .send({ from: accounts[0] });
    } catch (error) {
      console.error("Error in submitProposalMethod:", error);
      throw error;
    }
  };
 
  export const completeJobMethod = async (jobId) => {
    try {
      const accounts = await web3.eth.getAccounts();
 
      return await contract.methods.completeJob(jobId)
        .send({ from: accounts[0] });
    } catch (error) {
      console.error("Error in completeJobMethod:", error);
      throw error;
    }
  };
 
 
  export const cancelJobMethod = async (jobId) => {
    try {
      const accounts = await web3.eth.getAccounts();
 
      return await contract.methods.cancelJob(jobId)
        .send({ from: accounts[0] });
    } catch (error) {
      console.error("Error in cancelJobMethod:", error);
      throw error;
    }
  };
 


  export const getAllJobsMethod = async () => {
    try {
      return await contract.methods.getAllJobs().call();
    } catch (error) {
      console.error("Error in getAllJobsMethod:", error);
      throw error;
    }
  };
 


  export const getJobDetailsMethod = async (jobId) => {
    try {
      return await contract.methods.getJobDetails(jobId).call();
    } catch (error) {
      console.error("Error in getJobDetailsMethod:", error);
      throw error;
    }
  };
 


  export const getSubmittedProposalMethod = async (jobId) => {
    try {
      return await contract.methods.getSubmittedProposal(jobId).call();
    } catch (error) {
      console.error("Error in getSubmittedProposalMethod:", error);
      throw error;
    }};



