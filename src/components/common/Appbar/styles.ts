import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

const styles = ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        backgroundColor: theme.palette.background.default
    },
    link: {
        fontFamily: "'PT Mono', monospace",
        margin: "0 10px",
        color: theme.palette.common.white,
        textDecoration: "none",
        opacity: 0.6,
        transition: `all 155ms ${theme.transitions.easing.easeInOut}`,
        textShadow: `0 0px 0px ${theme.palette.common.white}`,

        "&:hover": {
            opacity: 1,
            textShadow: `0 5px 10px ${theme.palette.common.white}`,
        }
    }
}));

export default styles;