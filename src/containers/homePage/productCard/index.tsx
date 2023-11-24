import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Products } from "@/lib/types";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";

const iconClass = {
  width: "fit",
  minWidth: "auto !important",
  padding: "2px",
  color: "#939292",
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "8px",
  "&:hover": {
    outline: "none",
    border: "none",
  },
};

const ProductCard = ({
  discount,
  id,
  image,
  name,
  originalPrice,
  price,
  rating,
}: Products) => {
  console.log(originalPrice);
  let filledStars = new Array(rating).fill(0);
  let notFilledStars = new Array(5 - rating).fill(0);

  const filledWithStars = filledStars.map((_, index) => {
    return <StarIcon key={index} color="secondary" fontSize="small" />;
  });
  const notFilledStarts = notFilledStars.map((_, index) => {
    return (
      <StarOutlineIcon key={index} sx={{ color: "#d1cece" }} fontSize="small" />
    );
  });

  return (
    <Box
      component={motion.li}
      sx={{
        minWidth: {
          xs: "90%",
          sm: 340,
          md: 300,
        },
      }}
    >
      <Card className="group relative">
        <div className="flex  relative bg-[#abafb845] h-[300px] items-center justify-center">
          <Chip
            label={discount}
            className="absolute top-4 left-4"
            color="primary"
            sx={{
              padding: "2px 6px",
            }}
          />
          <Button
            sx={{
              width: "fit",
              minWidth: "auto !important",
              padding: "2px",
              backgroundColor: "#fff",
              border: "none",
              position: "absolute",
              top: "200px",
              left: "4px",
            }}
            className="translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in"
            variant="outlined"
          >
            {" "}
            <ArrowBackIcon />
          </Button>

          <Image
            src={`${image}`}
            blurDataURL={`${image}`}
            placeholder="blur"
            width={200}
            height={200}
            alt={name}
            objectFit="cover"
          />
          <div className="absolute flex gap-2 bg-[#fff] w-fit  px-4 py-1 rounded-lg  bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[110%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in duration-300 ">
            <Button sx={iconClass} variant="outlined">
              {" "}
              <RemoveRedEyeIcon />
            </Button>
            <Divider orientation="vertical" flexItem />

            <Button sx={iconClass} variant="outlined">
              {" "}
              <FavoriteBorderIcon />
            </Button>
            <Divider orientation="vertical" flexItem />

            <Button sx={iconClass} variant="outlined">
              {" "}
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
        <CardContent>
          <h4 className="text-md font-bold">{name}</h4>
          <div className="flex justify-between">
            <div className="star-icons flex flex-col gap-2">
              <div className="flex items-end gap-0">
                <span>{filledWithStars}</span> <span>{notFilledStarts}</span>
                <span className="text-default ml-2 text-[0.8rem]">{`(${rating})`}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary text-[0.8rem] font-medium">
                  ${price}
                </span>
                <span className="text-[#858181] text-[0.8rem] font-font line-through">
                  ${originalPrice}
                </span>
              </div>
            </div>
            <div className="Btn-icons w-fit flex flex-col gap-2 justify-center items-center">
              <Button
                sx={{
                  width: "fit",
                  minWidth: "auto !important",
                  padding: "2px",
                }}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in"
                variant="outlined"
              >
                {" "}
                <RemoveIcon />
              </Button>

              <Button
                sx={{
                  width: "fit",
                  minWidth: "auto !important",
                  padding: "2px",
                }}
                variant="outlined"
              >
                {" "}
                <AddIcon />
              </Button>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
