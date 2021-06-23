import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const images = {
  post1: {
    img1: {
      src: "http://localhost:3000/images/post1/about-me-ME.jpg",
      alt: '"A picture of me in punk makeup',
      caption: (
        <Typography
          className="caption"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          Me on a typical day.
        </Typography>
      ),
    },
    img2: {
      src: "images/post1/about-me-WINNIE.jpg",
      alt: "My dog Winnie smiling",
      caption: (
        <Typography
          className="caption"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          I don’t like sharing pictures of my daughter on the internet because
          there are too many weirdos (and not always the good kind), so here’s
          my dog Winnie.
        </Typography>
      ),
    },
    img3: {
      src: "images/post1/about-me-PRIDE.jpg",
      alt: "Me and my wife at Pride 2013",
      caption: (
        <Typography
          className="caption"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          My wife (then girlfriend) and I at Pride 2013 after the 5k fun run
          (told you it had been awhile!) It demonstrates my love of running, my
          love for my wife, and my love of being a less crappy person.
        </Typography>
      ),
    },
  },
  post2: {
    img1: {
      src: "http://localhost:3000/images/post2/image1.jpg",
      alt: '"A picture of me in punk makeup',
      caption: (
        <Typography
          className="caption"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          Image by Lewis Ogden
          <Link
            display="block"
            href="https://www.flickr.com/photos/bitsfrombytes/44035385264"
            color="primary"
          >
            https://www.flickr.com/photos/bitsfrombytes/44035385264
          </Link>
        </Typography>
      ),
    },
    img2: {
      src: "images/post2/image2.jpg",
      alt: "My dog Winnie smiling",
      caption: (
        <Typography
          className="caption"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          Image by Kevin Smith
          <Link
            component="button"
            variant="body2"
            href="https://www.flickr.com/photos/145362372@N03/45109137715"
          ></Link>
        </Typography>
      ),
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
        I talk all about myself.
      </Typography>
    ),
    date: (
      <Typography variant="caption" color="textSecondary" component="p">
        {new Date(1620414480 * 1000).toLocaleDateString()}
      </Typography>
    ),
    fullPost: (
      <Container maxWidth="md" id="post-body">
        <Container className="image-container">
          <img src={images.post1.img1.src} alt={images.post1.img1.alt} />
          <Typography variant="caption" color="textSecondary" component="p">
            {images.post1.img1.caption}
          </Typography>
        </Container>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          Hello dear readers. My name is Andrew Borondia. I am a husband, father
          (one human and four non-humans), gamer, nerd, and currently, a student
          in the Software Developer program at the Manitoba Institute of Trades
          and Technology (MITT). I currently spend my days banging my head
          against the wall (not literally, thank you for your concern) trying to
          understand the vast topic that is computer programming, spending as
          much quality time with my daughter as I can, and trying to be a less
          crappy version of myself than I was the previous day.
        </Typography>
        <Container className="image-container">
          <img src={images.post1.img2.src} alt={images.post1.img2.alt} />
          <Typography variant="caption" color="textSecondary" component="p">
            {images.post1.img2.caption}
          </Typography>
        </Container>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          I don’t have many hobbies but the ones I do have occupy a lot of my
          time. I enjoy reading almost any well written story, though I have a
          penchant for fantasy, horror, and sci-fi (particularly dystopian
          novels such as 1984, The Handmaid’s Tale, and similar novels). I also
          love a good revenge story (The Count of Monte Cristo, Carrie, Rose
          Madder, you get the idea.) I enjoy going running, though I’ll admit,
          it has been a lot longer than I’d like to admit since I have been on a
          good one, unless you count chasing my daughter in whatever silly game
          we’re playing!
        </Typography>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          Another hobby, and what inspired me to enroll at MITT is my love of
          coding, particularly in the context of game development. There has
          been something about coding languages that has appealed to me since my
          young teenage years. I love the idea that through this medium I can
          create the sort of video games (and other cool stuff) that I loved and
          grew up playing. Now that I’m a few months in, I am even more
          convinced that software development is for me.
        </Typography>
        <Container className="image-container">
          <img src="images/post1/about-me-PRIDE.jpg" alt="" />
          <Typography variant="caption" color="textSecondary" component="p">
            {images.post1.img3.caption}
          </Typography>
        </Container>

        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          In lieu of a proper closing statement, I’ll leave you with one of my
          favourite quotes:{" "}
          <span className="quote">
            “Don’t ever, for any reason, do anything, to anyone, for any reason,
            ever, no matter what, no matter where, or who, or who you are with,
            or where you are going, or where you’ve been, ever, for any reason,
            whatsoever.” Michael Scott
          </span>
        </Typography>
      </Container>
    ),
  },
  {
    id: 2,
    title: (
      <Typography
        className="title"
        display="block"
        variant="h2"
        color="secondary"
        component="h2"
      >
        How to Keep Your Accounts Secure
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
        I talk about how to protect yourself online.
      </Typography>
    ),
    date: (
      <Typography variant="caption" color="textSecondary" component="p">
        {new Date(1621868940 * 1000).toLocaleDateString()}
      </Typography>
    ),
    fullPost: (
      <Container maxWidth="md" id="post-body">
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          There are a plethora of different apps and services available today.
          It can be difficult to find the balance between staying secure and
          keeping our sanity with all the different logins and passwords we are
          expected to remember. Here are easy to follow tips that will help keep
          you safe online:{" "}
          <ul>
            <li> Use a longer password, not necessarily a more complex one.</li>
            <li>Use a password manager.</li>
            <li>Use different passwords everywhere.</li>
          </ul>
        </Typography>
        <Container className="image-container">
          <img src={images.post2.img1.src} alt={images.post2.img1.alt} />
          {images.post2.img1.caption}
        </Container>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          First off, length versus complexity. Look at the following two
          examples: “qN_2!” and “horsespaceshuttlecoolbeans”; it might surprise
          you to know that the second example would be considered more secure by
          tech/security experts, including the United States National Institute
          of Standards and Technology (National Institute of Standards and
          Technology, 2017). This is not to say that something like “1234567890”
          or other common passwords (see{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords"
            color="primary"
          >
            10,000 most common passwords
          </Link>
          ) should be considered secure simply because they are longer. It’s
          important to remember that some hackers try to hack accounts by using
          programs that reference lists of common passwords. Another method that
          is commonly used examines every possible combination of characters in
          an attempt to gain access (see{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Brute-force_attack#:~:text=In%20cryptography%2C%20a%20brute%2Dforce,the%20correct%20one%20is%20found."
            color="primary"
          >
            Brute-force attack
          </Link>
          ). The longer the password, the less likely the brute-force method is
          to work.{" "}
        </Typography>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          Next, what is a password manager? A password manager can be thought of
          as a “vault” which stores all of the passwords you use. The “vault” is
          protected behind one main password, that is not stored on, or sent
          anywhere by, any servers. This means the user only has to memorize
          this single password, and because it is not stored anywhere, even if
          the password manager's database were to be hacked, your password is
          still secure. It is not completely infallible, but it is generally
          more secure than using weak/duplicate passwords.
        </Typography>
        <Container className="image-container">
          <img src={images.post2.img2.src} alt={images.post2.img2.alt} />
          <Typography variant="caption" color="textSecondary" component="p">
            {images.post2.img2.caption}
          </Typography>
        </Container>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          Finally, one of the most important ways to keep your personal
          information secure is to use a different password for every account.
          In a 2019 Survey by Google & Harris Poll (Google & Harris Poll, 2019)
          it was found that 53% of users reused their password on multiple
          accounts, and 13% used the same password on all accounts. If a hacker
          obtains a password that is used for more than one account they,
          potentially, have access to all the information on any account with
          which that password is used.{" "}
        </Typography>
        <Typography
          display="block"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          We looked at using longer passwords, using different passwords for
          every account, and the usefulness of password managers. I hope you
          find this information useful. Thank you for reading.{" "}
        </Typography>
      </Container>
    ),
  },
];

export const getPost = (id) => {
  const post = posts.find((post) => post.id === id);
  const postImages = images[`post${id}`];

  return { post: post, images: postImages };
};
