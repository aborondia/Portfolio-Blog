import Post from './Post';

const Blog = ({ posts }) => {
	console.log(posts[0]);
	return (
		<main>
			<Post format='description' post={posts[0]} />
		</main>
	);
};

export default Blog;
