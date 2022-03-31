import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";

import {
  FormGroup,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormDialog({ pizza }) {
  const navigate = useNavigate();

  const [toppingvalue, setToppingvalue] = useState([]);

  const handleToppingChange = (event) => {
    setToppingvalue((event.target.value));
  };

  const [sizevalue, setSizevalue] = useState([]);

  const handleSizeChange = (event) => {
    setSizevalue(event.target.value);
  };

  const submitcart = () => {
    const choice = {
      id: pizza.id,
      name: pizza.name,
      description: pizza.description,
      isVeg: pizza.isVeg,
      rating: pizza.rating,
      price: pizza.price,
      img_url: pizza.img_url,
      size: sizevalue,
      toppings: toppingvalue,
    };

    const cart = JSON.parse(localStorage.getItem("cart"));
    const newcart = [...cart, choice];
    localStorage.setItem("cart", JSON.stringify(newcart));
    console.log(newcart);
    toast.success("Added to cart");
    navigate("/cart");

    
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
    <Box container="form">
      <ButtonGroup disableElevation style={{ backgroundColor: "#fff" }}>
        <Button style={{ color: "#FF0000" }}>
          <RemoveIcon />
        </Button>
        <Button style={{ color: "#FF0000" }} onClick={handleClickOpen}>
          <AddIcon />
        </Button>
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{pizza.name}</DialogTitle>
        <DialogContent>
          {/* Choose size and topings  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                boxShadow:
                  " 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
              }}
            >

                
                   
                    {
                        pizza.size.map((child) => (

                           
                                <>
                                {/* <Typography variant="h6" gutterBottom>
                                    {child.title}
                                </Typography> */}
                                {
                                    child.isRadio ? (
                                        <>
                                        <Typography variant="h6" gutterBottom style={{textTransform:"capitalize"}}>
                                           {child.title}
                                        </Typography>
                                        <TextField
                                            id="outlined-select"
                                            select
                                            label="Size"
                                            variant="outlined"
                                            value={sizevalue}
                                            onChange={handleSizeChange}
                                            fullWidth
                                            helperText="Please select any size"
                                        >
                                            {child.items.map((option) => (
                                                    <MenuItem value={option.size}>
                                                        {option.size}
                                                    </MenuItem>
                                               
                                                
                                                
                                            ))}
                                            
                                        </TextField>
                                        </>
                                    ) : (
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sizevalue}
                                            onChange={handleSizeChange}
                                            multiple
                                            fullWidth
                                            helperText="Select more than one size"

                                        >
                                            {child.items.map((item) => (
                                                <MenuItem key={item.id} value={item.value}>
                                                    {item.value}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )
                                }
                                </>
                            
                        ))
                    }
                          
                   

                
                </div>


                <div
              style={{
                width: "50%",
                height: "300px",
                display: "flex",
                marginLeft: "10px",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                boxShadow:
                  " 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
              }}
            >

                
                   
                    {
                        pizza.toppings.map((child) => (

                           
                                <>
                                <Typography variant="h6" gutterBottom style={{textTransform:"capitalize"}}>
                                    {child.title}
                                </Typography>
                                {
                                    child.isRadio ? (
                                        <TextField
                                            id="outlined-select"
                                            select
                                            label="Toppings"
                                            variant="outlined"
                                            value={toppingvalue}
                                            onChange={handleToppingChange}
                                            fullWidth
                                            helperText="Please select any toppings"
                                        >
                                            {child.items.map((option) => (
                                                    <MenuItem value={option.name}>
                                                        {option.name}
                                                    </MenuItem>
                                               
                                                
                                                
                                            ))}
                                            
                                        </TextField>
                                    ) : (
                                       <> 
                                       
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={toppingvalue}
                                            onChange={handleToppingChange}
                                            multiple
                                            fullWidth
                                            helperText="Select more than one toppings"

                                        >
                                            {child.items.map((item) => (
                                                <MenuItem  value={item.name}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        </>
                                    )
                                }
                                </>
                            
                        )
                        
                        )
                    }
                          
                   

                
                </div>

             </div>
          </DialogContent>
          <DialogActions>
             <Button onClick={handleClose} color="primary">
                Cancel
             </Button>
             <Button onClick={submitcart} color="primary">
                Add to cart
             </Button>
          </DialogActions>
        </Dialog>
     </Box>
     </>
      );
    }
    
                    
           


                        


                   

                        



                    
