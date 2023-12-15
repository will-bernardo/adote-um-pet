import { extendTheme } from "@chakra-ui/react";

const semanticTokens = {
  colors: {
    error: "red.500",
    text: {
      default: "gray.900",
      _dark: "gray.50",
    },
  },
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const colors = {
  brand: {
    white: "rgba(255, 255, 255, 1)",
    ice: "rgba(243, 244, 246, 1)",
    blue: "rgba(0, 69, 105, 1)",
    beige: "rgba(245, 218, 194, 1)",
    orange: "rgba(250, 151, 59, 1)",
    gray: "rgba(82, 82, 83, 1)",
    black: "rgba(42, 42, 42, 1)",
  },
  purple: {
    50: "rgba(245, 235, 255, 1)",
    200: "rgba(214, 188, 250, 1)",
    300: "rgba(193, 148, 244, 1)",
    400: "rgba(157, 71, 237, 1)",
    500: "rgba(132, 19, 220, 1)",
  },
  gray: {
    50: "#FCFCFC",
    100: "#F7F7F7",
    200: "#F0F0F0",
    300: "#E0E0E0",
    400: "#C0C0C0",
    500: "#969696",
    600: "#686868",
    700: "#484848",
    800: "#2C2C2C",
    900: "#232323",
  },
  teal: {
    50: "rgba(230, 255, 250, 1)",
    600: "rgba(44, 122, 123, 1)",
  },
  blue: {
    50: "rgba(235, 248, 255, 1)",
    600: "rgba(43, 108, 176, 1)",
  },
  yellow: {
    50: "rgba(255, 255, 240, 1)",
    600: "rgba(183, 121, 31, 1)",
  },
  orange: {
    50: "rgba(255, 250, 240, 1)",
    600: "rgba(192, 86, 33, 1)",
  },
  red: {
    50: "rgba(255, 245, 245, 1)",
    500: "rgba(229, 62, 62, 1)",
    600: "rgba(197, 48, 48, 1)",
  },
  green: {
    50: "rgba(240, 255, 244, 1)",
    500: "rgba(56, 161, 105, 1)",
    700: "rgba(39, 103, 73, 1)",
  },
};

const sizes = {
  container: {
    xxl: "1400px",
    menu: {
      min: "calc(100vh - 200px)",
    },
  },
};

const layerStyles = {
  base: {},
};

const textStyles = {
  h1: {},
};

const components = {
  Input: {
    variants: {
      backgroundFix: {
        field: {
          bg: "white",
          border: "1px solid",
          borderColor: "gray.200",
          _invalid: {
            borderColor: "error",
          },
        },
      },
    },
    defaultProps: {
      variant: "backgroundFix",
    },
  },
  Checkbox: {
    baseStyle: {
      control: {
        backgroundColor: "white",
      },
    },
  },
};

export const theme = extendTheme({
  semanticTokens,
  breakpoints,
  colors,
  sizes,
  layerStyles,
  textStyles,
  components,
});
