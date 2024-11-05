import {FormLabel, InputLabel, Button, TextField} from '@mui/material';
import React, { useState } from 'react'

const Employeeform = () => {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        location: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({name:'',designation:'',location:'',salary:''})
    };

  return (
    <div style={{ padding: '20px' }}>
    <h2>Employee Form</h2>
    <FormLabel onSubmit={handleSubmit}>
        <InputLabel>
            Name:
            <TextField type="text" name="name" value={formData.name} onChange={handleChange} required />
        </InputLabel>
        <br />
        <InputLabel>
            Designation:
            <TextField type="text" name="designation" value={formData.designation} onChange={handleChange} required />
        </InputLabel>
        <br />
        <InputLabel>
            Location:
            <TextField type="text" name="location" value={formData.location} onChange={handleChange} required />
        </InputLabel>
        <br />
        <InputLabel>
            Salary:
            <TextField type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </InputLabel>
        <br />
        <Button type="submit" variant="contained">Submit</Button>
    </FormLabel>
</div>
  );
}

export default Employeeform