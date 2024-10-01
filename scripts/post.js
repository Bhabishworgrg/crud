const postElement = document.getElementById('post');
const postId = new URLSearchParams(window.location.search).get('id');

const fetchPost = async () => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
		response.ok
			? console.log(`SUCCESS: Fetching post #${postId} |`, response.status)
			: console.error(`ERROR: Fetching post #${postId} |`, response.status);
		const data = await response.json();
		return data;
	} catch(error) {
		console.error(`ERROR: Fetching post #${postId} |`, error);
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

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', async () => {
	const confirmDelete = confirm('Are you sure you want to delete this post?');
	if (!confirmDelete) return;

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	  method: 'DELETE'
	});

	if (response.ok) {
	  alert('Post deleted');
	  window.location.href = 'index.html';
	} else {
	  alert('Failed to delete post');
	}
});

const editButton = document.getElementById('edit');
editButton.addEventListener('click', async () => {
	window.location.href = `edit.html?id=${postId}`;
});
