import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        textAlign: "center",
        border: `1px solid ${theme.palette.background.paper}`,
        borderRadius: theme.shape.borderRadius,
        padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
        width: "280px",
        marginRight: `${theme.spacing(3)}px`,
        marginTop: theme.spacing(2),
        transition: `all 255ms ${theme.transitions.easing.easeOut}`,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        "&:hover": {
            borderColor: theme.palette.common.white
        }
    },
    role: {
        opacity: 0.65
    },
    title: {
        // Head text styles...
        fontFamily: "'PT Mono', monospace"
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: theme.spacing(3)
    },
    contactIcon: {
        opacity: 0.65,
        color: theme.palette.common.white,
        transition: `all 155ms ${theme.transitions.easing.easeInOut}`,
        fontSize: "18px",
        margin: "0 8px",
        cursor: "pointer",
        textShadow: `0 0px 0px ${theme.palette.common.white}`,
        "&:hover": {
            opacity: 1,
            textShadow: `0 5px 10px ${theme.palette.common.white}`,
        }
    }
}));

export default styles;