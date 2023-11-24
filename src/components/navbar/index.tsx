"use client";
import Wrapper from "../wrapper";
import Image from "next/image";
import logo from "@/assets/logo-beta.png";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Link from "next/link";
import { useAppDispatch } from "@/store/store";
import { searchedProduct } from "@/store/global-slice";
type Props = {};
const Search = styled("form")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  border: "1px solid #abafb8",
  height: "50px",
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.black, 0),
  transition: "background-color 0.2s ease-in",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "50rem",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",

  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching");
    const formData = new FormData(e.currentTarget);
    const searchedQuery = formData.get("search")?.toString().trim();
    if (searchedQuery) {
      dispatch(searchedProduct({ searchedProduct: searchedQuery }));
    }
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="bg-white"
    >
      <Wrapper component="nav" customClass={"py-5"}>
        <ul className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-end">
            <Link href="/">
              <Image
                src={logo}
                alt="beta logo"
                width={160}
                className="object-contain h-full"
              />
            </Link>
          </li>
          <li className="lg:col-span-2 lg:flex justify-end ">
            <Search onSubmit={handleSearch}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#abafb8" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="search"
              />
              <Button
                sx={{
                  borderRadius: "0  100px  100px 0",
                  textTransform: "capitalize",
                  fontWeight: "400",
                  width: "200px",
                }}
                color="primary"
                type="submit"
                variant="contained"
              >
                Search
              </Button>
            </Search>
          </li>
        </ul>
      </Wrapper>
    </motion.header>
  );
};

export default Navbar;
