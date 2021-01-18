import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary.main
    }
}));