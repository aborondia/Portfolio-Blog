import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import '../css/Post.css';

const Post = ({ post }) => {
	return (
		<Container maxWidth="md">
				{post.title}
				{post.date}
				<Link to='./about-me.html'>by Andrew Borondia</Link>
			{post.fullPost}
		</Container>
	);
};

export default Post;
