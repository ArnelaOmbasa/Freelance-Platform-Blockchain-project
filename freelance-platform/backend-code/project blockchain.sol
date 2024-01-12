// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract FreelancePlatform {
    struct Job {
        string title;
        string description;
        uint payment; // Payment in ethers
        bool isOpen;
        address payable freelancer;
        string proposal;
    }

    mapping(uint => Job) public jobs;
    uint public jobCount;

    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not an admin");
        _;
    }

    modifier onlyFreelancer(uint jobId) {
        require(msg.sender == jobs[jobId].freelancer, "Not the job's freelancer");
        _;
    }

   modifier autoIncrementJobCount() {
    jobCount++;
    _;
}

    event JobPosted(uint jobId, string title, string description, uint payment);
    event ProposalSubmitted(uint jobId, address freelancer, string proposal);
    event JobCompleted(uint jobId, address freelancer);
    event JobCancelled(uint jobId);

    constructor() {
        admin = msg.sender;
    }

   function postJob(string memory title, string memory description, uint paymentInEth) public payable onlyAdmin autoIncrementJobCount {
    uint paymentInWei = paymentInEth * 10**18; // Convert payment to wei
    require(msg.value > 0, "Payment must be provided");
    require(msg.value == paymentInWei, "You didn't send the proper amount of money");

    // Decrement jobCount temporarily to use it as the current index
    jobCount--;

    Job memory newJob = Job({
        title: title,
        description: description,
        payment: paymentInEth,
        isOpen: true,
        freelancer: payable(address(0)),
        proposal: ""
    });

    jobs[jobCount] = newJob;
    emit JobPosted(jobCount, title, description, paymentInEth);

    // Increment jobCount back to act as the next job's index
    jobCount++;
}
    function submitProposal(uint jobId, string memory proposal) public {
        require(jobs[jobId].isOpen, "Job is not open for proposals");
        require(msg.sender != admin, "Admin cannot be a freelancer");
        require(jobs[jobId].freelancer == payable(address(0)), "Freelancer already assigned");
        jobs[jobId].freelancer = payable(msg.sender);
        jobs[jobId].isOpen = false;
        jobs[jobId].proposal = proposal;
        emit ProposalSubmitted(jobId, msg.sender, proposal);
    }

    function completeJob(uint jobId) public onlyFreelancer(jobId) {
        Job storage job = jobs[jobId];

        (bool sent, ) = job.freelancer.call{value: job.payment * 10**18}(""); // Convert payment to wei
        require(sent, "Failed to send Ether");
        job.payment = 0;
        job.isOpen = true;

        emit JobCompleted(jobId, job.freelancer);
    }

    function cancelJob(uint jobId) public onlyAdmin {
        Job storage job = jobs[jobId];

        if (job.payment > 0) {
            (bool sent, ) = admin.call{value: job.payment * 10**18}(""); // Refund in ethers
            require(sent, "Failed to refund Ether");
            job.payment = 0;
        }

        job.freelancer = payable(address(0));
        job.isOpen = true;

        emit JobCancelled(jobId);
    }

    function getAllJobs() public view returns (uint[] memory, Job[] memory) {
    uint[] memory jobIds = new uint[](jobCount);
    Job[] memory allJobs = new Job[](jobCount);
    for (uint i = 0; i < jobCount; i++) {
        jobIds[i] = i;
        allJobs[i] = jobs[i];
    }
    return (jobIds, allJobs);
}


    function getJobDetails(uint jobId) public view returns (Job memory) {
        return jobs[jobId];
    }

    function getSubmittedProposal(uint jobId) public view returns (string memory) {
        return jobs[jobId].proposal;
    }
}
