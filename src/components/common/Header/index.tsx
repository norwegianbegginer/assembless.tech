// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button, Hidden } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import logo from 'assets/logo.jpg'
import vid from 'assets/thumb_vid_min.gif'

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

    return <Box display="flex" justifyContent="space-between" alignItems="flex-start" className={cx(classes.root, props.className)} style={props.style}>
        <Box display="flex" justifyContent="flex-start" alignItems="center" className={cx(classes.side)}>
            <Box>
                <Typography component="h1" variant="h2" className={classes.title}>{translated.title}</Typography>
                <Typography component="h2" variant="h5" className={classes.slogan}>{translated.slogan}</Typography>
                <br />
                <br />
                <br />
                <Button variant="contained" size="large">{translated.findSpace}</Button>
            </Box>
        </Box>
        <Hidden smDown>
            <Box display="flex" justifyContent="flex-end" alignItems="center" className={cx(classes.side)}>
                <Box width="500px" height="500px" maxWidth="100%" display="flex" alignItems="center" justifyContent="center" style={{ background: "url(https://unblast.com/wp-content/uploads/2018/10/Sky-Stars-Pattern-0.jpg)", borderRadius: "50px" }}>
                    <Box overflow="hidden" width="500px" height="500px" maxWidth="100%" display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: "500px 50px 50px 50px" }}>
                        <img alt="thumbnail" src={vid} style={{ width: "auto", height: "105%" }} />
                    </Box>
                </Box>
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