// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useLittera } from "react-littera";
import cx from "classnames";
import { useHistory } from "react-router-dom";

// Project scoped imports.

// Component scoped imports.
import Member from "./Member/";
import memberList from "./list";
import styles from "./styles";
import translations from "./trans";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Contact = (props: ContactProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const history = useHistory();

    const handleNavigation = (path: string) => () => {
        history.push(path)
    }

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Typography variant="h3" className={classes.title} gutterBottom>{translated.title}</Typography>

        <Box className={classes.container} display="flex" justifyContent="flex-start" flexWrap="wrap" alignItems="flex-start">
            {
                memberList.map(member => <Member member={member} />)
            }
        </Box>

        <Alert
            variant="filled"
            severity="info"
            style={{ marginTop: "24px" }}
            action={
                <Button color="inherit" size="small" onClick={handleNavigation("/career/")}>
                    {translated.seeCareer}
                </Button>
            }
        >
            {translated.weHire}
        </Alert>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// PrContactPropsent accepts.
type ContactProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Contact;