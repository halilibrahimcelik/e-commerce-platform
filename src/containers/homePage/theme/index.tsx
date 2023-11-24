"use client";
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type Props = {
  children: React.ReactNode;
};
// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    default: Palette["primary"];
  }

  interface PaletteOptions {
    default?: PaletteOptions["primary"];
  }
}

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
          default: {
            main: "#efefef",
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
          MuiSvgIcon: {
            variants: [
              {
                props: { fontSize: "small" },
                style: {
                  fontSize: "1rem",
                },
              },
            ],
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
      }),
    []
  );
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

export default CustomTheme;
