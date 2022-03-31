import { Box, Typography,Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { toast } from "react-toastify";


const Cart = () => {
  const [cart, setCart] = useState([]);
 
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
    console.log(cart);
  }, []);

const removeFromCart = (id) => {
  localStorage.setItem("cart", JSON.stringify(cart.filter(item => item.id !== id)));
  setCart(cart.filter(item => item.id !== id));
  toast.success("Removed from cart");

};



  return (
    <>
      <Box>
        {cart.map((pizza, index) => {
          return (
            <Box
              key={index}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="start"
              flexWrap="wrap"
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#fff",
                boxShadow:
                  " 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
                style={{ width: "20%", height: "100%" }}
              >
                <img
                  src={pizza.img_url}
                  alt={pizza.name}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexWrap="wrap"
                justifyContent=" center"
                style={{ width: "20%", height: "100%", marginTop: "10px" }}
              >
                <Typography fontStyle={"bold"} style={{ fontSize: "17px" }}>
                  {pizza.name}
                </Typography>
                <Typography fontStyle={"bold"} style={{ fontSize: "17px" }}>
                  Rs : {pizza.price}
                </Typography>
                <Typography fontStyle={"bold"} style={{ fontSize: "17px" }}>
                  {pizza.isVeg ? "Veg" : "Non-Veg"}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
                style={{ width: "20%", height: "100%", marginTop: "10px" }}
              >
                <Typography fontStyle={"bold"} style={{ fontSize: "17px" }}>
                  {pizza.description}
                </Typography>

                </Box>
              <Box
                display="flex"
                flexDirection="column"
                
                alignItems="center"
                justifyContent="center"
                
                style={{ width: "20%", height: "100%", marginTop: "10px" }}
              >
                <Typography fontStyle={"bold"} style={{ fontSize: "17px", flexWrap: "wrap" }}>
                  Size : {pizza.size}
                </Typography>
                <Typography fontStyle={"bold"} style={{ fontSize: "17px" , flexWrap: "wrap"}}>
                  Topping : {pizza.toppings}
                </Typography>
                </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"

                justifyContent="center"
                style={{ width: "20%", height: "100%", marginTop: "10px" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    width: "100px",
                    height: "50px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => {
                    removeFromCart(pizza.id);
                  }}

                   

                >
                  Remove
                </Button>
                </Box>
            </Box>
          );
        })}


      </Box>
    </>
  );
};

export default Cart;
