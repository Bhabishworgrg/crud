$(document).ready(function () {
	const postId = new URLSearchParams(window.location.search).get('id');

	if (!postId) {
		$('#post').html('<p>Post ID not found in URL</p>');
		return;
	}

	$.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.done(function (post) {
			console.log(`SUCCESS: Loaded post #${postId}`);
			$('#post').html(`
				<article>
					<h1>${post.title}</h1>
					<p>${post.body}</p>
				</article>
			`);
		})
		.fail(function () {
			console.error(`ERROR: Failed to load post #${postId}`);
			$('#post').html('<p>Failed to load post.</p>');
		});

	$('#edit').on('click', function () {
		window.location.href = `edit.html?id=${postId}`;
	});

	$('#delete').on('click', function () {
		if (!confirm('Are you sure you want to delete this post?')) return;

		$.ajax({
			url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
			type: 'DELETE',
			success: function () {
				alert('Post deleted');
				window.location.href = 'index.html';
			},
			error: function () {
				alert('Failed to delete post');
			}
		});
	});
});
