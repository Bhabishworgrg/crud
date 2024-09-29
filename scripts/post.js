const postElement = document.getElementById('post');
const postId = new URLSearchParams(window.location.search).get('id');

const fetchPost = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		response.ok
			? console.log('SUCCESS: Fetching post #1 |', response.status)
			: console.error('ERROR: Fetching post #1 |', response.status);
		const data = await response.json();
		return data;
	} catch(error) {
		console.error('ERROR: Fetching post #1 |', error);
	}
}

const generatePost = async () => {
	const post = await fetchPost();
	postElement.innerHTML = `
		<article>
			<h1>${post.title}</h1>
			<p>${post.body}</p>
		</article>
	`
}

generatePost();
