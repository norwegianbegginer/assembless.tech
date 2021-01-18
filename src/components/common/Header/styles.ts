import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        // Container styles...
    },
    title: {
        // Head text styles...
        color: theme.palette.primary
    },
    side: {
        width: "50%",
        height: "100vh"
    }
}));