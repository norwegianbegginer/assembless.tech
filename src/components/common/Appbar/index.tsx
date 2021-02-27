// Deps scoped imports.
import React from "react";
import { makeStyles, Toolbar, Container, AppBar as Navbar, Box } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";

// Project scoped imports.
import logotype from 'assets/logotype.png';

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
    const history = useHistory();

    const handleNavigation = (path: string) => () => {
        history.push(path);
    }

    return <Navbar position="sticky" className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <img onClick={handleNavigation("/")} alt="logo" src={logotype} style={{ height: "64px", cursor: "pointer" }} />

                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <Link className={classes.link} to="/">{translated.home}</Link>
                        <Link className={classes.link} to="/career/">{translated.career}</Link>
                    </Box>
                </Box>
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