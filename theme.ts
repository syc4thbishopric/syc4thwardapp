import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      light: "#818CF8",
      main: "#4F46E5",
      dark: "#312E81",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0F172A",
    },
    success: {
      main: "#15803D",
    },
    error: {
      main: "#B91C1C",
    },
    warning: {
      main: "#C2410C",
    },
    info: {
      main: "#2563EB",
    },
    background: {
      default: "#F3F4F6",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
    divider: "#D1D5DB",
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "\"Inter\", Arial, sans-serif",
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
})

export default theme
