// Default theme can be found here: https://material-ui.com/customization/default-theme/
import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#FFF",
            contrastText: "#000"
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
    },
});

export const DARK_THEME = LIGHT_THEME;