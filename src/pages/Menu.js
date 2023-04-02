import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth:"390px", display:"flex", m:2}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.name.split('/')[3].split('.')[0]}
                </Typography>
                <Typography variant="h6">
                ₹{menu.price}
                </Typography>
                <Typography varient="body2">
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
