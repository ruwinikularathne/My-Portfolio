import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

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
      image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
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
      image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
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
      image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
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
          name:"Tailwind CSS",
          icon: <SiExpress/>,
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
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
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
      image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
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
      image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
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
  

