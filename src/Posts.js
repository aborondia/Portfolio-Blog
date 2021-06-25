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
        text: `I don't like sharing pictures of my daughter on the internet because
      there are too many weirdos (and not always the good kind), so here's
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
  post5: {
    img1: {
      src: "http://localhost:3000/images/post6/image1.jpg",
      alt: "A diagram showing how the search results are handled in the app.",
      caption: {
        text: `Created with Lucidchart`,
        link: `https://www.lucidchart.com/`,
      },
    },
  },
  post6: {
    img1: {
      src: "http://localhost:3000/images/post6/image1.png",
      alt: "A diagram showing how the search results are handled in the app.",
      caption: {
        text: `Created with Lucidchart`,
        link: `https://www.lucidchart.com/`,
      },
    },
    img2: {
      src: "http://localhost:3000/images/post6/image2.png",
      alt: "A screenshot of search results in the app.",
      caption: {
        text: `A screenshot of search results in the app.`,
        link: ``,
      },
    },
    img3: {
      src: "http://localhost:3000/images/post6/image3.png",
      alt: "A diagram showing how books are saved in different shelves in the app.",
      caption: {
        text: `Created with Lucidchart`,
        link: `https://www.lucidchart.com/`,
      },
    },
    img4: {
      src: "http://localhost:3000/images/post6/image4.png",
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
  post5: [<ReactMd fileName="http://localhost:3000/MD/post5.md" />],
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
            <span className="fn-ltblue">searchInput</span>)));<li>{"}"});</li>
          </li>
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
            <span className="fn-ltblue">resultsFound</span>;<li>{"}"}</li>
          </li>
        </ul>
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
            {" "}
            <li>
              <span className="fn-purple">for </span>(
              <span className="fn-dkblue">let </span>
              <span className="fn-ltblue">book </span>
              <span className="fn-dkblue">of </span>
              <span className="fn-ltblue">resultsFound</span>) {"{"}
            </li>
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
        <ul>
          <li>
            <span className="fn-green">
              <br />
              // First, the function (updateBookShelfStatus) is called and
              receives the data on the book that was clicked.
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
              // Second, the function checks to make sure the function will exit
              on the initial click on the book, and if they click on an invalid
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
              // Third, the function contacts the database (usually a server
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
              // React now displays the updated data.
            </span>
          </li>
        </ul>
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
        {Image(images.post6.img1)}
        {ParagraphHeader(otherText.post6.headers[4])}
        {paragraphs.post6[9]}
        {Image(images.post6.img2)}
        {ParagraphHeader(otherText.post6.headers[5])}
        {paragraphs.post6[10]}
        {paragraphs.post6[11]}
        {paragraphs.post6[12]}
        {ParagraphHeader(otherText.post6.headers[6])}
        {paragraphs.post6[13]}
        {Image(images.post6.img3)}
        {ParagraphHeader(otherText.post6.headers[7])}
        {paragraphs.post6[14]}
        {Image(images.post6.img4)}
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
