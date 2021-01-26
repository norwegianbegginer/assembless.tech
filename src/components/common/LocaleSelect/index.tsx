// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Icon, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useLittera, useLitteraMethods } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Component created for language switching.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const LocaleSelect = (props: LocaleSelectProps) => {
    const translated = useLittera(translations);
    const { locale, setLocale } = useLitteraMethods();
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        setLocale(event.target.value as unknown as string);
    }

    return <Box display="flex" justifyContent="flex-end" alignItems="center" className={cx(classes.root, props.className)} style={props.style}>
        {/* <Typography style={{ textDecoration: locale === "en_US" ? "underline" : "none", opacity: locale === "en_US" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("en_US")}>EN</Typography>
        <Typography style={{ textDecoration: locale === "de_DE" ? "underline" : "none", opacity: locale === "de_DE" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("de_DE")}>DE</Typography>
        <Typography style={{ textDecoration: locale === "pl_PL" ? "underline" : "none", opacity: locale === "pl_PL" ? 1 : 0.55, marginLeft: "10px", cursor: "pointer" }} onClick={handleLocaleChange("pl_PL")}>PL</Typography> */}



        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{translated.language}</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={locale}
                defaultValue="en_US"
                onChange={handleChange}
                label={translated.language}
            >
                <MenuItem value="en_US">{translated.en_US}</MenuItem>
                <MenuItem value="de_DE">{translated.de_DE}</MenuItem>
                <MenuItem value="pl_PL">{translated.pl_PL}</MenuItem>
            </Select>
        </FormControl>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type LocaleSelectProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default LocaleSelect;