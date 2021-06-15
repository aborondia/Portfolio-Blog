const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='title'>
				<h2>{post.title}</h2>
				<a href='./index.html'>by Andrew Borondia</a>
			</div>
			{post.fullPost}
			{/* <div className='read-more'>
				<button>More</button>
			</div> */}
		</div>
	);
};

export default Post;
