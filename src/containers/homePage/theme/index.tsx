"use client";
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type Props = {
  children: React.ReactNode;
};

const CustomTheme = ({ children }: Props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#c24b5a",
            light: "#999",
          },
          secondary: {
            main: "#f0b23d",
          },
        },
        typography: {
          fontFamily: "var(--font-nunito)",
        },
        components: {
          MuiAlert: {
            styleOverrides: {
              standardWarning: {
                backgroundColor: "#edc73ef2",
                color: "#111",
                fontFamily: "var(--font-nunito)",
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                backgroundColor: "red !important",
              },
            },
          },
        },
      }),
    []
  );
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

export default CustomTheme;
