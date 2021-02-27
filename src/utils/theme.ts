// Default theme can be found here: https://material-ui.com/customization/default-theme/
import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#FFF",
            contrastText: "#000"
        },
        secondary: {
            main: "#2196f3",
            contrastText: "#FFF"
        },
        background: {
            default: "#000",
            paper: "#212121"
        },
        text: {
            primary: "#FFF",
            disabled: "#21212"
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    backgroundColor: "#000"
                },
            },
        },
        MuiInputLabel: {
            root: {
                color: "#a8a8a8",
                "&$focused": {
                    color: "#FFF",
                }
            },
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: "#a8a8a8",
            },
            focused: {
                borderColo: "#FFF"
            }
        },
    },
});

export const DARK_THEME = LIGHT_THEME;