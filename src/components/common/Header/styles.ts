import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
    },
    title: {
        whiteSpace: "pre-line",
        textTransform: "uppercase",
        fontFamily: "'PT Mono', monospace",
        [theme.breakpoints.down("md")]: {
            fontSize: "50px"
        }
    },
    slogan: {
        marginTop: "1rem",
        opacity: 0.45
    },
    side: {
        width: "50%",
        height: "100vh",
        [theme.breakpoints.down('sm')]: {
            width: "80%"
        }
    }
}));