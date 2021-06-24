import Container from "@material-ui/core/Container";
import Bibliography from "./components/Bibliography";
import { Link } from "react-router-dom";
import { Link as HTTPLink } from "@material-ui/core";
import ReactMd from "react-md-file";
import {
  Title,
  Author,
  ParagraphHeader,
  PostDate,
  Paragraph,
  Image,
} from "./components/HTMLBuildHelpers";

const images = {
  post1: {
    img1: {
      src: "http://localhost:3000/images/post1/about-me-ME.jpg",
      alt: "A picture of me in punk makeup",
      caption: { text: `Me on a typical day.`, link: "" },
    },
    img2: {
      src: "images/post1/about-me-WINNIE.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `I don’t like sharing pictures of my daughter on the internet because
      there are too many weirdos (and not always the good kind), so here’s
      my dog Winnie.`,
        link: "",
      },
    },
    img3: {
      src: "images/post1/about-me-PRIDE.jpg",
      alt: "Me and my wife at Pride 2013",
      caption: {
        text: `My wife (then girlfriend) and I at Pride 2013 after the 5k fun run
      (told you it had been awhile!) It demonstrates my love of running, my
      love for my wife, and my love of being a less crappy person.`,
        link: "",
      },
    },
  },
  post2: {
    img1: {
      src: "http://localhost:3000/images/post2/image1.jpg",
      alt: "A picture showing the https lock symbol in a browser.",
      caption: {
        text: `Image of secure website in browser by skylarvision`,
        link: `https://pixabay.com/illustrations/https-web-page-internet-security-3344700/`,
      },
    },
    img2: {
      src: "images/post2/image2.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `A diagram of the TLS 1.2 handshake process.`,
        link: `https://commons.wikimedia.org/wiki/File:TLS_1.2_Handshake`,
      },
    },
  },
  post3: {
    img1: {
      src: "http://localhost:3000/images/post3/image1.jpg",
      alt: "An example of a bad password (123456).",
      caption: {
        text: `Image by Lewis Ogden`,
        link: `https://www.flickr.com/photos/bitsfrombytes/44035385264`,
      },
    },
    img2: {
      src: "images/post3/image2.jpg",
      alt: "A picture of many different security related words swirling around.",
      caption: {
        text: `Image by Kevin Smith`,
        link: `https://www.flickr.com/photos/145362372@N03/45109137715`,
      },
    },
  },
  post4: {},
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
        Today I will explain what <b>Secure Socket Layer (SSL)</b> and{" "}
        <b>Transport Layer Security (TLS)</b> are. You have undoubtedly noticed
        a lock icon, and websites starting with HTTP & HTTPS in your web
        browsers navigation bar which indicates if encryption is being used. I
        will be explaining <b>SSL</b>
        and <b>TLS</b> as simply as possible. By the end of this article, you
        will understand <b>SSL</b> and <b>TLS</b> enough to confidently explain
        the basics to another individual.
      </>
    ),
    Paragraph(
      <>
        <b>SSL</b> is a cryptographic protocol; a protocol that obfuscates data
        and makes it completely unreadable. <b>TLS</b> is an updated version of{" "}
        <b>SSL</b>. The major difference that the update to <b>TLS</b>{" "}
        introduces are fixes to several vulnerabilities that could be exploited
        by hackers, and other malicious entities. To highlight the importance of
        encryption, think of an online shopping site such as Amazon. When
        confirming your purchase, you will be asked to enter your credit card
        information. When you send this information, if for some reason your
        connection (session) with the site is not encrypted, the information
        will be sent exactly as you input it, and can be accessed by others on
        the network; most modern websites have an <b>SSL</b>/<b>TLS</b> protocol
        in place to avoid this situation. When using
        <b>SSL</b>/<b>TLS</b>, instead of your data being sent in an easily
        readable state, it will look similar to this: “
        <b>afgdSGGA15ek@7%#$#5r</b>”, and be completely undecipherable.
      </>
    ),
    Paragraph(
      <>
        When you visit a website, your device will contact the server that hosts
        the website and begin what is called the ‘handshake.” Although the steps
        of a handshake can differ depending on the version of <b>SSL</b>/
        <b>TLS</b> used, they generally will look similar to the image below
        (refer to list below for more details):
      </>
    ),
    Paragraph(
      <>
        <ol>
          <li>
            Your browser sends a message containing what kind of encryption
            protocols (<b>SSL</b>/<b>TLS</b> versions) it can use to the website
            server.
          </li>
          <li>
            The website server obtains an <b>SSL</b>/<b>TLS</b> certificate from
            a <b>certificate authority</b> (<b>CA</b>), which I will explain
            further below, and sends a message back to your browser containing
            the certificate, and the type of encryption protocol it will use.{" "}
          </li>
          <li>
            Your device confirms the certificate is valid and tells the website
            server to start encrypting data.{" "}
          </li>
          <li>
            The website server sends a message to your device confirming it is
            now encrypting data.{" "}
          </li>
          <li>
            All data exchanged between your device and the website server is now
            encrypted.
          </li>
        </ol>
      </>
    ),
    Paragraph(
      <>
        I stated in step 2 that the website server must obtain a certificate
        from a <b>CA</b>. These are trusted companies that receive the
        information from the website server and check that information to
        determine if it is legitimate. If successful, the <b>CA</b> will send
        the website server back an unforgeable, signed certificate. Web browsers
        automatically come with information about trusted <b>CA</b>’s and will
        not accept a certificate from an unknown or untrusted <b>CA</b>.
      </>
    ),
    Paragraph(
      <>
        We looked over the basics of what <b>SSL</b> and <b>TLS</b> were created
        for and how they work in conjunction with you web browser to keep you
        secure. I hope this article has given you a better understanding of
        encryption protocols and their importance in modern times. Thank you for
        reading.
      </>
    ),
  ],
  post3: [
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
        Look at the following two examples: “<b>qN_2!</b>” and “
        <b>horsespaceshuttlecoolbeans</b>”; it might surprise you to know that
        the second example would be considered more secure by tech/security
        experts, including the United States National Institute of Standards and
        Technology (National Institute of Standards and Technology, 2017). This
        is not to say that something like “<b>1234567890</b>” or other common
        passwords (see{" "}
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
        A password manager can be thought of as a “vault” which stores all of
        the passwords you use. The “vault” is protected behind one main
        password, that is not stored on, or sent anywhere by, any servers. This
        means the user only has to memorize this single password, and because it
        is not stored anywhere, even if the password manager's database were to
        be hacked, your password is still secure. It is not completely
        infallible, but it is generally more secure than using weak/duplicate
        passwords.
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
        We looked at the advantages of using longer passwords, using different
        passwords for every account, and using password managers to ensure the
        safety of your personal information. I hope you find this information
        useful. Thank you for reading.{" "}
      </>
    ),
  ],
  post4: [
    Paragraph(
      <>
        {" "}
        You have likely read about, or otherwise heard of <b>HTML</b> (
        <b>Hyper Text Markup Language</b>), and possibly <b>CSS</b> (
        <b>Cascading Style Sheets</b>), but what exactly are they? <b>HTML</b>{" "}
        can be thought of as the bones of a web site, without which, there would
        be no structure. <b>HTML</b> consists of several properties:
        <ul>
          <li>
            <b>Tags</b>
          </li>
          <li>
            <b>Elements</b>
          </li>
          <li>
            <b>Attributes</b>
          </li>
          <li>
            <b>Inline Block Element</b>
          </li>
          <li>
            <b>BlockElement</b>
          </li>
        </ul>
      </>
    ),
    Paragraph(
      <>
        <ul className="html-example">
          <li>
            {"<HTML>"}There are several other elements, but I’m the most
            important one. Without me the web page will not work. All other
            elements will be inside of me!{"</HTML>"}
          </li>
          <li>
            {"<table>"}I have the table tag. I tell the web browser that I
            should be formatted in a specific (table like) way.{"</table>"}
          </li>
          <li>
            {"<table"}{" "}
            data-explanation=”i-am-a-dataset-attribute-and-i-contain-a-piece-of-data-that-can-uniquely-identify-me”
            {"></table>"}
          </li>
          <li>
            {"<p>"}We are paragraph{"</p>"} {"<p>"}
          </li>
          <li>
            elements, and one of several block elements.{"</p>"} {"<p>"}
          </li>
          <li>By default, we will always start on a new line.{"</p>"}</li>
          <li>
            {"<a>"}We are anchor elements{"</a>"} {"<a>"}and an example of an
            inline element.{"</a>"}
          </li>
          <li>
            {"<a>"}By default, we can be side by side with one another{"</a>"}
          </li>
        </ul>
      </>
    ),
    Paragraph(
      <>
        These examples show how plain <b>HTML</b> is laid out. <b>CSS</b> is
        typically used to apply style to these <b>HTML</b> elements. <b>CSS</b>{" "}
        can be thought of as a programmer/web designer’s version of an artist’s
        paint brush. It allows us to style and design web pages by telling the{" "}
        <b>HTML</b> what to look like.
        <b>CSS</b> consists of several properties:
        <ul>
          <li>
            <b>CSS Rules</b>
          </li>
          <li>
            <b>CSS Selectors</b>
          </li>
          <li>
            <b>CSS Values</b>
          </li>
        </ul>
      </>
    ),
    Paragraph(
      <>
        <ul className="css-example">
          <li>{"<style>"}</li>
          <li>{"p {"}</li>
          <li>{"font-size: 20px;"}</li>
          <li>{"}"}</li>
          <li>{"div {"}</li>
          <li>
            {"background-color:"} <span className="bg-blue">blue</span>;
          </li>
          <li>{"}"}</li>
          <li>{"#special-div {"}</li>
          <li>
            {"background-color:"} <span className="bg-yellow">yellow</span>;
          </li>
          <li>{"}"}</li>
          <li>{"span {"}</li>
          <li>
            {"font-weight:"} <span className="fn-bold">bold</span>;
          </li>
          <li>
            {"font-style:"} <span className="fn-italic">italic</span>;
          </li>
          <li>{"}"}</li>
          <li>{"p, div, span, aside {"}</li>
          <li>
            {"Color: hotpink"}
            <span className="bg-hotpink"> &nbsp; </span>;
          </li>
          <li>{"}"}</li>
          <li>{"</style>"}</li>
        </ul>

        <ul className="html-example">
          <li>
            {"<p>"}
            <span className="fn-hotpink fn-20px">
              My font-size value was set to 20 pixels which is why I’m so big.
            </span>
            {"</p>"}
          </li>

          <div className="bg-blue">
            <li>{"<div>"}</li>
            <li>
              {"<p>"}
              <span className="fn-hotpink">
                CSS selected my div element to have a blue background.
              </span>
              {"</p>"}
            </li>
          </div>

          <div className="bg-yellow">
            <li>{"<div id=”special-div”>"}</li>
            <li>
              {"<p>"}
              <span className="fn-hotpink">CSS,</span> {"<span>"}
              <span className="fn-bold fn-italic">
                <span className="fn-hotpink">
                  more specifically (yes, we were told to be bold and italic),
                </span>
                {"</span>"}
              </span>
              <span className="fn-hotpink">
                selected my div element to have a yellow background.
              </span>
              {"</p>"}
            </li>
            <li>{"</div>"}</li>
          </div>
          <div className="bg-blue">
            <li>
              {"<aside>"}
              <span className="fn-hotpink">
                These CSS rules are what tell us how to look good, though I
                don’t agree with the design choice of having all of our font
                colours hot pink.
              </span>
              {"<aside>"}
            </li>
            <li>{"</div>"}</li>
          </div>
        </ul>
      </>
    ),
    Paragraph(
      <>
        You learned the basics of how <b>HTML</b> builds a web page, and how{" "}
        <b>CSS</b> is used to design the page, however there is much more to
        learn when it comes to these topics.
      </>
    ),
    Paragraph(
      <>
        I hope these examples were informative and ignited your curiosity even
        further. If you want to learn more, I suggest diving into the{" "}
        <b>HTML</b>
        tutorial and after that, the <b>CSS</b> tutorial, both hosted on
        W3Schools, which is a great resource for beginners. Thanks for reading!
      </>
    ),
  ],
};
const otherText = {
  post1: {
    title: "About me",
    description: "I talk all about myself.",
    date: 1620414480,
    headers: [],
    citations: [],
  },
  post2: {
    title: "What is SSL/TLS & Why Should You Care?",
    description: "I explain what SSL & TLS are.",
    date: 1621111620,
    headers: [`What is it?`, `The handshake protocol`, `Summary`],
    citations: [],
  },
  post3: {
    title: `How to Keep Your Accounts Secure`,
    description: `I talk about how to protect yourself online.`,
    date: 1621868940,
    headers: [
      `Length vs complexity`,
      `What is a password manager?`,
      `Multiple vs single password`,
      `Summary`,
    ],
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
  post4: {
    title: `HTML, CSS, and you`,
    description: `I give a basic introduction on HTML & CSS.`,
    date: 1622347140,
    headers: [`Building with HTML`, `Styling with CSS`, `Conclusion`],
    citations: [],
  },
  post5: {
    title: `HTML, CSS, and you`,
    description: `I give a basic introduction on HTML & CSS.`,
    date: 1622347140,
    headers: [`Building with HTML`, `Styling with CSS`, `Conclusion`],
    citations: [],
  },
};
const posts = [
  {
    id: 1,
    description: otherText.post1.description,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post1.title)}
        {PostDate(otherText.post1.date)}
        <Link to="./about-me">by Andrew Borondia</Link>
        {Image(images.post1.img1)}
        {paragraphs.post1[0]}
        {Image(images.post1.img2)}
        {paragraphs.post1[1]}
        {paragraphs.post1[2]}
        {Image(images.post1.img3)}
        {paragraphs.post1[3]}
      </Container>
    ),
  },
  {
    id: 2,
    description: otherText.post2.description,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post2.title)}
        {PostDate(otherText.post2.date)}
        <Link to="./about-me">by Andrew Borondia</Link>
        {Image(images.post2.img1)}
        {paragraphs.post2[0]}
        {ParagraphHeader(otherText.post2.headers[0])}
        {paragraphs.post2[1]}
        {paragraphs.post2[2]}
        {ParagraphHeader(otherText.post2.headers[1])}
        {Image(images.post2.img2)}
        {paragraphs.post2[3]}
        {paragraphs.post2[4]}
        {ParagraphHeader(otherText.post2.headers[2])}
        {paragraphs.post2[5]}
      </Container>
    ),
  },
  {
    id: 3,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post3.title)}
        {PostDate(otherText.post3.date)}
        <Link to="./about-me">by Andrew Borondia</Link>
        {paragraphs.post3[0]}
        {Image(images.post3.img1)}
        {ParagraphHeader(otherText.post3.headers[0])}
        {paragraphs.post3[1]}
        {ParagraphHeader(otherText.post3.headers[1])}
        {paragraphs.post3[2]}
        {Image(images.post3.img2)}
        {ParagraphHeader(otherText.post3.headers[2])}
        {paragraphs.post3[3]}
        {ParagraphHeader(otherText.post3.headers[3])}
        {paragraphs.post3[4]}
        <Bibliography citations={otherText.post3.citations} />
      </Container>
    ),
  },
  {
    id: 4,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post4.title)}
        {PostDate(otherText.post4.date)}
        {Author("Andrew Borondia")}
        {paragraphs.post4[0]}
        {ParagraphHeader(otherText.post4.headers[0])}
        {paragraphs.post4[1]}
        {paragraphs.post4[2]}
        {ParagraphHeader(otherText.post4.headers[1])}
        {paragraphs.post4[3]}
        {ParagraphHeader(otherText.post4.headers[2])}
        {paragraphs.post4[4]}
        {paragraphs.post4[5]}
      </Container>
    ),
  },
  {
    id: 5,
    fullPost: (
      <>
        <ReactMd fileName="http://localhost:3000/MD/post5.md" />
      </>
    ),
  },
  {
    id: 6,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post4.title)}
        {PostDate(otherText.post4.date)}
        {Author("Andrew Borondia")}
        {paragraphs.post4[0]}
        {ParagraphHeader(otherText.post4.headers[0])}
        {paragraphs.post4[1]}
        {paragraphs.post4[2]}
        {ParagraphHeader(otherText.post4.headers[1])}
        {paragraphs.post4[3]}
        {ParagraphHeader(otherText.post4.headers[2])}
        {paragraphs.post4[4]}
        {paragraphs.post4[5]}
      </Container>
    ),
  },
];

export const getPostBody = (id) => {
  const post = posts.find((post) => post.id === id);

  return post.fullPost;
};

export const getPostPreview = (id) => {
  return {
    title: otherText[`post${id}`].title,
    date: new Date(otherText[`post${id}`].date * 1000).toLocaleDateString(),
    description: otherText[`post${id}`].description,
    image: images[`post${id}`].img1,
  };
};
