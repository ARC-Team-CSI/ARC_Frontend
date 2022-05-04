import {createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

const theme = createTheme( {
    palette: {
        primary: {
            main: "#85BBF3",
        },
        secondary: {
            main: "#C4C4C4",
            contrastText: grey[200]
        },
        success: {
            main: "#49C1A4"
        },
        error: {
            main: "#f44336",
            contrastText: "#fff"
        },
        info: {
            main: "#1268D2",
            light: "#7FC0E6",
            dark: "#0072B1",
            contrastText: "#fff"
        }
    }
})

export default theme;