$(document).ready(function () {
	const $postsElement = $('#posts');
	
	const fetchAllPosts = async () => {
	  	try {
	    	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	    	if (!response.ok) {
	      		console.error('ERROR: Fetching all posts | Status', response.status);
				return;
	    	}
	    	const data = await response.json();
	    	displayPosts(data);
	  	} catch (error) {
	    	console.error('ERROR: Fetching all posts |', error);
	  	}
	};
	
	const displayPosts = (posts) => {
	  	const markup = posts.map(post => `
	    	<article class="post">
	      		<h2 class="post-title">
	        		<a href="post.html?id=${post.id}">${post.title}</a>
	      		</h2>
	      		<p class="post-body">${post.body}</p>
	    	</article>
		`).join('');
	
	  	$postsElement.html(markup);
	};
	
	fetchAllPosts();
});
