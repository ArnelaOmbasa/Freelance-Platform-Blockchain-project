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

const contractAddress = '0x723aa20a0565a6ba48be070b001d2216f668b230';

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const postJobMethod = async (title, description, paymentInEth) => {
  // Implement your function to post a job here
};

export const submitProposalMethod = async (jobId, proposal) => {
  // Implement your function to submit a proposal here
};

export const completeJobMethod = async (jobId) => {
  // Implement your function to complete a job here
};

export const cancelJobMethod = async (jobId) => {
  // Implement your function to cancel a job here
};

export const getAllJobsMethod = async () => {
  // Implement your function to get all jobs here
};

export const getJobDetailsMethod = async (jobId) => {
  // Implement your function to get job details here
};

export const getSubmittedProposalMethod = async (jobId) => {
  // Implement your function to get submitted proposal here
};
