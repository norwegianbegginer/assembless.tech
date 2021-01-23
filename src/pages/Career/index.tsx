// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Container, Typography } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import CareerRole from "./Role/";
import roleList from "./list";
import styles from "./styles";
import translations from "./trans";

/**
 * Career page.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Career = (props: CareerProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Container>
            <Box style={{ marginBottom: "24px" }}>
                <Typography variant="h4" style={{ fontFamily: "'PT Mono', monospace", }}>{translated.title}</Typography>
                <Typography style={{ opacity: 0.65 }}>{translated.description}</Typography>
            </Box>

            {
                roleList.map(role => <CareerRole key={role.title + role.project} role={role} />)
            }
        </Container>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type CareerProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Career;