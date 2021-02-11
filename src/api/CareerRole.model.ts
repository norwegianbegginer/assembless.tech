import { IProject } from "./Project.model";

export interface ICareerRole {
    role: string;
    project?: IProject;
    description: string;
    icon: string;
    requirements?: IRoleRequirements[];
    questions?: string[];
}

export interface IRoleRequirements {
    label: string;
    level: 1 | 2 | 3 | 4;
    description?: string;
}

class CareerRole implements ICareerRole {
    public role: string;
    public project?: IProject;
    public description: string;
    public icon: string;
    public requirements?: IRoleRequirements[];
    public questions?: string[];

    constructor(role: string, description: string, icon: string, requirements?: IRoleRequirements[], project?: IProject, questions?: string[]) {
        this.role = role;
        this.project = project;
        this.description = description;
        this.icon = icon;
        this.requirements = requirements;
        this.questions = questions;
    }
}

export default CareerRole;