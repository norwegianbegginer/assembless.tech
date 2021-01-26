// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import { useLittera, useLitteraMethods } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import LocaleSelect from "../LocaleSelect";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Footer = (props: FooterProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const handleLocaleChange = (locale: string) => () => {
    }

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.copyright}>Copyright © 2021, Assembless</Typography>

                <LocaleSelect />
            </Box>
        </Container>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type FooterProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Footer;