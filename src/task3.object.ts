type Person = {
    name: string;
    address: string;
    hair_color: string;
    eye_color: string;
    income: number;
    expenses: number;
    hobbies: string[];
    family_members: string[];
    job: string;
    skills: string[];
    marital_status: string;
    friends: string[]; 
}

const person1: Person = {
    name: "John Doe",
    address: "123 Main St",
    hair_color: "Black",
    eye_color: "Brown",
    income: 50000,
    expenses: 30000,
    hobbies: ["Reading", "Gardening", "Cooking"],
    family_members: ["Mom", "Dad", "Sister"],
    job: "Software Engineer",
    skills: ["JavaScript", "React", "Redux"],
    marital_status: "Single",
    friends: ["Jane Smith", "Alex Johnson"]
}

console.log({person1});