import { React, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Rating,
 
} from "@mui/material";
// import FormDialog from "./Dialog";
import FormDialog from "./CartDialog";
import { toast } from "react-toastify";


const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [sortvalue, setSortvalue] = useState("all");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setPizzas(data);
        setLoading(false);
      });
  }, []);

  const sortbutton = (e) => {
    if (sortvalue === "all") {
      setPizzas(data);
      toast.success("Sorted by All");
    } else if (sortvalue === "price") {
      setPizzas([...data].sort((a, b) => a.price - b.price));
      toast.success("Sorted by Price");
    } else if (sortvalue === "rating") {
      setPizzas([...data].sort((a, b) => b.rating - a.rating));
      toast.success("Sorted by Rating");
    } else if (sortvalue === "veg") {
      setPizzas([...data].filter((pizza) => pizza.isVeg === true));
      toast.success("Filtered by Veg");
    } else if (sortvalue === "nonveg") {
      setPizzas([...data].filter((pizza) => pizza.isVeg === false));
      toast.success("Filtered by Non-Veg");
    }
  };

  useEffect(() => {
    sortbutton();
  }, [sortvalue]);

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ marginTop: "20px", justifyContent: "center" }}
      >
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sm={12}
          md={12}
          lg={6}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSortvalue("all");
            }}
          >
            All Pizzas
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSortvalue("price");
            }}
          >
            Sort By Price
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSortvalue("rating");
            }}
          >
            Sort By Rating
          </Button>
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sm={12}
          md={12}
          lg={6}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSortvalue("veg");
            }}
          >
            Veg
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSortvalue("nonveg");
            }}
          >
            Non-Veg
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box style={{ margin: "20px" }}>
          <Grid container spacing={3}>
            {pizzas.map((pizza) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={pizza.id}>
                <Paper
                  elevation={3}
                  style={{
                    padding: "20px",
                    width: "250px",
                    height: "fit-content",
                  }}
                >
                  <Box p={2} sx={{ width: "fit-content" }}>
                    <Typography fontStyle={"bold"} style={{ fontSize: "17px" }}>
                      {pizza.name}
                    </Typography>
                  </Box>
                  <Box p={2} sx={{ width: "fit-content" }}></Box>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundImage: `url(${pizza.img_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <br />
                  <div
                    style={{
                      width: "100%",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {pizza.isVeg ? (
                      <Typography variant="body2" style={{ color: "green" }}>
                        Veg
                      </Typography>
                    ) : (
                      <Typography variant="body2" style={{ color: "red" }}>
                        Non-Veg
                      </Typography>
                    )}
                  </div>
                  <Box p={2} sx={{ width: "fit-content" }}>
                    <Typography variant="body2">{pizza.description}</Typography>
                  </Box>

                  <Box
                    p={2}
                    sx={{ width: "fit-content", alignItems: "center" }}
                  >
                    <Rating
                      name="half-rating-read"
                      value={pizza.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" style={{ color: "#008000" }}>
                      Rs: {pizza.price}
                    </Typography>

                    <FormDialog pizza={pizza} />
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
export default Pizzas;
