import './css/App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import RecentPosts from './components/RecentPosts';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
	const posts = [
		{
			id: 1,
			title: 'About me',
			images: { img1: { src: 'images/post1/about-me-ME.jpg', alt: 'A picture of me in punk makeup' } },
			description: 'I talk all about myself',
			textOnly: '',
			fullPost: (
				<>
					<div className='post-body'>
						<div className='image'>
							<img src='images/post1/about-me-ME.jpg' alt='' />
							<p className='caption'>Me on a typical day.</p>
						</div>
						<p>
							Hello dear readers. My name is Andrew Borondia. I am a husband, father (one human and four non-humans),
							gamer, nerd, and currently, a student in the Software Developer program at the Manitoba Institute of
							Trades and Technology (MITT). I currently spend my days banging my head against the wall (not literally,
							thank you for your concern) trying to understand the vast topic that is computer programming, spending as
							much quality time with my daughter as I can, and trying to be a less crappy version of myself than I was
							the previous day.
						</p>
						<div className='image'>
							<img src='' alt='' />
							<p className='caption'>
								{' '}
								I don’t like sharing pictures of my daughter on the internet because there are too many weirdos (and not
								always the good kind), so here’s my dog Winnie.
							</p>
						</div>
						<p>
							I don’t have many hobbies but the ones I do have occupy a lot of my time. I enjoy reading almost any well
							written story, though I have a penchant for fantasy, horror, and sci-fi (particularly dystopian novels
							such as 1984, The Handmaid’s Tale, and similar novels). I also love a good revenge story (The Count of
							Monte Cristo, Carrie, Rose Madder, you get the idea.) I enjoy going running, though I’ll admit, it has
							been a lot longer than I’d like to admit since I have been on a good one, unless you count chasing my
							daughter in whatever silly game we’re playing!
						</p>
						<p>
							Another hobby, and what inspired me to enroll at MITT is my love of coding, particularly in the context of
							game development. There has been something about coding languages that has appealed to me since my young
							teenage years. I love the idea that through this medium I can create the sort of video games (and other
							cool stuff) that I loved and grew up playing. Now that I’m a few months in, I am even more convinced that
							software development is for me.
						</p>
						<div className='image'>
							<img src='' alt='' />
							<p className='caption'>
								{' '}
								My wife (then girlfriend) and I at Pride 2013 after the 5k fun run (told you it had been awhile!) It
								demonstrates my love of running, my love for my wife, and my love of being a less crappy person.
							</p>
						</div>

						<p>
							In lieu of a proper closing statement, I’ll leave you with one of my favourite quotes: “Don’t ever, for
							any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who
							you are with, or where you are going, or where you’ve been, ever, for any reason, whatsoever.” Michael
							Scott
						</p>
					</div>
				</>
			),
		},
	];
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path='/'>
						<RecentPosts />
					</Route>
					<Route path='/blog'>
						<Blog posts={posts} />
					</Route>
					<Route path='/projects'>{/* <Projects /> */}</Route>
					<Route path='/about-me'>{/* <AboutMe /> */}</Route>
					<Route path='/contact'>{/* <Contact /> */}</Route>
				</Switch>
			</main>
		</>
	);
};

export default App;
