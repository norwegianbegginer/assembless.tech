import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        width: "100%",
        padding: "18px 0",
        marginTop: "2rem",
        borderTop: `1px solid ${theme.palette.background.paper}`
    },
    copyright: {
        fontFamily: "'PT Mono', monospace"
    },
    socialIcon: {
        fontSize: "28px",
        margin: `0 ${theme.spacing(3)}px`,
        color: theme.palette.common.white,
        opacity: 0.7,
        transition: `all 155ms ${theme.transitions.easing.easeInOut}`,

        "&:hover": {
            opacity: 1,
        },
        cursor: "pointer"
    },
    socialMediaContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));