const postsElement = document.getElementById('posts');

const generatePosts = (data) => {
	return data.map(post => `
		<h2>${post.title}</h2>
		<p>${post.body}</p>
	`).join('');
}

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => {
		response.ok
			? console.log('SUCCESS: Status', response.status)
			: console.error('ERROR: Status', response.status);
		return response.json();
	})
	.then(data => {
		postsElement.innerHTML += generatePosts(data)
	})
	.catch(error => console.error('ERROR:', error));
