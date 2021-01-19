import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "16px",
        margin: "10px 0",
        marginRight: "15px",
        width: "45%",
        borderRadius: "6px",
        minWidth: "200px",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    title: {

        fontFamily: "'PT Mono', monospace"
    },
    description: {
        opacity: 0.45
    }
}));