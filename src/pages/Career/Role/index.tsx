// Deps scoped imports.
import React, { useState } from "react";
import { makeStyles, Box, Typography, IconButton, Icon, Avatar, DialogContent, Dialog, DialogActions, Button, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useLittera } from "react-littera";
import cx from "classnames";
// @ts-ignore
import { InlineWidget } from "react-calendly";

// Project scoped imports.

// Component scoped imports.
import { ICareerRole } from "../types";
import styles from "./styles";
import translations from "./trans";

/**
 * Career role component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const CareerRole = (props: CareerRoleProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const theme: Theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNavigation = (path: string) => () => {
        window.open(path, "_blank");
    }

    const prefill = {
        customAnswers: {
            a1: `${props.role.title} / ${props.role.project}`,
        }
    }

    return <>
        <Box className={cx(classes.root, props.className)} style={props.style} display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                <Avatar style={{ marginRight: "18px", backgroundColor: "#FFF" }} variant="circular">
                    <Icon style={{ color: "#000" }}>{props.role.icon}</Icon>
                </Avatar>

                <Box>
                    <Typography variant="h5" style={{ fontFamily: "'PT Mono', monospace", }}>{props.role.title}</Typography>
                    <Typography style={{ cursor: "pointer", opacity: 0.65 }} onClick={handleNavigation(props.role.projectUrl)}>{props.role.project}</Typography>
                </Box>
            </Box>

            <IconButton color="primary" onClick={handleOpen} ><Icon color="primary">launch</Icon></IconButton>
        </Box>

        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: "70vw" } }}>
            <DialogContent>
                <InlineWidget url="https://calendly.com/assembless/meeting" prefill={prefill} styles={{ minWidth: "320px", width: "100%", height: "630px" }} pageSettings={{ primaryColor: stripHash(theme.palette.primary.main), textColor: stripHash(theme.palette.text.primary), backgroundColor: stripHash(theme.palette.background.paper) }} />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleClose}>{translated.close}</Button>
            </DialogActions>
        </Dialog>
    </>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type CareerRoleProps = {
    className?: string;
    style?: React.CSSProperties;
    role: ICareerRole;
}

// Time to export! 🚚
export default CareerRole;

const stripHash = (val: string) => val.split("#")[1];