import "./css/App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import RecentPosts from "./components/RecentPosts";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const App = () => {
  const images = {
    post1: {
      img1: {
        src: "http://localhost:3000/images/post1/about-me-ME.jpg",
        alt: '"A picture of me in punk makeup',
        caption: `Me on a typical day.`,
      },
      img2: {
        src: "images/post1/about-me-WINNIE.jpg",
        alt: "My dog Winnie smiling",
        caption: `I don’t like sharing pictures of my daughter on the internet
        because there are too many weirdos (and not always the good
        kind), so here’s my dog Winnie.`,
      },
      img3: {
        src: "images/post1/about-me-PRIDE.jpg",
        alt: "Me and my wife at Pride 2013",
        caption: `My wife (then girlfriend) and I at Pride 2013 after the 5k fun
        run (told you it had been awhile!) It demonstrates my love of
        running, my love for my wife, and my love of being a less crappy
        person.`,
      },
    },
  };
  const posts = [
    {
      id: 1,
      title: (
        <Typography
          className="title"
          display="block"
          variant="h2"
          color="secondary"
          component="h2"
        >
          About me
        </Typography>
      ),
      description: (
        <Typography
          className="description"
          display="block"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          I talk all about myself
        </Typography>
      ),
      date: (
        <Typography variant="caption" color="textSecondary" component="p">
          {new Date(1620414480 * 1000).toLocaleDateString()}
        </Typography>
      ),
      fullPost: (
        <Container style={{ padding: 0 }} maxWidth="md" className="post-body">
          <Container style={{ padding: 0 }} className="image-container">
            <img src={images.post1.img1.src} alt={images.post1.img1.alt} />
            <Typography variant="caption" color="textSecondary" component="p">
              {images.post1.img1.caption}
            </Typography>
          </Container>
          <Typography
            display="block"
            variant="paragraph"
            color="textPrimary"
            component="p"
          >
            Hello dear readers. My name is Andrew Borondia. I am a husband,
            father (one human and four non-humans), gamer, nerd, and currently,
            a student in the Software Developer program at the Manitoba
            Institute of Trades and Technology (MITT). I currently spend my days
            banging my head against the wall (not literally, thank you for your
            concern) trying to understand the vast topic that is computer
            programming, spending as much quality time with my daughter as I
            can, and trying to be a less crappy version of myself than I was the
            previous day.
          </Typography>
          <Container style={{ padding: 0 }} className="image-container">
            <img src={images.post1.img2.src} alt={images.post1.img2.alt} />
            <Typography variant="caption" color="textSecondary" component="p">
              {images.post1.img2.caption}
            </Typography>
          </Container>
          <Typography
            display="block"
            variant="paragraph"
            color="textPrimary"
            component="p"
          >
            I don’t have many hobbies but the ones I do have occupy a lot of my
            time. I enjoy reading almost any well written story, though I have a
            penchant for fantasy, horror, and sci-fi (particularly dystopian
            novels such as 1984, The Handmaid’s Tale, and similar novels). I
            also love a good revenge story (The Count of Monte Cristo, Carrie,
            Rose Madder, you get the idea.) I enjoy going running, though I’ll
            admit, it has been a lot longer than I’d like to admit since I have
            been on a good one, unless you count chasing my daughter in whatever
            silly game we’re playing!
          </Typography>
          <Typography
            display="block"
            variant="paragraph"
            color="textPrimary"
            component="p"
          >
            Another hobby, and what inspired me to enroll at MITT is my love of
            coding, particularly in the context of game development. There has
            been something about coding languages that has appealed to me since
            my young teenage years. I love the idea that through this medium I
            can create the sort of video games (and other cool stuff) that I
            loved and grew up playing. Now that I’m a few months in, I am even
            more convinced that software development is for me.
          </Typography>
          <Container style={{ padding: 0 }} className="image-container">
            <img src="images/post1/about-me-PRIDE.jpg" alt="" />
            <Typography variant="caption" color="textSecondary" component="p">
              {images.post1.img3.caption}
            </Typography>
          </Container>

          <Typography
            display="block"
            variant="paragraph"
            color="textPrimary"
            component="p"
          >
            In lieu of a proper closing statement, I’ll leave you with one of my
            favourite quotes:{" "}
            <span className="quote">
              “Don’t ever, for any reason, do anything, to anyone, for any
              reason, ever, no matter what, no matter where, or who, or who you
              are with, or where you are going, or where you’ve been, ever, for
              any reason, whatsoever.” Michael Scott
            </span>
          </Typography>
        </Container>
      ),
    },
  ];
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Main posts={posts} images={images} />
          </Route>

          <Route exact path="/recent-posts">
            <RecentPosts />
          </Route>

          <Route path="/blog">
            <Blog posts={posts} />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about-me">
            <AboutMe post={posts[0]} />
          </Route>

          <Route path="/contact">{/* <Contact /> */}</Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
