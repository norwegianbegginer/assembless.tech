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
    }
}));