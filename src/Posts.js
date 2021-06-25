import Container from "@material-ui/core/Container";
import Bibliography from "./components/Bibliography";
import { Link as HTTPLink } from "@material-ui/core";
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
      src: "/images/post1/about-me-ME.jpg",
      alt: "A picture of me in punk makeup",
      caption: { text: `Me on a typical day.`, link: "" },
    },
    img2: {
      src: "/images/post1/about-me-WINNIE.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `I don't like sharing pictures of my daughter on the internet because
      there are too many weirdos (and not always the good kind), so here's
      my dog Winnie.`,
        link: "",
      },
    },
    img3: {
      src: "/images/post1/about-me-PRIDE.jpg",
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
      src: "/images/post2/image1.jpg",
      alt: "A picture showing the https lock symbol in a browser.",
      caption: {
        text: `Image of secure website in browser by skylarvision`,
        link: `https://pixabay.com/illustrations/https-web-page-internet-security-3344700/`,
      },
    },
    img2: {
      src: "/images/post2/image2.jpg",
      alt: "My dog Winnie smiling",
      caption: {
        text: `A diagram of the TLS 1.2 handshake process.`,
        link: `https://commons.wikimedia.org/wiki/File:TLS_1.2_Handshake`,
      },
    },
  },
  post3: {
    img1: {
      src: "/images/post3/image1.jpg",
      alt: "An example of a bad password (123456).",
      caption: {
        text: `Image by Lewis Ogden`,
        link: `https://www.flickr.com/photos/bitsfrombytes/44035385264`,
      },
    },
    img2: {
      src: "/images/post3/image2.jpg",
      alt: "A picture of many different security related words swirling around.",
      caption: {
        text: `Image by Kevin Smith`,
        link: `https://www.flickr.com/photos/145362372@N03/45109137715`,
      },
    },
  },
  post4: {},
  post5: {
    img1: {
      src: "/images/post5/image1.png",
      alt: "Design art of the character Asellus from Saga Frontier.",
      caption: {
        text: `Obtained from Saga Wiki, Copyright Square Enix`,
        link: `https://saga.fandom.com/wiki/SaGa_Frontier`,
      },
    },
  },
  post6: {
    img1: {
      src: "/images/post6/image1.png",
      alt: "A diagram showing how the search results are handled in the app.",
      caption: {
        text: `Created with Lucidchart`,
        link: `https://www.lucidchart.com/`,
      },
    },
    img2: {
      src: "/images/post6/image2.png",
      alt: "A screenshot of search results in the app.",
      caption: {
        text: `A screenshot of search results in the app.`,
        link: ``,
      },
    },
    img3: {
      src: "/images/post6/image3.png",
      alt: "A diagram showing how books are saved in different shelves in the app.",
      caption: {
        text: `Created with Lucidchart`,
        link: `https://www.lucidchart.com/`,
      },
    },
    img4: {
      src: "/images/post6/image4.png",
      alt: "A screenshot of saved books in their respective bookshelves in the app.",
      caption: {
        text: `A screenshot of saved books in their respective bookshelves in the app.`,
        link: ``,
      },
    },
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
        I don't have many hobbies but the ones I do have occupy a lot of my
        time. I enjoy reading almost any well written story, though I have a
        penchant for fantasy, horror, and sci-fi (particularly dystopian novels
        such as
        <b>1984</b>, <b>The Handmaid's Tale</b>, and similar novels). I also
        love a good revenge story (<b>The Count of Monte Cristo</b>,{" "}
        <b>Carrie</b>, <b>Rose Madder</b>, you get the idea.) I enjoy going
        running, though I'll admit, it has been a lot longer than I'd like to
        admit since I have been on a good one, unless you count chasing my
        daughter in whatever silly game we're playing!
      </>
    ),
    Paragraph(
      <>
        Another hobby, and what inspired me to enroll at <b>MITT</b> is my love
        of coding, particularly in the context of game development. There has
        been something about coding languages that has appealed to me since my
        young teenage years. I love the idea that through this medium I can
        create the sort of video games (and other cool stuff) that I loved and
        grew up playing. Now that I'm a few months in, I am even more convinced
        that software development is for me.
      </>
    ),
    Paragraph(
      <>
        In lieu of a proper closing statement, I'll leave you with one of my
        favourite quotes:
        <span className="quote">
          “Don't ever, for any reason, do anything, to anyone, for any reason,
          ever, no matter what, no matter where, or who, or who you are with, or
          where you are going, or where you've been, ever, for any reason,
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
        automatically come with information about trusted <b>CA</b>'s and will
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
        ) should be considered secure simply because they are longer. It's
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
            {"<HTML>"}There are several other elements, but I'm the most
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
        can be thought of as a programmer/web designer's version of an artist's
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
              My font-size value was set to 20 pixels which is why I'm so big.
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
                don't agree with the design choice of having all of our font
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
  post5: [
    <div className="MuiContainer-root MuiContainer-maxWidthMd">
      <div className="react-md">
        <h1 id="-strong-master-saga-frontier-strong-">
          <a
            name="-strong-master-saga-frontier-strong-"
            className="anchor"
            href="#-strong-master-saga-frontier-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Master Saga Frontier</strong>
        </h1>
        <p>
          <em>6/4/2021</em>
          <br />
          by <a href="/about-me">Andrew Borondia</a>
          <br />
          <br />
          The remaster of the classic RPG
          <strong>Saga Frontier</strong> was just released a few weeks ago. In
          this guide I'm going to share with you various strategies I've learned
          to master the game. These strategies apply to both the original 1997
          version, as well as the new remaster.
        </p>
        <h2 id="-strong-pick-strong-allies-strong-">
          <a
            name="-strong-pick-strong-allies-strong-"
            className="anchor"
            href="#-strong-pick-strong-allies-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Pick strong allies</strong>
        </h2>
        <p>
          Not all characters talents are equal. Some particular characters stand
          out from the others because of special abilities, and/or higher stat
          growth.
        </p>
        <h3 id="-strong-asellus-strong-">
          <a
            name="-strong-asellus-strong-"
            className="anchor"
            href="#-strong-asellus-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Asellus</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/9/92/SF_Asellus.png"
            alt="Asselus"
          />
          <br />
          <em>Asselus character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>
            Combines the pros of human and mystic characters with none of the
            cons.
          </li>
          <li>Can learn weapon/fist abilities.</li>
          <li>Can absorb monsters into mystic weapons.</li>
          <li>
            Can use the bonus skills and stat boosts by transforming into her
            mystic form.
          </li>
          <li>Has 10 open skill slots.</li>
        </ul>
        <h3 id="-strong-red-strong-">
          <a
            name="-strong-red-strong-"
            className="anchor"
            href="#-strong-red-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Red</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/3/3e/RSre_Red_Artwork.png"
            alt="Red"
          />
          <br />
          <em>Red character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>Learns several unique and powerful skills.</li>
          <li>
            Can morph into the powerful <strong>Alkaiser</strong> form when no
            (conscious) human, mystic, or monster allies are present, and during
            certain story events.
          </li>
        </ul>
        <h3 id="-strong-blue-rouge-strong-">
          <a
            name="-strong-blue-rouge-strong-"
            className="anchor"
            href="#-strong-blue-rouge-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Blue/Rouge</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/d/dc/SF_Blue_Rouge_Artwork2.png"
            alt="Blue/Rouge"
          />
          <br />
          <em>Blue &amp; Rouge character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>
            Learns every single spell in the game, including opposing schools,
            and some unique to him.
          </li>
          <li>Grows magic related stats quickly.</li>
          <li>Will (at a certain point) double all stats related to magic.</li>
        </ul>
        <h3 id="-strong-t260-g-strong-">
          <a
            name="-strong-t260-g-strong-"
            className="anchor"
            href="#-strong-t260-g-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>T260-G</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/4/42/T260G.jpg"
            alt="T260-G"
          />
          <br />
          <em>T260-G character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>
            Can learn most of the best abilities available to mechs (all of them
            in their main quest.)
          </li>
          <li>
            Has every single equipment slot open for easy stat customisation.
          </li>
        </ul>
        <h3 id="-strong-time-lord-strong-">
          <a
            name="-strong-time-lord-strong-"
            className="anchor"
            href="#-strong-time-lord-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Time Lord</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/e/e4/TimeLord.png"
            alt="Time Lord"
          />
          <br />
          <em>Time Lord character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>
            The only character other than Blue/Rouge that has the gift of time
            magic, which is one of the most powerful schools of magic in the
            game.
          </li>
          <li>Grows JP stat quickly.</li>
          <li>
            Can use (along with Blue/Rouge) the
            <a href="https://saga.fandom.com/wiki/Overdrive_Snake-Oil_Glitch#:~:text=The%20Overdrive%20Snake%2DOil%20Glitch,performed%20while%20Overdrive%20is%20active.">
              Overdrive Glitch
            </a>
            . <br />
            <em>
              You can use the Stasis Rune spell instead of snake oil to obtain
              the effect. Although very well known, and referred to as a glitch,
              it was not removed from the remaster.
            </em>
          </li>
        </ul>
        <h3 id="-strong-mesarthim-strong-">
          <a
            name="-strong-mesarthim-strong-"
            className="anchor"
            href="#-strong-mesarthim-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Mesarthim</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/1/10/Mesarthim.png"
            alt="Mesarthim"
          />
          <br />
          <em>Mesarthim character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <h2 id="and-">
          <a name="and-" className="anchor" href="#and-">
            <span className="header-link"></span>
          </a>
          And...
        </h2>
        <h3 id="-strong-dr-nusakan-strong-">
          <a
            name="-strong-dr-nusakan-strong-"
            className="anchor"
            href="#-strong-dr-nusakan-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Dr. Nusakan</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/8/81/Dr_Nusakan.png"
            alt="Dr. Nusakan"
          />
          <br />
          <em>Dr. Nusakan character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>
            Has the advantage over other mystics of not having mystic mail
            locked to their equipment slots.
          </li>
          <li>
            Provides excellent healing support with Mesarthim having access to
            life rain and Dr. Nusakan having access to mystic heal.
          </li>
          <li>Grows WP &amp; JP quickly.</li>
        </ul>
        <h3 id="-strong-kylin-strong-">
          <a
            name="-strong-kylin-strong-"
            className="anchor"
            href="#-strong-kylin-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Kylin</strong>
        </h3>
        <p>
          <img
            src="https://static.wikia.nocookie.net/romancingsaga/images/7/71/IS_Kylin_Artwork.png"
            alt="Kylin"
          />
          <br />
          <em>Kylin character art</em>
          <br />
          <em>Obtained from</em>
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier">
            <em>Saga Wiki</em>
          </a>
          <br />
          <a href="https://www.square-enix.com/">
            <em>Copyright Square Enix</em>
          </a>
        </p>
        <ul>
          <li>Has access to all the space magic spells.</li>
          <li>Has access to all abilities/forms that regular monsters do.</li>
          <li>
            Has a powerful starting form that can be effective up to the end
            game.
          </li>
        </ul>
        <h2 id="-strong-plan-your-team-strong-">
          <a
            name="-strong-plan-your-team-strong-"
            className="anchor"
            href="#-strong-plan-your-team-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Plan your team</strong>
        </h2>
        <p>
          The earlier you obtain the characters you wish to use for the end
          game, the longer you have to customize and grow their stats. There are
          a few important things to keep in mind:
        </p>
        <ul>
          <li>
            Use skills that a character has a talent for to raise corresponding
            stats; sword/fist increases strength &amp; WP, magic increases will
            &amp; JP, guns increase will &amp; WP.
          </li>
          <li>
            Absorbing a monster that has not been absorbed before will
            permanently increase your monsters max HP by 5.
          </li>
          <li>
            Some enemies become unavailable later in the game so the earlier you
            start absorbing monsters with your own monster character, the higher
            their HP potential is.
          </li>
          <li>
            Once you obtain one rune (rune magic), or card (arcane magic), any
            character not present
            <strong>will never be able to</strong> obtain the corresponding
            gift, even if recruited before completing the quest.
          </li>
          <li>
            You cannot attempt to learn light/dark/mind magic more than once.
            Make sure you have all the characters you wish to learn that
            particular school in your party at the time you do the corresponding
            quest, and that they do not possess any magic from opposing schools.
          </li>
          <li>
            You can buy magic from an opposing school to discard unwanted
            spells.
          </li>
        </ul>
        <h1 id="-strong-recruitable-characters-by-protagonist-strong-">
          <a
            name="-strong-recruitable-characters-by-protagonist-strong-"
            className="anchor"
            href="#-strong-recruitable-characters-by-protagonist-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Recruitable characters by protagonist</strong>
        </h1>
        <table>
          <thead>
            <tr>
              <th>
                <strong>**</strong>****<strong>**</strong>
              </th>
              <th>Red</th>
              <th>Blue</th>
              <th>Asellus</th>
              <th>T260G</th>
              <th>Riki</th>
              <th>Lute</th>
              <th>Emilia</th>
              <th>Fuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annie</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Asellus</td>
              <td>Temp</td>
              <td>No</td>
              <td>***</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>BJ&amp;K</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>No</td>
              <td>***</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Captain Hamilton</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Cotton</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Doll</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Dr. Nusakan</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Emelia</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>***</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Engineer Car</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Fei-On</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Fuse</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>***</td>
            </tr>
            <tr>
              <td>Gen</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Ildon</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Kylin</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Leonard</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Liza</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Lute</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>***</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Mei-Ling</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Mesarthim</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>PzkmW</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Rabbit</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>***</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Rei</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Riki</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>***</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Roufas</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Rouge</td>
              <td>Yes</td>
              <td>Yes/No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Sei</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Silence</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Slime</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Suzaku</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>T260G</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>***</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Time Lord</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Thunder</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Turnip</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>White Rose</td>
              <td>Temp</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>ZEKE</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Zozma</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <p>
          Information was taken from
          <a href="https://psnprofiles.com/guide/12278-saga-frontier-remastered-character-recruitment-guide">
            this recruitment guide
          </a>
          (original information credit to
          <a href="https://steamah.com/go/?url=https://steamcommunity.com/id/KittenyKat">
            Frission
          </a>
          ). See the guide for more detailed information.
        </p>
        <h2 id="-strong-plan-your-build-strong-">
          <a
            name="-strong-plan-your-build-strong-"
            className="anchor"
            href="#-strong-plan-your-build-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Plan your build</strong>
        </h2>
        <p>
          Make sure you know what role you want your character(s) to play in
          your team. If you are using a fighter/mage, or pure mage, make sure
          you plan the quests to obtain the corresponding magic school gifts you
          want them to learn, keeping in mind that (with the exception of
          Blue/Rouge)
          <strong>
            you cannot possess spells of two opposing schools at the same time
          </strong>
          . Refer to
          <a href="https://saga.fandom.com/wiki/SaGa_Frontier_Magic">
            the magic guide
          </a>
          for more info.
        </p>
        <p>
          If you are using a monster, plan which form and skills you want by end
          game and be constantly alert for enemies that will yield the correct
          skills. Some enemies will be hard/impossible to find once you progress
          too far in the game. Refer to
          <a href="https://gamefaqs.gamespot.com/ps/198537-saga-frontier/faqs/36630">
            the monster guide
          </a>
          for more info.
        </p>
        <p>
          If you are using a mech, get rich, and equip them with the most
          powerful gear you can. The Merchants in Koorong sell the most powerful
          equipment that can be purchased.
        </p>
        <h2 id="-strong-get-rich-strong-">
          <a
            name="-strong-get-rich-strong-"
            className="anchor"
            href="#-strong-get-rich-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Get rich</strong>
        </h2>
        <p>
          It is easy to obtain infinite money once you have enough starting
          capital. If playing the 1997 version refer to
          <a href="https://saga.fandom.com/wiki/Gold_Ingot_Trick">this guide</a>
          , as the process is slightly different. To obtain an unending cash
          flow, follow these steps:
        </p>
        <ol>
          <li>
            Buy golden ingots for 500G from the merchant in the bar in Nelson.
          </li>
          <li>
            Check the gold merchant in the building next to the Koorong port,
            and if the selling price is not greater than 500G, you must buy more
            ingots from the Nelson merchant.
          </li>
          <li>Sell your ingots in Koorong until the price drops below 500G.</li>
          <li>
            Return to the Nelson merchant and repeat the process as desired.
          </li>
        </ol>
        <p>
          I recommend keeping 50 ingots in your inventory at all times, as it
          allows you to spend without worrying since you will always have the
          resources to repeat the process.
        </p>
        <h2 id="-strong-get-instant-death-skills-strong-">
          <a
            name="-strong-get-instant-death-skills-strong-"
            className="anchor"
            href="#-strong-get-instant-death-skills-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Get instant death skills</strong>
        </h2>
        <p>
          Some of the most powerful enemies in the game, including some bosses,
          are susceptible to instant death/petrify skills. Some are more
          effective than others:
        </p>
        <ul>
          <li>
            Time Eclipse - The most effective petrification ability in the game.
            Can be learned by any human/mystic if your protagonist has access to
            Time Lord's castle. If playing as Blue/Rouge, only he can learn time
            magic, not his comrades.
          </li>
          <li>
            Death Touch - Extremely potent and will almost always kill an enemy
            that is not immune to death. Can be learned by any monster
            character.
          </li>
          <li>
            Death/Petrify Gaze - Not as effective as Time Eclipse and Death
            Touch, but still very potent. Can be learned by any monster
            character.
          </li>
          <li>
            Dead End - An instant death sword skill that is less effective than
            the other skills listed, but is generally easier to obtain and is
            useful to human characters that do not use magic.
          </li>
        </ul>
        <h2 id="-strong-get-posessed-strong-">
          <a
            name="-strong-get-posessed-strong-"
            className="anchor"
            href="#-strong-get-posessed-strong-"
          >
            <span className="header-link"></span>
          </a>
          <strong>Get posessed</strong>
        </h2>
        <p>
          There are enemies in the game called "Living Sword". When low on
          health (damaged by about 700+ HP) they will attempt to possess one of
          your party members. If the character is human, it will cause an
          unequippable sword called "Glirandly" to be added to their equipment.
          For each sword the human is equipped with it will raise all stats by
          10. This can add up to a massive boost to their stats. Keep in mind
          however,
          <strong>
            stats raised this way will grow slower on that character
          </strong>
          .
        </p>
        <p>
          So you learned how to pick the best characters, how to build them, and
          all the important information you need to make the ultimate team. Now
          you are ready to confidently conquer the world of Saga Frontier.
        </p>
      </div>
    </div>,
  ],
  post6: [
    Paragraph(
      <>
        Recently, I built a React (read more here) application which involves
        searching a database of books. The user moves books from those results
        into different categories (shelves). Today I will explain how this
        application works.
      </>
    ),
    Paragraph(
      <>
        The home page contains the users saved books in the corresponding shelf
        the book was saved to. The user navigates to the search page by clicking
        on the plus icon at the bottom right of the main page.
      </>
    ),
    Paragraph(
      <>
        The search page contains a search input. The user types in (this input
        box) what they wish to search for. The page displays all book titles
        that include the user's search input in their title.
      </>
    ),
    Paragraph(
      <>
        When the search input is changed on the search page, the following
        function is called (after a short delay to ensure typing has ceased):
      </>
    ),
    Paragraph(
      <div className="bg-code code-example">
        <code>
        <ul>
          <span className="fn-green">
            <li>
              <br /> First, the function (displaySearchResults) takes in data on
              all available books, and the users search input.
            </li>
          </span>
          <li>
            {" "}
            <span className="fn-purple">export</span>
            <span className="fn-dkblue"> const </span>
            <span className="fn-yellow">displaySearchResults </span>= (
            <span className="fn-ltblue">books</span>,
            <span className="fn-ltblue"> searchInput</span>)
            <span className="fn-dkblue">{" =>"}</span>
            {" {"}
          </li>
          <br />
          <span className="fn-green">
            <li>
              Second, the function filters out books if they do not include the
              search input in their title. All letters are capitalized, and the
              search input has any extra white space on either side removed to
              obtain case insensitive matches.
            </li>
          </span>
          <li>
            <span className="fn-dkblue">let </span>
            <span className="fn-ltblue">resultsFound</span> = [...
            <span className="fn-ltblue">books</span>]
            <span className="fn-yellow">.filter</span>((
            <span className="fn-ltblue">book</span>)
            <span className="fn-dkblue">{" =>"}</span> {"{"}
          </li>
          <span className="fn-purple"> return</span>(
          <li>
            <span className="fn-ltblue">book.title</span>.
            <span className="fn-yellow">toUpperCase</span>().
            <span className="fn-yellow">includes</span>(
            <span className="fn-yellow">cleanSearchString</span>(
            <span className="fn-ltblue">searchInput</span>)));
          </li>
          <li>{"}"});</li>
          <br />
          <span className="fn-green">
            <li> Third, the function sorts the results.</li>
          </span>
          <li>
            <span className="fn-ltblue">resultsFound </span> =
            <span className="fn-yellow"> sortBySearchedText</span>(
            <span className="fn-ltblue">resultsFound</span>,
            <span className="fn-ltblue"> searchInput</span>
            );
          </li>
          <span className="fn-green">
            <li>
              <br />
              Finally, the function outputs the sorted results and React
              displays them on the page.
            </li>
          </span>
          <li>
            <span className="fn-purple">return </span>
            <span className="fn-ltblue">resultsFound</span>;
          </li>
          <li>{"}"}</li>
        </ul>
        </code>
      </div>
    ),
    Paragraph(
      <>
        The sorting of the books before rendering them is important. Users
        expect searches to display the most relevant results first.
      </>
    ),
    Paragraph(
      <>
        The displaySearchResults function calls the following function to sort
        the books:
      </>
    ),
    Paragraph(
      <div className="bg-code code-example">
        <code>
        <ul>
          <li>
            <br />
            <span className="fn-green">
              First, the function (sortBySearchedText) receives the search
              results and the search input.
            </span>
          </li>
          <li>
            <span className="fn-dkblue">const</span>
            <span className="fn-ltblue"> sortBySearchedText </span>= (
            <span className="fn-ltblue">resultsFound</span>,
            <span className="fn-ltblue"> searchInput</span>)
            <span className="fn-dkblue">{" =>"}</span> {"{"}
          </li>
          <span className="fn-green">
            <li>
              <br />
              Second, the function capitalizes the titles of all books to avoid
              case sensitive sorting.
            </li>
          </span>
          <li>
            <span className="fn-purple">for </span>(
            <span className="fn-dkblue">let </span>
            <span className="fn-ltblue">book </span>
            <span className="fn-dkblue">of </span>
            <span className="fn-ltblue">resultsFound</span>) {"{"}
          </li>
          <li>
            <span className="fn-ltblue">book.formattedTitle </span>=
            <span className="fn-yellow"> formatForSorting</span>(
            <span className="fn-ltblue">book.title</span>);
          </li>
          {"}"}
          <li>
            <br />
            <span className="fn-green">
              Third, the sort function sorts the results.
            </span>
          </li>
          <li>
            <span className="fn-ltblue">resultsFound</span>.
            <span className="fn-yellow">sort</span>
            ((
            <span className="fn-ltblue">book1, book2</span>)
            <span className="fn-dkblue">{" =>"}</span>
            {" {"}
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-ltblue">book1Title </span>=
            <span className="fn-ltblue"> book1</span>.
            <span className="fn-ltblue">formattedTitle</span>;
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-ltblue">book2Title </span>=
            <span className="fn-ltblue"> book2.formattedTitle</span>;
          </li>
          <span className="fn-dkblue">const </span>
          <span className="fn-ltblue">shortestBookTitle </span>=
          <span className="fn-yellow"> getShortestString</span>(
          <span className="fn-ltblue">book1Title, book2Title</span>
          );
          <li>
            <br />
            <span className="fn-green">
              If one title has a higher sort priority (determined here by
              whether or not the first word in the book title includes the
              search terms) it will tell the sorting function to sort it before
              other books with lower priority.
            </span>
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-yellow">sortPriority </span>=
            <span className="fn-yellow"> getSortPriority</span>(
            <span className="fn-ltblue">book1, book2, searchInput</span>);
          </li>
          <span className="fn-purple">if </span>(
          <span className="fn-ltblue">sortPriority </span>
          !== 0) {" {"}
          <li>
            <span className="fn-purple">return </span>
            <span className="fn-ltblue">sortPriority</span>;
          </li>
          {"}"}
          <li>
            <br />
            <span className="fn-green">
              If neither book possesses a higher priority based on the prior
              criteria, the function sorts them in alphabetical order.
            </span>
          </li>
          <li>
            <span className="fn-purple">for </span>(
            <span className="fn-dkblue">let </span>
            <span className="fn-ltblue">i </span>= 0; i {" < "}
            <span className="fn-ltblue">shortestBookTitle.length</span>;
            <span className="fn-ltblue"> i++</span>) {"{"}
          </li>
          <li>
            <span className="fn-purple">if </span>(
            <span className="fn-ltblue">book1Title[i] </span>
            !==
            <span className="fn-ltblue"> book2Title[i]</span>) {"{"}
          </li>
          <li>
            <span className="fn-purple">return</span>{" "}
            <span className="fn-ltblue">book1Title</span>.
            <span className="fn-yellow">charCodeAt</span>(
            <span className="fn-ltblue">i</span>) -{" "}
            <span className="fn-ltblue">book2Title</span>.
            <span className="fn-yellow">charCodeAt</span>(
            <span className="fn-ltblue">i</span>);
          </li>
          <li>{"}"}</li>
          <li>{"}"}</li>
          <li>{"}"});</li>
          <li>
            <br />
            <span className="fn-green">
              Finally, the sorted search results are output back to the
              displaySearchResults function.
            </span>
          </li>
          <span className="pruple">return</span>{" "}
          <span className="fn-ltblue">resultsFound</span>;<li>{"}"};</li>
        </ul>
        </code>
      </div>
    ),
    Paragraph(
      <>
        The following shows a simplified view of the flow from sending the book
        and search result data, to React receiving and displaying the results:
      </>
    ),
    Paragraph(
      <>
        The results are now displayed in the web browser window. The user clicks
        on books. A click opens a menu that contains options that will send the
        book to a bookshelf, or remove it from a shelf, when clicked on.
      </>
    ),
    Paragraph(
      <>
        The main page contains three shelves:
        <ul>
          <li>Read</li>
          <li>Want to Read</li>
          <li>Currently Reading</li>
        </ul>
      </>
    ),
    Paragraph(
      <>
        When a category is selected from the menu, which opens when a book is
        clicked, the following function is called:
      </>
    ),
    Paragraph(
      <div className="bg-code code-example">
        <code>
        <ul>
          <li>
            <span className="fn-green">
              <br />
              First, the function (updateBookShelfStatus) is called and receives
              the data on the book that was clicked.
            </span>
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-ltblue">updateBookShelfStatus </span>=
            <span className="fn-dkblue"> async</span>(
            <span className="fn-ltblue">event</span>){" => "}
            {"{"}
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-ltblue">valueToUpdateWith </span>=
            <span className="fn-ltblue"> event.target.value</span>;
          </li>
          <br />
          <li>
            <span className="fn-green">
              Second, the function checks to make sure the function will exit on
              the initial click on the book, and if they click on an invalid
              option.
            </span>
          </li>
          <li>
            <span className="fn-purple">if </span>(
            <span className="fn-ltblue">valueToUpdateWith </span>
            ===
            <span className="fn-orange"> "move"</span>) {"{"}
          </li>
          <span className="fn-purple">return</span>;<li>{"}"}</li>
          <br />
          <li>
            <span className="fn-green">
              Third, the function contacts the database (usually a server
              online, but in this case, a local file) and tells it to change the
              shelf location data to the shelf location that was clicked on.
            </span>
          </li>
          <li>
            <span className="fn-dkblue">const </span>
            <span className="fn-ltblue">response </span>=
            <span className="fn-purple"> await </span>
            <span className="fn-yellow">fetch</span>(
            <span className="fn-orange">`http://localhost:3001/books/$</span>
            {"{"}
            <span className="fn-ltblue">id</span>
            {"}"}
            <span className="fn-orange">`</span>, {"{"}
          </li>
          <li>
            <span className="fn-ltblue">method</span>:
            <span className="fn-orange"> "PATCH"</span>,
          </li>{" "}
          <li>
            <span className="fn-ltblue">headers</span>: {"{"}
            <span className="fn-orange"> "Content-Type"</span>:
            <span className="fn-ltblue">"application/json"</span>
            {"}"},
          </li>{" "}
          <li>
            <span className="fn-ltblue">body</span>:
            <span className="fn-ltblue"> JSON</span>.
            <span className="fn-yellow">stringify</span>({"{"}
          </li>{" "}
          <li>
            <span className="fn-ltblue">shelfStatus</span>:
            <span className="fn-ltblue"> valueToUpdateWith</span>,
          </li>
          <li>{"}"}),</li> <li>{"}"});</li>
          <span className="fn-green">
            <br />
            Finally, the function calls another function (getBooks). getBooks()
            obtains a fresh copy of the data, which contains the changes made,
            from the database.
          </span>
          <span className="fn-yellow">getBooks</span>(
          <span className="fn-ltblue">updateBooks</span>
          );
          {"}"};
          <li>
            <br />
            <span className="fn-green">
              React now displays the updated data.
            </span>
          </li>
        </ul>
        </code>
      </div>
    ),
    Paragraph(
      <>
        The following is a simplified view of the process from clicking on a
        book option, to updating the data being displayed:
      </>
    ),
    Paragraph(
      <>
        The following is a simplified view of the process from clicking on a
        book option, to updating the data being displayed:
      </>
    ),
    Paragraph(
      <>
        The homepage now displays the bookshelves with all books previously
        selected in their respective categories. The books can be selected and
        removed/categorized on the homepage, exactly the same as they can on the
        search page.
      </>
    ),
    Paragraph(
      <>
        I explained how the database search works with React to display a list
        of relevant results. I then explained how to interact with the results
        to categorize specific books into book shelves. I hope you learned
        something new by reading through this article and are inspired to try
        something similar.
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
    title: "What is SSL/TLS & why should you care?",
    description: "I explain what SSL & TLS are.",
    date: 1621111620,
    headers: [`What is it?`, `The handshake protocol`, `Summary`],
    citations: [],
  },
  post3: {
    title: `How to keep your accounts secure`,
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
    title: `Master Saga Frontier`,
    description: `I explain how to master the game Saga Frontier.`,
    date: 1622865540,
    headers: [``],
    citations: [],
  },
  post6: {
    title: `MITTLibrary`,
    description: `I give an overview of a book library app I made in React.`,
    date: 1623562740,
    headers: [
      `App overview`,
      `Obtaining and displaying search results`,
      `Sorting the search results`,
      `Search results flow`,
      `Viewing and categorizing books`,
      `Moving books`,
      `Shelving books flow`,
      `The final result`,
      `Conclusion`,
    ],
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
        {Author("Andrew Borondia")}
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
        {Author("Andrew Borondia")}
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
        {Author("Andrew Borondia")}
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
    fullPost: paragraphs.post5[0],
  },
  {
    id: 6,
    fullPost: (
      <Container maxWidth="md" id="post-body">
        {Title(otherText.post6.title)}
        {PostDate(otherText.post6.date)}
        {Author("Andrew Borondia")}
        {paragraphs.post6[0]}
        {ParagraphHeader(otherText.post6.headers[0])}
        {paragraphs.post6[1]}
        {paragraphs.post6[2]}
        {ParagraphHeader(otherText.post6.headers[1])}
        {paragraphs.post6[3]}
        {paragraphs.post6[4]}
        {ParagraphHeader(otherText.post6.headers[2])}
        {paragraphs.post6[5]}
        {paragraphs.post6[6]}
        {paragraphs.post6[7]}
        {ParagraphHeader(otherText.post6.headers[3])}
        {paragraphs.post6[8]}
        {Image(images.post6.img1, true)}
        {ParagraphHeader(otherText.post6.headers[4])}
        {paragraphs.post6[9]}
        {Image(images.post6.img2, true)}
        {ParagraphHeader(otherText.post6.headers[5])}
        {paragraphs.post6[10]}
        {paragraphs.post6[11]}
        {paragraphs.post6[12]}
        {ParagraphHeader(otherText.post6.headers[6])}
        {paragraphs.post6[13]}
        {Image(images.post6.img3, true)}
        {ParagraphHeader(otherText.post6.headers[7])}
        {paragraphs.post6[14]}
        {Image(images.post6.img4, true)}
        {ParagraphHeader(otherText.post6.headers[8])}
        {paragraphs.post6[15]}
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

export const getPostsLength = () => {
  return posts.length;
};

export const getPostDescriptions = () => {
  const postDescriptions = [1, 2, 3, 4];

  for (let i = 0; i < posts.length; i++) {
    postDescriptions.push({
      id: posts[i].id,
      title: otherText[`post${i + 1}`].title,
      date: otherText[`post${i + 1}`].date,
      description: otherText[`post${i + 1}`].description,
    });
  }

  return postDescriptions;
};
