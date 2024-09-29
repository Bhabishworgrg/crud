const postsElement = document.getElementById('posts');

const fetchAllPosts = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		response.ok
			? console.log('SUCCESS: Fetching all posts | Status', response.status)
			: console.error('ERROR: Fetching all posts | Status', response.status);
		const data = await response.json();
		return data;
	} catch(error) {
		console.error('ERROR: Fetching all posts |', error);
	}
};

const generatePosts = async () => {
	const data = await fetchAllPosts();
	postsElement.innerHTML = data.map(post => `
      <article class="post">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </article>
    `).join('');
}

generatePosts();
