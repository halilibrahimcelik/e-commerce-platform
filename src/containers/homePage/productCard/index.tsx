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
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";

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
      <Card>
        <div className="flex  bg-[#abafb845] h-[300px] items-center justify-center">
          <Image
            src={`${image}`}
            blurDataURL={`${image}`}
            placeholder="blur"
            width={200}
            height={200}
            alt={name}
            objectFit="cover"
          />
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
