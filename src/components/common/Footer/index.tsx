// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import { useLittera, useLitteraMethods } from "react-littera";
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
const Footer = (props: FooterProps) => {
    const translated = useLittera(translations);
    const { setLocale, locale } = useLitteraMethods();
    const classes = useStyles();

    const handleLocaleChange = (locale: string) => () => {
        setLocale(locale);
    }

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.copyright}>Copyright © 2021, Assembless</Typography>

                <Box display="flex" justifyContent="flex-end" alignItems="center">
                    <Typography style={{ textDecoration: locale === "en_US" ? "underline" : "none", opacity: locale === "en_US" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("en_US")}>EN</Typography>
                    <Typography style={{ textDecoration: locale === "de_DE" ? "underline" : "none", opacity: locale === "de_DE" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("de_DE")}>DE</Typography>
                    <Typography style={{ textDecoration: locale === "pl_PL" ? "underline" : "none", opacity: locale === "pl_PL" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("pl_PL")}>PL</Typography>
                </Box>
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