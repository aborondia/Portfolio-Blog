import {Link} from 'react-router-dom';

const AboutMe = ({ post }) => {
	return (
		<div className='post'>
			<div className='title'>
				<h2>{post.title}</h2>
				<Link to='./about-me.html'>by Andrew Borondia</Link>
			</div>
			{post.fullPost}
		</div>
	);
};

export default AboutMe;
