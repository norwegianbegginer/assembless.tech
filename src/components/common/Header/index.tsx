// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button, Hidden, useMediaQuery } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Header component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Header = (props: HeaderProps) => {
    const reduceData = useMediaQuery("(prefers-reduced-data: reduce)");
    const translated = useLittera(translations);
    const classes = useStyles();
    
    return <Box display="flex" justifyContent="space-between" alignItems="flex-start" className={cx(classes.root, props.className)} style={props.style}>
        <Box display="flex" justifyContent="flex-start" alignItems="center" className={cx(classes.side)}>
            <Box>
                <Typography component="h1" variant="h2" className={classes.title}>{translated.title}</Typography>
                <Typography component="h2" variant="h5" className={classes.slogan}>{translated.slogan}</Typography>
                <br />
                <br />
                <br />
                <Button href="https://github.com/Assembless" variant="contained" size="large">{translated.findSpace}</Button>
            </Box>
        </Box>

        { /* What a hell I've created..? */}
        <Hidden smDown>
            <Box display="flex" justifyContent="flex-end" alignItems="center" className={cx(classes.side)}>
                <div>
                    <Box width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.galaxy}>
                    </Box>
                    <Box width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.galaxyFade}>
                    </Box>
                    <Box width="550px" height="550px" display="flex" alignItems="center" justifyContent="center" className={classes.orbit}>
                    </Box>
                    <Box width="500px" height="500px" display="flex" alignItems="center" justifyContent="center" className={classes.atmosphere}>
                    </Box>
                    <Box width="400px" height="400px" display="flex" alignItems="center" justifyContent="center" className={classes.planet}>
                        <img src="https://media4.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e476yvh801dnv123fvcatmqyc9iqp9mee4zcv5pwfsr&rid=giphy.gif" style={{ width: "400px", height: "400px" }} />
                    </Box>
                </div>
            </Box> 
        </Hidden>
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