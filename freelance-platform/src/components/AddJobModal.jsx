// components/AddJobModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

const AddJobModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log({ title, description, payment });
    onClose(); // Close modal after submission
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
