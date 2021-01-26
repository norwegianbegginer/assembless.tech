import { createStyles, Theme } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: Theme) => createStyles({
    root: {
    },
    title: {
        whiteSpace: "pre-line",
        textTransform: "uppercase",
        fontFamily: "'PT Mono', monospace",
        [theme.breakpoints.down("md")]: {
            fontSize: "50px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "44px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "38px"
        },
    },
    slogan: {
        marginTop: "1rem",
        opacity: 0.45
    },
    side: {
        position: "relative",
        width: "50%",
        height: "100vh",
        [theme.breakpoints.down('sm')]: {
            width: "80%"
        }
    },
    atmosphere: {
        borderRadius: "500px", backgroundColor: "rgba(255, 255, 255, .046)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0.84)",
        animation: `$atmosphereBreathing 16000ms linear`,
        animationIterationCount: "infinite",
    },
    planet: {
        borderRadius: "400px", backgroundColor: "#212121", overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 20px 10px rgb(0 0 0 / 15%)",

    },
    galaxy: {
        background: "url(https://unblast.com/wp-content/uploads/2018/10/Sky-Stars-Pattern-0.jpg)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "550px",
        opacity: 0.45
    },
    galaxyFade: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "550px",
        background: "radial-gradient(transparent 50%, black 66%)"
    },
    orbit: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        borderRadius: "550px", border: "1px solid #666666",
        animation: `$orbitRotation 15000ms linear`,
        animationIterationCount: "infinite",
        "&:after": {
            content: "''",
            width: "18px",
            height: "18px",
            backgroundColor: "#666666",
            borderRadius: "18px",
            position: "absolute",
            left: "-9px",
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    "@keyframes orbitRotation": {
        "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)"
        },
        "100%": {
            transform: "translate(-50%, -50%) rotate(359deg)"
        }
    },
    "@keyframes atmosphereBreathing": {
        "0%": {
            transform: "translate(-50%, -50%) scale(0.84)"
        },
        "50%": {
            transform: "translate(-50%, -50%) scale(1.02)"
        },
        "100%": {
            transform: "translate(-50%, -50%) scale(0.84)"
        },
    },
}));