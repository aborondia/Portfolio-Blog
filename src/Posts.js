import Container from "@material-ui/core/Container";
import Bibliography from "./components/Bibliography";
import { Link } from "react-router-dom";
import {Link as HTTPLink} from '@material-ui/core';
import {
  Title,
  Description,
  PostDate,
  Paragraph,
  Image,
} from "./components/TypographyPresets";

const images = {
  post1: {
    img1: Image({
      src: "http://localhost:3000/images/post1/about-me-ME.jpg",
      alt: '"A picture of me in punk makeup',
      caption: { text: `Me on a typical day.`, link: '' },
    }),
    img2: Image({
      src: "images/post1/about-me-WINNIE.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `I don’t like sharing pictures of my daughter on the internet because
      there are too many weirdos (and not always the good kind), so here’s
      my dog Winnie.`,
        link: '',
      },
    }),
    img3: Image({
      src: "images/post1/about-me-PRIDE.jpg",
      alt: "Me and my wife at Pride 2013",
      caption: {
        text: `My wife (then girlfriend) and I at Pride 2013 after the 5k fun run
      (told you it had been awhile!) It demonstrates my love of running, my
      love for my wife, and my love of being a less crappy person.`,
        link: '',
      },
    }),
  },
  post2: {
    img1: Image({
      src: "http://localhost:3000/images/post2/image1.jpg",
      alt: '"A picture of me in punk makeup',
      caption: {
        caption: `Image by Lewis Ogden`,
        link: `https://www.flickr.com/photos/bitsfrombytes/44035385264`,
      },
    }),
    img2: Image({
      src: "images/post2/image2.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `Image by Kevin Smith`,
        link: `https://www.flickr.com/photos/145362372@N03/45109137715`,
      },
    }),
  },
};
const paragraphs = {
  post1: [
    Paragraph(
      <>
        Hello dear <b>readers</b>. My name is Andrew Borondia. I am a husband,
        father (one human and four non-humans), gamer, nerd, and currently, a
        student in the Software Developer program at the{" "}
        <b>Manitoba Institute of Trades and Technology (MITT)</b>. I currently
        spend my days banging my head against the wall (not literally, thank you
        for your concern) trying to understand the vast topic that is computer
        programming, spending as much quality time with my daughter as I can,
        and trying to be a less crappy version of myself than I was the previous
        day.
      </>
    ),
    Paragraph(
      <>
        I don’t have many hobbies but the ones I do have occupy a lot of my
        time. I enjoy reading almost any well written story, though I have a
        penchant for fantasy, horror, and sci-fi (particularly dystopian novels
        such as
        <b>1984</b>, <b>The Handmaid’s Tale</b>, and similar novels). I also
        love a good revenge story (<b>The Count of Monte Cristo</b>,{" "}
        <b>Carrie</b>, <b>Rose Madder</b>, you get the idea.) I enjoy going
        running, though I’ll admit, it has been a lot longer than I’d like to
        admit since I have been on a good one, unless you count chasing my
        daughter in whatever silly game we’re playing!
      </>
    ),
    Paragraph(
      <>
        Another hobby, and what inspired me to enroll at <b>MITT</b> is my love
        of coding, particularly in the context of game development. There has
        been something about coding languages that has appealed to me since my
        young teenage years. I love the idea that through this medium I can
        create the sort of video games (and other cool stuff) that I loved and
        grew up playing. Now that I’m a few months in, I am even more convinced
        that software development is for me.
      </>
    ),
    Paragraph(
      <>
        In lieu of a proper closing statement, I’ll leave you with one of my
        favourite quotes:
        <span className="quote">
          “Don’t ever, for any reason, do anything, to anyone, for any reason,
          ever, no matter what, no matter where, or who, or who you are with, or
          where you are going, or where you’ve been, ever, for any reason,
          whatsoever.” Michael Scott
        </span>
      </>
    ),
  ],
  post2: [
    Paragraph(
      <>
        {" "}
        There are a plethora of different apps and services available today. It
        can be difficult to find the balance between staying secure and keeping
        our sanity with all the different logins and passwords we are expected
        to remember. Here are easy to follow tips that will help keep you safe
        online:{" "}
        <ul>
          <li> Use a longer password, not necessarily a more complex one.</li>
          <li>Use a password manager.</li>
          <li>Use different passwords everywhere.</li>
        </ul>
      </>
    ),
    Paragraph(
      <>
        First off, length versus complexity. Look at the following two examples:
        “qN_2!” and “horsespaceshuttlecoolbeans”; it might surprise you to know
        that the second example would be considered more secure by tech/security
        experts, including the United States National Institute of Standards and
        Technology (National Institute of Standards and Technology, 2017). This
        is not to say that something like “1234567890” or other common passwords
        (see{" "}
        <HTTPLink
          component="span"
          variant="caption"
          to="https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords"
          color="primary"
        >
          10,000 most common passwords
        </HTTPLink>
        ) should be considered secure simply because they are longer. It’s
        important to remember that some hackers try to hack accounts by using
        programs that reference lists of common passwords. Another method that
        is commonly used examines every possible combination of characters in an
        attempt to gain access (see{" "}
        <HTTPLink
          component="span"
          variant="caption"
          to="https://en.wikipedia.org/wiki/Brute-force_attack#:~:text=In%20cryptography%2C%20a%20brute%2Dforce,the%20correct%20one%20is%20found."
          color="primary"
        >
          Brute-force attack
        </HTTPLink>
        ). The longer the password, the less likely the brute-force method is to
        work.{" "}
      </>
    ),
    Paragraph(
      <>
        Next, what is a password manager? A password manager can be thought of
        as a “vault” which stores all of the passwords you use. The “vault” is
        protected behind one main password, that is not stored on, or sent
        anywhere by, any servers. This means the user only has to memorize this
        single password, and because it is not stored anywhere, even if the
        password manager's database were to be hacked, your password is still
        secure. It is not completely infallible, but it is generally more secure
        than using weak/duplicate passwords.
      </>
    ),
    Paragraph(
      <>
        Finally, one of the most important ways to keep your personal
        information secure is to use a different password for every account. In
        a 2019 Survey by Google & Harris Poll (Google & Harris Poll, 2019) it
        was found that 53% of users reused their password on multiple accounts,
        and 13% used the same password on all accounts. If a hacker obtains a
        password that is used for more than one account they, potentially, have
        access to all the information on any account with which that password is
        used.{" "}
      </>
    ),
    Paragraph(
      <>
        We looked at using longer passwords, using different passwords for every
        account, and the usefulness of password managers. I hope you find this
        information useful. Thank you for reading.{" "}
      </>
    ),
  ],
};
const otherText = {
  post1: {
    title: Title("About me"),
    description: Description("I talk all about myself."),
    date: PostDate(1620414480),
    citations: [],
  },
  post2: {
    title: Title(`How to Keep Your Accounts Secure`),
    description: Description(`I talk about how to protect yourself online.`),
    date: PostDate(1621868940),
    citations: [
      {
        author: `Google & Harris Poll`,
        date: `2019, February 1`,
        document: `Online Security Survey Google`,
        retrieved: `May 24, 2021`,
        link: `https://services.google.com/fh/files/blogs/google_security_infographic.pdf`,
      },
      {
        author: `National Institute of Standards and Technology`,
        date: `2017, June`,
        document: `Digital Identity Guidelines`,
        retrieved: `May 24, 2021`,
        link: `https://pages.nist.gov/800-63-3/sp800-63b.html`,
      },
    ],
  },
};
const posts = [
  {
    id: 1,
    description: otherText.post1.description,
    citations: otherText.post1.citations,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {otherText.post1.title}
        {otherText.post1.date}
        <Link to="./about-me">by Andrew Borondia</Link>
        {images.post1.img1}
        {paragraphs.post1[0]}
        {images.post1.img2}
        {paragraphs.post1[1]}
        {paragraphs.post1[2]}
        {images.post1.img3}
        {paragraphs.post1[3]}
      </Container>
    ),
  },
  {
    id: 2,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {otherText.post2.title}
        {otherText.post2.date}
        <Link to="./about-me">by Andrew Borondia</Link>
        {paragraphs.post2[0]}
        {images.post2.img1}
        {paragraphs.post2[1]}
        {paragraphs.post2[2]}
        {images.post2.img2}
        {paragraphs.post2[3]}
        {paragraphs.post2[4]}
        <Bibliography citations={otherText.post2.citations} />
      </Container>
    ),
  },
];

export const getPost = (id) => {
  const post = posts.find((post) => post.id === id);
  const postImages = images[`post${id}`];

  return { post: post, images: postImages };
};
