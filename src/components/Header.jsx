import '../css/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<h1>Andrew's Blog</h1>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='blog'>Blog</Link>
					</li>
					<li>
						<Link to='projects'>Projects</Link>
					</li>
					<li>
						<Link to='about-me'>About Me</Link>
					</li>
					<li>
						<Link to='contact'>Contact</Link>
					</li>
				</ul>
			</nav>
			<div className='border'></div>
		</header>
	);
};

export default Header;
