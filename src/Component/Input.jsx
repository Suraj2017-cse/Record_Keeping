// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Input = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [Data, setData] = useState([]);

    const addItem = () => {
        setData([...Data, {name,user}]);
        setUser("");
        setName("");
    }

    const removeItem = (index) => {
        const newArr = Data;
        newArr.splice(index, 1);
        setData([...newArr]);
    }
    
  return (
    <div className='container mt-4'>
    <Stack direction="row" spacing={2}>
      <TextField 
        value={user}
        onChange={(suraj) => setUser(suraj.target.value)}
        id="outlined-basic" 
        label="User Name" 
        variant="outlined" 
      />
      <TextField 
        value={name}
        onChange={(suraj)=> setName(suraj.target.value)}
        id="outlined-basic" 
        label="Full Name" 
        variant="outlined" 
      /> 
      <Button variant="contained"  title='Add User' color="success" onClick={addItem}>
        <AddTaskIcon />
      </Button>
    </Stack>

    <div className="container fw-bold d-flex justify-content-between bg-primary p-2 mt-4 table-hover text-white">
        <div>S No.</div>
        <div>Name</div>
        <div>User Name</div>
        <div>Action</div>
    </div>

    {
        Data.map((element, index) => {
            return(
                <div key={index} className="container fw-light d-flex justify-content-between bg-success p-2 text-white">
                    <div>{index + 1}</div>
                    <div>{element.name}</div>
                    <div>{element.user}</div>
                    <Button variant="outlined" title='Delete Item' color="error" onClick={() => removeItem(index)}>
                        <HighlightOffIcon />
                    </Button>
                </div>
            )
        })
    }

    
    </div>
  )
}

export default Input