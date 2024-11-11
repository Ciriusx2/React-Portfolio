import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m a web developer with expertise in React, Tailwind, HTML, CSS, JavaScript, Python (Django, Flask, Pandas), and experience with Java, C, C++, and Linux. I build responsive, user-focused applications, thrive in collaborative settings, and tackle complex challenges to deliver impactful solutions.`


export const ABOUT_TEXT = `Web developer skilled in React, Tailwind, HTML, CSS, JavaScript, and Python (Django, Flask, Pandas). Experienced with Java, C, C++, and Linux. I create efficient, user-centric applications and thrive on continuous learning and collaboration.`;



export const PROJECTS = [
  {
    title: "Weather Dashboard",
    image: project1,
    description: "A dynamic weather dashboard that provides real-time weather updates, including temperature, humidity, wind speed, and forecast for various locations.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "API Integration"],
    liveLink: 'https://weather-dashboard-drab.vercel.app/'
  }
  ,
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    liveLink: 'https://todo-tasktide.vercel.app/'
  },
  {
    title: "Typing Game",
    image: project3, // Replace with the actual image of the Typing Game project if available
    description:
      "An interactive typing game designed to improve typing speed and accuracy. Players can test their typing skills and track progress.",
    technologies: ["HTML", "CSS", "Vanilla JS"],
    liveLink: "https://typing-game-chi-bay.vercel.app/"
  },
  {
    title: "Password Generator",
    image: project4, // Replace with the actual image of the Password Generator project if available
    description:
      "A simple, customizable password generator tool that creates strong, secure passwords. Users can adjust length and include special characters, numbers, and uppercase letters.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://password-generator-nu-rose.vercel.app/" // Replace with the actual live link if available
  }
  
  

];

