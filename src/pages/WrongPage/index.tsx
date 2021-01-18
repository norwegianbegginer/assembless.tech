// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * WrongPage component
 * @description This is the view seen when entering an invalid route.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const WrongPage = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <h4 className={classes.h4}>{translated.title}</h4>
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default WrongPage;