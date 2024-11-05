import { Table, TableHead,TableBody, TableContainer, TableRow, TableCell, Typography, Paper } from '@mui/material';
import axios from 'axios';

import React, { useEffect, useState } from 'react'

function Edashboard() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchEmployees();
    }, []);
  return (
    <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Employee Dashboard
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
  

export default Edashboard