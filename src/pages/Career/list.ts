import CareerRole, { ICareerRole } from "api/CareerRole.model";
import projects from 'components/common/Projects/list';

const makeCareerRole = (data: ICareerRole) => new CareerRole(data.role, data.description, data.icon, data.requirements, data.project, data.questions);

const list = Object.freeze([
    makeCareerRole({
        role: "Front-End Developer",
        project: projects[0],
        description: "Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.",
        icon: "code",
        requirements: [{ label: "Git", level: 2 }, { label: "React", level: 1 }],
        questions: ['labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.',
            'labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.'],
    }),
    makeCareerRole({
        role: "Lead Back-End Developer",
        project: projects[2],
        description: "Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.",
        icon: "code",
        requirements: [{ label: "Git", level: 3 }, { label: "Express", level: 3 }, { label: "MySQL", level: 3 }],
        questions: ['labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.',
            'labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.',
            'labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.'],
    }),
    makeCareerRole({
        role: "Back-End Developer",
        project: projects[1],
        description: "Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.",
        icon: "code",
        requirements: [{ label: "Git", level: 2 }, { label: "Express", level: 1 }, { label: "Firebase", level: 1 }]
    }),
    makeCareerRole({
        role: "UI/UX Designer",
        project: projects[0],
        description: "Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.",
        icon: "brush",
        requirements: [{ label: "Prototyping tool", level: 2, description: "Adobe Xd, Figma, Framer etc." },]
    }),
    makeCareerRole({
        role: "Software tester",
        project: projects[0],
        description: "Laborum commodo anim incididunt dolor eu quis deserunt. Dolor est voluptate mollit non ut commodo. Consectetur veniam incididunt pariatur enim non non mollit eu velit qui do. Elit labore eiusmod ea eu ex irure anim commodo irure ipsum. Culpa eu sit officia veniam Lorem labore pariatur aliqua enim fugiat culpa id. Dolore mollit veniam nulla velit consectetur consequat duis cupidatat voluptate consectetur. Excepteur duis est ea exercitation sunt officia cillum pariatur sit aute qui excepteur.",
        icon: "flash_on"
    }),
]) //as unknown as ICareerRole[];

export default list
