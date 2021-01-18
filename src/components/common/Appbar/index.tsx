// Deps scoped imports.
import React from "react";
import { makeStyles, Toolbar, Container, AppBar as Navbar, Typography } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.jpg';

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Appbar = (props: AppbarProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Navbar className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Toolbar>
                <img alt="logo" src={logo} style={{ width: "64px", height: "64px" }} />
            </Toolbar>
        </Container>
    </Navbar>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type AppbarProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Appbar;