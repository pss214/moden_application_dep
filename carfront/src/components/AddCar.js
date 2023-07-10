import React, {useState} from "react";
import  Dialog  from "@mui/material/Dialog";
import  DialogActions  from "@mui/material/DialogActions";
import  DialogContent from "@mui/material/DialogContent";
import  DialogTitle  from "@mui/material/DialogTitle";
import  Button  from "@mui/material/Button";
import  TextField  from "@mui/material/TextField";
import  Stack  from "@mui/material/Stack";

function AddCar(props){
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color:'',
        year:'',
        fuel:'',
        price:''
    });
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleChange=(event) =>{
        setCar({...car,[event.target.name]: event.target.value});
    }
    const handleSave=()=>{
        props.AddCar(car);
        handleClose();
    }

    return(
        <>
            <Button variant="contained" onClick={handleClickOpen}> new Car</Button>
            <Dialog open={open} onClose={handleChange}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField  placeholder="Brand" name="brand"
                            value={car.brand} onChange={handleChange}/>
                        <TextField placeholder="Model" name="model"
                            value={car.model} onChange={handleChange}/>
                        <TextField placeholder="Color" name="color"
                            value={car.color} onChange={handleChange}/>
                        <TextField placeholder="Year" name="year"
                            value={car.year} onChange={handleChange}/>
                        <TextField placeholder="Price" name="price"
                            value={car.price} onChange={handleChange}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default AddCar;