const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course");
dotenv.config();

const courses = [

{
title: "React Basics",
topic: "React",
platform: "SWAYAM",
level: "Beginner",
link: "https://swayam.gov.in"
},

{
title: "Advanced React Development",
topic: "React",
platform: "Skill India",
level: "Intermediate",
link: "https://skillindia.gov.in"
},

{
title: "JavaScript Fundamentals",
topic: "JavaScript",
platform: "NPTEL",
level: "Beginner",
link: "https://nptel.ac.in"
},

{
title: "NodeJS Backend Development",
topic: "NodeJS",
platform: "SWAYAM",
level: "Intermediate",
link: "https://swayam.gov.in"
},

{
title: "HTML Web Design",
topic: "HTML",
platform: "Skill India",
level: "Beginner",
link: "https://skillindia.gov.in"
},

{
title: "CSS Styling for Web",
topic: "CSS",
platform: "NPTEL",
level: "Beginner",
link: "https://nptel.ac.in"
},

{
title: "MongoDB Database Basics",
topic: "MongoDB",
platform: "SWAYAM",
level: "Beginner",
link: "https://swayam.gov.in"
}

];

const seedCourses = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
        await Course.deleteMany();
        await Course.insertMany(courses);
        console.log("Courses seeded");
        process.exit();
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
};
seedCourses();