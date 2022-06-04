import {createTheme} from "@mui/material";

const theme = createTheme( {
    palette: {
        primary: {
            main: "#7FC0E6",
        },
        secondary: {
            main: "#0072B1",
        },
        success: {
            main: "#49C1A4"
        },
        error: {
            main: "#f44336",
            contrastText: "#fff"
        },
        info: {
            main: "#C4C4C4",
            light: "#7FC0E6",
            dark: "#0072B1",
            contrastText: "#fff"
        }
    },
})

export default theme;