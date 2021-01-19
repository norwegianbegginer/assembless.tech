import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        margin: "5rem 0 10rem 0"
    },
    title: {
        fontFamily: "'PT Mono', monospace"
    },
    description: {
        opacity: 0.45,
        whiteSpace: "pre-wrap"
    },
    brandName: {
        color: "#FFF", fontSize: "54px", margin: 0, padding: 0
    },
    side: {
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }
}));