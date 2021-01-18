// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
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
const Project = (props: ProjectProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Typography variant="h5" className={classes.title} gutterBottom>{props.name}</Typography>
        <Typography className={classes.description} >{props.description}</Typography>

        <Box display="flex" justifyContent="flex-start" alignItems="center" style={{ marginTop: "16px" }}>
            <Button variant="contained" href={props.url} size="large" style={{ marginRight: "6px" }}>{translated.preview}</Button>
            <Button target="_blank" href={props.repo_url} variant="outlined">{translated.repo}</Button>
        </Box>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ProjectProps = {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    description: string;
    logo: string;
    url: string;
    repo_url: string;
}

// Time to export! 🚚
export default Project;