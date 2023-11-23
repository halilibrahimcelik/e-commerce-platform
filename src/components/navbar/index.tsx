"use client";
import Wrapper from "../wrapper";
import Image from "next/image";
import logo from "@/assets/logo-beta.png";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import CustomTheme from "@/containers/homePage/theme";
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
  return (
    <CustomTheme>
      <header className="bg-white">
        <Wrapper component="nav" customClass={"py-10"}>
          <ul className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <li>
              <Image
                src={logo}
                alt="beta logo"
                width={120}
                height={50}
                className="object-cover"
              />
            </li>
            <li className="lg:col-span-2 lg:flex justify-end ">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#abafb8" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
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
      </header>
    </CustomTheme>
  );
};

export default Navbar;
