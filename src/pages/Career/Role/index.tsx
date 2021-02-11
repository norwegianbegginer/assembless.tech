// Deps scoped imports.
import React, { useState } from "react";
import { makeStyles, Box, Typography, IconButton, Icon, Avatar, DialogContent, Dialog, DialogActions, Button, Theme, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useLittera } from "react-littera";
import cx from "classnames";
// @ts-ignore


// Project scoped imports.
import { ICareerRole, IRoleRequirements } from "api/CareerRole.model";

// Component scoped imports.
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

    const [openForm, setOpenForm] = useState(false);
    const handleOpenForm = () => {
        setOpenForm(true);
        setOpen(false);
    }
    const handleCloseForm = () => setOpenForm(false);

    const handleNavigation = (path: string) => () => {
        window.open(path, "_blank");
    }

    return <>
        <Box className={cx(classes.root, props.className)} style={props.style} display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                <Avatar style={{ marginRight: "18px", backgroundColor: "#FFF" }} variant="circular">
                    <Icon style={{ color: "#000" }}>{props.role.icon}</Icon>
                </Avatar>

                <Box>
                    <Typography variant="h5" style={{ fontFamily: "'PT Mono', monospace", }}>{props.role.role}</Typography>
                    {props.role.project && <Typography style={{ cursor: "pointer", opacity: 0.65 }} onClick={handleNavigation(props.role.project.name ?? "")}>{props.role.project.name}</Typography>}
                </Box>
            </Box>

            <IconButton color="primary" onClick={handleOpen} ><Icon color="primary">launch</Icon></IconButton>
        </Box>
        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: "40vw", padding: '25px' } }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '35px' }}>
                <Box >
                    <Typography variant="h5" style={{ fontFamily: "'PT Mono', monospace", marginBottom: '4px', fontSize: '32px' }}>{props.role.role}</Typography>
                    {props.role.project && <Typography variant="h6" style={{ opacity: 0.6, fontSize: '18px' }}>{props.role.project.name}</Typography>}
                </Box>
                <DialogActions style={{ padding: '0', alignItems: 'flex-start' }}>
                    <Button variant="text" onClick={handleClose}><Icon>close</Icon></Button>
                </DialogActions>
            </Box>
            <Box>
                <Typography style={{ fontSize: '22px', marginBottom: '5px' }}>Tech Stack</Typography>
                <Box style={{ height: '2px', background: '#fff', opacity: '0.1' }}></Box>
                <Box style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '20px' }}>
                    {props.role.requirements && props.role.requirements.map(MapRequriements(props.role.requirements))}
                </Box>
            </Box>
            <Box style={{ height: '2px', background: '#fff', opacity: '0.1', marginBottom: '25px' }}></Box>
            <DialogContent style={{ padding: '0' }}>
                <Typography style={{ opacity: '0.7', }}>{props.role.description}</Typography>
            </DialogContent>
            <DialogActions style={{ padding: '0', alignItems: 'flex-end', marginTop: '25px' }}>
                <Button style={{ backgroundColor: '#2196f3', color: '#fff' }} variant="contained" onClick={handleOpenForm}>apply</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={openForm} onClose={handleCloseForm} PaperProps={{ style: { width: '70vw', padding: '50px' } }} maxWidth='xl' >
            <RecrutingForm role={props.role.role} questions={props.role.questions ?? undefined} />
        </Dialog>
    </>
}

const MapRequriements = (requirements: IRoleRequirements[]) => (requirement: IRoleRequirements) => (
    <Box style={{ margin: '0 35px 20px 0', }}>
        {[...Array(4)].map((el, index) => <Icon style={{ color: `${index < requirement.level ? '#2196f3' : 'primary'}`, fontSize: '16px', marginRight: '3px' }} >fiber_manual_record</Icon>)
        }
        <Typography style={{ fontSize: '18px', letterSpacing: '1px' }}>{requirement.label}</Typography>
    </Box >
)
const RecrutingForm = ({ role, questions, }: { role: string, questions?: string[] }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [time, setTime] = useState('');
    const [questionsValue, setQuestions] = useState({});

    const handleChange = (e: any) => {
        const value = e.target.value;
        const field = e.target.name;
        const questionId = e.target.id;

        switch (field) {
            case 'first_name':
                setFirstName(value);
                break;
            case 'last_name':
                setLastName(value);
                break;
            case 'emailField':
                setEmail(value);
                break;
            case 'expField':
                setExperience(value);
                break;
            case 'timeField':
                setTime(value);
                break;
            case 'question':
                setQuestions(prevState => ({
                    ...prevState,
                    [questionId]: value
                }))
                break;
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h3" style={{ fontSize: '16px', textTransform: 'uppercase', opacity: '0.4', letterSpacing: '1px', marginBottom: '5px' }}> {role}</Typography>
            <Typography variant="h2" style={{ fontFamily: "'PT Mono', monospace", marginBottom: '40px', fontSize: '32px' }}>application form</Typography>
            <Typography style={{ marginBottom: '35px', opacity: '0.7', width: '70%' }}>Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.</Typography>
            <Box display='flex' flexDirection='column' style={{ marginBottom: '25px' }} >
                <TextField autoComplete='off' style={{ marginBottom: '10px', backgroundColor: '#000', borderRadius: '4px' }} variant="filled" label="Name" name='first_name' value={firstName} onChange={handleChange} />
                <TextField autoComplete='off' style={{ marginBottom: '10px', backgroundColor: '#000', borderRadius: '4px' }} variant="filled" label="Surname" name='last_name' value={lastName} onChange={handleChange} />
                <TextField autoComplete='off' style={{ marginBottom: '10px', backgroundColor: '#000', borderRadius: '4px' }} variant="filled" label="Email" name='emailField' value={email} onChange={handleChange} />
                <TextField autoComplete='off' style={{ marginBottom: '10px', backgroundColor: '#000', borderRadius: '4px' }} variant="filled" label="Years of commercial and non-commercial experience" name='expField' value={experience} onChange={handleChange} />
                <TextField autoComplete='off' style={{ marginBottom: '10px', backgroundColor: '#000', borderRadius: '4px' }} variant="filled" label="Time weekly to spend on contributions" name='timeField' value={time} onChange={handleChange} />
            </Box>
            {questions &&
                questions.map((question, index) => (
                    <QuestionDiv question={question} index={index} handleChange={handleChange} questionsValue={questionsValue} />
                ))
            }
            <DialogActions style={{ padding: '0', justifyContent: 'center', marginTop: '50px' }}>
                <Button style={{ backgroundColor: '#2196f3', color: '#fff' }} variant="contained" size="large" type='submit'>Send application</Button>
            </DialogActions>
        </form>

    )
}

const QuestionDiv = ({ question, index, questionsValue, handleChange }: { question: string, index: number, questionsValue: Record<string, string>, handleChange: (e: any) => void }) => {
    const questionNr = index + 1;

    return (
        <Box style={{ marginBottom: '30px' }}>
            <Typography variant='h5' style={{ fontSize: '17px', marginBottom: '5px' }}>Question {questionNr}</Typography>
            <Typography style={{ marginBottom: '10px', opacity: '0.7' }}>{question}</Typography>
            <TextField name='question' multiline variant="filled" value={questionsValue[`question${questionNr}`]} id={`question${questionNr}`} onChange={handleChange} style={{ backgroundColor: '#000', borderRadius: '4px', width: '100%', }} />
        </Box>
    )
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