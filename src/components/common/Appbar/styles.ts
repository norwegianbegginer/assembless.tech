import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        // Container styles...
        backgroundColor: theme.palette.background.default
    },
}));