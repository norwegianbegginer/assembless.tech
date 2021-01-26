import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "16px",
        margin: "10px 0",
        marginRight: "15px",
        width: "45%",
        borderRadius: theme.shape.borderRadius,
        minWidth: "200px",
        transition: `all 255ms ${theme.transitions.easing.easeOut}`,
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        "&:hover": {
            borderColor: theme.palette.common.white
        }
    },
    title: {

        fontFamily: "'PT Mono', monospace"
    },
    description: {
        opacity: 0.45
    }
}));