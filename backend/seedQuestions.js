const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();

/* QUESTIONS DATASET */

const questions = [

/* REACT */

{
  question: "What is JSX?",
  options: ["JavaScript XML", "Java Syntax", "JSON Extension", "None"],
  correctAnswer: "JavaScript XML",
  topic: "React"
},

{
  question: "React is developed by?",
  options: ["Google", "Facebook", "Microsoft", "Amazon"],
  correctAnswer: "Facebook",
  topic: "React"
},

{
  question: "Which hook manages state in React?",
  options: ["useState", "useData", "useFetch", "useEffectState"],
  correctAnswer: "useState",
  topic: "React"
},

{
  question: "React components must return?",
  options: ["HTML", "JSX", "CSS", "JSON"],
  correctAnswer: "JSX",
  topic: "React"
},

/* JAVASCRIPT */

{
  question: "Which keyword declares a variable in JavaScript?",
  options: ["var", "int", "define", "string"],
  correctAnswer: "var",
  topic: "JavaScript"
},

{
  question: "Which symbol is used for comments in JavaScript?",
  options: ["//", "#", "<!--", "**"],
  correctAnswer: "//",
  topic: "JavaScript"
},

{
  question: "Which method converts JSON string to object?",
  options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
  correctAnswer: "JSON.parse()",
  topic: "JavaScript"
},

{
  question: "JavaScript was originally created by?",
  options: ["Brendan Eich", "Bill Gates", "James Gosling", "Mark Zuckerberg"],
  correctAnswer: "Brendan Eich",
  topic: "JavaScript"
},

/* NODEJS */

{
  question: "NodeJS runs on which engine?",
  options: ["V8", "Java VM", "SpiderMonkey", "Chakra"],
  correctAnswer: "V8",
  topic: "NodeJS"
},

{
  question: "Which module creates a server in NodeJS?",
  options: ["http", "server", "fs", "net"],
  correctAnswer: "http",
  topic: "NodeJS"
},

{
  question: "Which command initializes a NodeJS project?",
  options: ["npm init", "node init", "npm create", "node install"],
  correctAnswer: "npm init",
  topic: "NodeJS"
},

/* HTML */

{
  question: "HTML stands for?",
  options: [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyper Transfer Machine Language",
    "None"
  ],
  correctAnswer: "Hyper Text Markup Language",
  topic: "HTML"
},

{
  question: "Which tag is used for hyperlinks?",
  options: ["<a>", "<link>", "<url>", "<href>"],
  correctAnswer: "<a>",
  topic: "HTML"
},

{
  question: "Which tag is used for images?",
  options: ["<img>", "<image>", "<picture>", "<src>"],
  correctAnswer: "<img>",
  topic: "HTML"
},

/* CSS */

{
  question: "CSS stands for?",
  options: [
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Creative Style System",
    "None"
  ],
  correctAnswer: "Cascading Style Sheets",
  topic: "CSS"
},

{
  question: "Which property changes text color?",
  options: ["color", "font-color", "text-color", "style"],
  correctAnswer: "color",
  topic: "CSS"
},

{
  question: "Which property controls spacing inside elements?",
  options: ["padding", "margin", "border", "spacing"],
  correctAnswer: "padding",
  topic: "CSS"
},

/* MONGODB */

{
  question: "MongoDB stores data in?",
  options: ["Documents", "Tables", "Rows", "Graphs"],
  correctAnswer: "Documents",
  topic: "MongoDB"
},

{
  question: "Which command inserts a document in MongoDB?",
  options: ["insertOne()", "add()", "push()", "create()"],
  correctAnswer: "insertOne()",
  topic: "MongoDB"
},

{
  question: "MongoDB documents use which format internally?",
  options: ["BSON", "JSON", "XML", "CSV"],
  correctAnswer: "BSON",
  topic: "MongoDB"
}

];


/* SEED FUNCTION */

const seedDB = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Question.deleteMany();

    await Question.insertMany(questions);

    console.log("Questions seeded successfully");

    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }

};

seedDB();