import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";

import pro1 from "./images/pro1.png";
import pro2 from "./images/pro2.png";
import pro3 from "./images/pro3.png";
import pro4 from "./images/pro4.png";
import pro5 from "./images/pro5.png";
import pro6 from "./images/pro6.png";

export const menu = [
    {name:"Home"},
    {name:"About"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]


export const projects = [
    { 
      id:1,
      title: 'MeterMate',
      image: pro1,
      data:{
         description: `A mobile app for self-reading System to electricity bill. `,
         demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
        },
        {
          name:"Flutter",
          icon: <DiReact/>,
        },
        {
          name:"Firebase",
          icon: <DiReact/>,
        },
      ]
    },
    {
      id:2,
      title: 'My Portfolio',
      image: pro2,
     data:{
        description:`A Web platform to showcase my professional background,
qualifications, and projects.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
        },
        {
          name:"JavaScript",
          icon: <FaNodeJs/>,
        },
        {
          name:"Tailwind CSS",
          icon: <SiExpress/>,
        },
      ]
    },
    {
      id:3,
      title: 'Noodly',
      image: pro3,
     data:{
        description: `A web application for ordering noodles from a takeaway restaurant with a dynamic menu.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React JS",
          icon: <TbBrandReactNative/>,
        },
        {
          name:"JavaScript",
          icon: <FaNodeJs/>,
        },
        {
          name:"Firebase",
          icon: <SiMongodb/>,
        },
      ]
    },
    {
      id:4,
      title: 'Movie Ticket Booking Website',
      image: pro4,
      data:{
        description: `A website for booking movie tickets in a theater, focusing on creating an intuitive and responsive user interface `,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Flutter",
          icon: <DiReact/>,
        },
        {
          name:"Firebase",
          icon: <FaNodeJs/>,
        },
      ]
    },
    {
      id:5,
      title: 'Weather App',
      image: pro5,
      data:{
        description: `An app to identify weather information of a specific location.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Flutter",
          icon: <CgFigma/>,
        },
        {
          name:"Open Weather API",
          icon: <CgFigma/>,
        },
      ]
    },
    {
      id:6,
      title: 'Quiz App',
      image: pro6,
      data:{
        description: `An App with several quiz questionas and answers.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Flutter",
          icon: <TbBrandReactNative/>,
        },
      ]
    },
  ]
  

