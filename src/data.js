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
          name:"React Js",
        },
        {
          name:"Flutter",
        },
        {
          name:"Firebase",
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
          name:"React Js",
        },
        {
          name:"JavaScript",
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
        },
        {
          name:"JavaScript",
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
        },
        {
          name:"Firebase",
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
        },
        {
          name:"Open Weather API",
        },
      ]
    },
    {
      id:6,
      title: 'Travel Website',
      image: pro6,
      data:{
        description: `A travel website to explore destinations, book travel packages, and read travel guides.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React JS",
        },
        {
          name:"Tailwind CSS",
        },
      ]
    },
  ]
  

