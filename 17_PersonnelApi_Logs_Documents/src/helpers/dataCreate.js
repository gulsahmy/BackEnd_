"use strict";
const departments = [
  {
    name: "Information Technology",
    _id: "669531665d670713409e2a4a",
  },
  {
    name: "Human Resources",
    _id: "66952d66e1b780e7b49e8111",
  },
  {
    name: "Finance",
    _id: "6695319c5d670713409e2a51",
  },
  {
    name: "Marketing",
    _id: "669531ad5d670713409e2a55",
  },
];
const personnels = [
  {
    departmentId: "66952d66e1b780e7b49e8111",
    username: "jdoe",
    password: "test1",
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
    email: "jdoe@example.com",
    title: "Software Engineer",
    salary: 75000,
    description: "Junior developer in the IT department.",
    isActive: true,
    isAdmin: true,
    isLead: false,
  },
  {
    departmentId: "66952d66e1b780e7b49e8111",
    username: "asmith",
    password: "test1",
    firstName: "Alice",
    lastName: "Smith",
    phone: "0987654321",
    email: "asmith@example.com",
    title: "Project Manager",
    salary: 90000,
    description: "Oversees project delivery.",
    isActive: true,
    isAdmin: false,
    isLead: true,
  },
  {
    departmentId: "66952d66e1b780e7b49e8111",
    username: "bjackson",
    password: "test1",
    firstName: "Bob",
    lastName: "Jackson",
    phone: "2345678901",
    email: "bjackson@example.com",
    title: "UI/UX Designer",
    salary: 70000,
    description: "Designs user-friendly interfaces.",
    isActive: true,
    isAdmin: false,
    isLead: false,
  },
  {
    departmentId: "66952d66e1b780e7b49e8111",
    username: "clara",
    password: "hashedPassword4",
    firstName: "Clara",
    lastName: "Johnson",
    phone: "3456789012",
    email: "clara@example.com",
    title: "Data Analyst",
    salary: 80000,
    description: "Analyzes data to inform business decisions.",
    isActive: true,
    isAdmin: false,
    isLead: false,
  },
  {
    departmentId: "669531665d670713409e2a4a",
    username: "dsmith",
    password: "hashedPassword5",
    firstName: "David",
    lastName: "Smith",
    phone: "4567890123",
    email: "dsmith@example.com",
    title: "DevOps Engineer",
    salary: 95000,
    description: "Manages server infrastructure.",
    isActive: true,
    isAdmin: false,
    isLead: true,
  },
  {
    departmentId: "669531665d670713409e2a4a",
    username: "emily",
    password: "hashedPassword6",
    firstName: "Emily",
    lastName: "Brown",
    phone: "5678901234",
    email: "emily@example.com",
    title: "QA Engineer",
    salary: 72000,
    description: "Ensures quality of software products.",
    isActive: true,
    isAdmin: false,
    isLead: false,
  },
  {
    departmentId: "669531ad5d670713409e2a55",
    username: "frank",
    password: "hashedPassword7",
    firstName: "Frank",
    lastName: "Garcia",
    phone: "6789012345",
    email: "frank@example.com",
    title: "Technical Support",
    salary: 60000,
    description: "Provides technical support to customers.",
    isActive: true,
    isAdmin: false,
    isLead: true,
  },
  {
    departmentId: "669531ad5d670713409e2a55",
    username: "george",
    password: "hashedPassword8",
    firstName: "George",
    lastName: "Martinez",
    phone: "7890123456",
    email: "george@example.com",
    title: "Systems Administrator",
    salary: 88000,
    description: "Manages IT systems and networks.",
    isActive: true,
    isAdmin: false,
    isLead: false,
  },
  {
    departmentId: "669531ad5d670713409e2a55",
    username: "hannah",
    password: "hashedPassword9",
    firstName: "Hannah",
    lastName: "Wilson",
    phone: "8901234567",
    email: "hannah@example.com",
    title: "Product Owner",
    salary: 85000,
    description: "Defines product vision and roadmap.",
    isActive: true,
    isAdmin: true,
    isLead: false,
  },
];
const Personnel = require("../models/personnel.model");
const Department = require("../models/department.model");
const { mongoose } = require("../configs/dbConnection");

async function dataCreate() {
  //   await mongoose.connection.dropDatabase();
  await Department.deleteMany();
  await Department.insertMany(departments);
  await Personnel.deleteMany();
  let isFirstAccount = (await Personnel.countDocuments()) === 0;
  //   await Personnel.insertMany(personnels);
  for (const personnel of personnels) {
    personnel.isAdmin = isFirstAccount ? true : false;
    isFirstAccount = false;
    await Personnel.create(personnel);
  }
}
module.exports = dataCreate;
