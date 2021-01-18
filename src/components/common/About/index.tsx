// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const About = (props: AboutProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Typography className={classes.title} variant="h3" gutterBottom>{translated.title}</Typography>
        <Typography className={classes.description}>{translated.description}</Typography>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type AboutProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default About;