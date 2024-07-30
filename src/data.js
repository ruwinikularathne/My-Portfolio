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
         github: "https://github.com/ruwinikularathne/MeterMate",      
         figma: "https://www.figma.com/design/9FTDSHjDf8aogp8M6hMGbo/Sanity-Sketching-Kit-(Community)?node-id=436-2301&t=BB4YbfBlNbVihhP4-0", 
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
        github: "https://github.com/ruwinikularathne/My-Portfolio",
        website: "https://ruwinikularathne.github.io/",
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
        github: "https://github.com/ruwinikularathne/noodly-web-app",
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
        github: "https://github.com/isurubandara1/MoviesTicketBooking_Website",
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
        github: "https://github.com/ruwinikularathne/flutterweatherapp",
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
        github: "https://github.com/ruwinikularathne/travel-web",
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
  

