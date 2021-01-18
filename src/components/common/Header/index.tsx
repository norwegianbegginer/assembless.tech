// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.jpg'

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Header component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Header = (props: HeaderProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box display="flex" justifyContent="space-evenly" alignItems="flex-start" className={cx(classes.root, props.className)} style={props.style}>
        <Box display="flex" justifyContent="center" alignItems="center" className={cx(classes.side)}>
            <Typography className={classes.title}>{translated.title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" className={cx(classes.side)}>
            <img alt="thumbnail" src={logo} style={{ width: "215px", height: "215px" }} />
        </Box>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type HeaderProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Header;