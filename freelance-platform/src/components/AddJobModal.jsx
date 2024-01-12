// components/AddJobModal.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
import { postJobMethod } from '../web3/contractInteraction';
import initializeWeb3 from '../web3/initializeWeb3';




const AddJobModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [payment, setPayment] = useState('');
  const [web3, setWeb3] = useState(null);


  useEffect(() => {
    const web3Instance = initializeWeb3();
    setWeb3(web3Instance);
  }, []);


  const handleSubmit = async () => {
    if (!title || !description || !payment) {
      console.error("All fields are required");
      return;
    }
    if (!web3) {
      console.error('Web3 is not initialized');
      return;
    }
 
    try {
     
      await postJobMethod(title, description, payment);
      console.log("Job posted successfully");
      onClose();
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Job</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Job Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Payment (ETH)"
          type="number"
          fullWidth
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default AddJobModal;



