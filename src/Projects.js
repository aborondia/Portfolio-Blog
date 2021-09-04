const images = {
  project1: {
    img: {
      src: "/images/project1/image.png",
      alt: "A picture of Unnamed RPG Game",
      caption: { text: `A fight with the Demon Lord.` },
    },
  },
  project2: {
    img: {
      src: "/images/project2/image.png",
      alt: "screenshot of project site",
      caption: { text: `A screenshot of the laptop search page.` },
    },
  },
  project3: {
    img: {
      src: "/images/project3/image.png",
      alt: "a screenshot of a Mittflix search",
      caption: { text: `A screenshot of a MittFlix search.` },
    },
  },
  project4: {
    img: {
      src: "/images/project4/image.png",
      alt: "an image of various books in their respective bookshelves",
      caption: { text: `A screenshot of the MittReads bookshelves.` },
    },
  },
  project5: {
    img: {
      src: "/images/project5/image.png",
      alt: "an image of a route search in the app",
      caption: {
        text: `A screenshot showing a routes available from the user's location to their selected destination.`,
      },
    },
  },
  project6: {
    img: {
      src: "",
      alt: "",
      caption: { text: "" },
    },
  },
  project7: {
    img: {
      src: "/images/project7/image.png",
      alt: "an example of a search in the app",
      caption: {
        text: `A screenshot showing a search performed in the Trip Planner.`,
      },
    },
  },
};

const projects = [
  {
    id: 1,
    title: "Unnamed RPG Game",
    description: (
      <>
        This is a project I made as part of the Software Developer program at
        the Manitoba Institute of trades and Technology. It is an RPG game built
        using C#, for the C# console. The requirements for the project were very
        basic, but I have added many extra features.
      </>
    ),
    gitHub: "https://github.com/aborondia/Unnamed-RPG-Game",
    live: "",
  },
  {
    id: 2,
    title: "Laptop Supplier",
    description: (
      <>
        This is a project I made as part of the Software Developer program at
        the Manitoba Institute of trades and Technology. It was created using C#
        & ASP.Net MVC that has the basic functionality of an online shop. It
        allows users to search through a (small, local) database of laptops.
        Some of the functionalities that are implemented are sorting based on
        criteria such as price, year, etc., adding/removing brands/laptops from
        the database, and comparing laptop models.
      </>
    ),
    gitHub: "https://github.com/aborondia/Laptop-Supplier",
    live: "https://bsite.net/aborondia/",
  },
  {
    id: 3,
    title: "MittFlix",
    description: (
      <>
        This is a project I made as part of the Software Developer program at
        the Manitoba Institute of trades and Technology. It is created with
        React.js and allows the user to search for movies in the TMDB API
        database. The user can add & remove movies to and from their watch list.
      </>
    ),
    gitHub: "https://github.com/aborondia/Mittflix",
    live: "https://affectionate-montalcini-1faf8b.netlify.app/",
  },
  {
    id: 4,
    title: "MittReads",
    description: (
      <>
        This is a project I made as part of the Software Developer program at
        the Manitoba Institute of trades and Technology. This app, made in
        React.js, allows you to search through a (local storage) book database
        (json) and add those books to categories in your "book shelf."
      </>
    ),
    gitHub: "https://github.com/aborondia/MittReads",
    live: "https://fervent-visvesvaraya-fc46ee.netlify.app/",
  },
  {
    id: 5,
    title: "Trip Planner",
    description: (
      <>
        This is a project I made as part of the Software Developer program at
        the Manitoba Institute of trades and Technology. It it made in
        JavaScript, and uses the <a href="https://www.mapbox.com">mapBox</a>{" "}
        API, and <a href="https://api.winnipegtransit.com">Winnipeg</a> Transit
        API, to allow users to search for their destination origin (can also use
        user location), and destination, and gives them a list of routes (based
        on current time) they can take to reach it. The user can click on a
        route to view directions (ride bus, walk, transfer).
      </>
    ),
    gitHub: "https://github.com/aborondia/Trip-Planner",
    live: "https://flamboyant-mahavira-e9230e.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio Blog",
    description: (
      <>
        This is a site I created entirely in React.js to house the projects and
        writing I have done as part of the Software Developer program at the
        Manitoba Institute of trades and Technology. You're actually already
        here. What do you think?
      </>
    ),
    gitHub: "https://github.com/aborondia/Portfolio-Blog",
    live: "",
  },
  {
    id: 7,
    title: "Nexbuss",
    description: (
      <>
        This is a project I made during my time in the Software Developer course
        at the Manitoba Institute of Trades and Technology. It uses the{" "}
        <a href="https://api.winnipegtransit.com/">Winnipeg Transit API</a> to
        find information on buses that will be stopping at a specific stop,
        which can be searched based on the street name.
      </>
    ),
    gitHub: "https://github.com/aborondia/Nexbuss",
    live: "https://flamboyant-mestorf-a2139c.netlify.app/",
  },
];

export const getProjectsInfo = () => {
  const projectsInfo = [];

  for (let i = 0; i < projects.length; i++) {
    projectsInfo.push({
      id: projects[i].id,
      title: projects[i].title,
      description: projects[i].description,
      image: images[`project${projects[i].id}`].img,
      gitHub: projects[i].gitHub,
      live: projects[i].live,
    });
  }

  return projectsInfo;
};
