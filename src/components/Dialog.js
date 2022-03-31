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
 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormDialog({ pizza }) {
  const navigate = useNavigate();

  const [toppingvalue, setToppingvalue] = useState([]);

  const handleToppingChange = (event) => {
    setToppingvalue(event.target.value);
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
              {/* <Typography variant="h6">{pizza.size.title}</Typography> */}
              {pizza.size.map((item) => {
                return (
                  <>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ textTransform: "capitalize" }}
                    >
                      {item.title}
                    </Typography>
                    {item.isRadio
                      ? item.items.map((item) => {
                          return (
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={sizevalue}
                              onChange={handleSizeChange}
                            >
                              <FormControlLabel
                                value={item.size}
                                control={<Radio />}
                                label={item.size}
                              />
                            </RadioGroup>
                          );
                        })
                      : item.items.map((item) => {
                          return (
                            <FormGroup
                              value={toppingvalue}
                              onChange={handleToppingChange}
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={item.checked}
                                    onChange={() => {}}
                                    name={item.size}
                                  />
                                }
                                label={item.size}
                              />
                            </FormGroup>
                          );
                        })}
                  </>
                );
              })}
            </div>
            <div
              style={{
                marginLeft: "20px",
                height: "300px",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                boxShadow:
                  " 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
              }}
            >
              {pizza.toppings.map((item) => {
                return (
                  <>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ textTransform: "capitalize" }}
                    >
                      {item.title}
                    </Typography>
                    {item.isRadio
                      ? item.items.map((item) => {
                          return (
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={toppingvalue}
                              onChange={handleToppingChange}
                            >
                              <FormControlLabel
                                value={item.name}
                                control={<Radio />}
                                label={item.name}
                              />
                            </RadioGroup>
                          );
                        })
                      : item.items.map((item) => {
                          return (
                            <FormGroup
                              value={toppingvalue}
                              onChange={handleToppingChange}
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={item.checked}
                                    onChange={() => {}}
                                    name={item.name}
                                  />
                                }
                                label={item.name}
                              />
                            </FormGroup>
                          );
                        })}
                  </>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ color: "#FC4C02", border: "1px solid #FC4C02" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              submitcart();
            }}
            type="submit"
            style={{
              backgroundColor: "#FC4C02",
              color: "#fff",
              border: "1px solid #FC4C02",
            }}
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
