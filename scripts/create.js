const formElement = document.getElementById('create-post-form');
const statusElement = document.getElementById('status');

formElement.addEventListener('submit', async (event) => {
	event.preventDefault();

	const userId = formElement.userId.value.trim();
	const title = formElement.title.value.trim();
	const body = formElement.body.value.trim();

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userId, title, body }),
		});

		if (!response.ok) console.error('ERROR: Creating post | Status', response.status);

		const newPost = await response.json();
		console.log('SUCCESS: Created post', newPost);
		alert(`Post created with ID: ${newPost.id}`);
		window.location.href = `index.html`;
	} catch (error) {
		console.error('ERROR: Creating post |', error);
		alert('Failed to create post');
	}
});
