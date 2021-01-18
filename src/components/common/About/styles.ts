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
    }
}));