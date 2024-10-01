$(document).ready(function () {
	const postId = new URLSearchParams(window.location.search).get('id');

	if (!postId) {
		alert('No post ID found in URL');
		return;
	}

	$.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.done(function (post) {
			$('#title').val(post.title);
			$('#body').val(post.body);
			console.log(`SUCCESS: Loaded post #${postId} for editing`);
		})
		.fail(function () {
			alert('Failed to load post');
			console.error(`ERROR: Could not fetch post #${postId}`);
		});

	$('#edit-form').on('submit', function (event) {
		event.preventDefault();

		const updatedPost = {
			title: $('#title').val(),
			body: $('#body').val()
		};

		$.ajax({
			url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
			type: 'PUT',
			contentType: 'application/json',
			data: JSON.stringify(updatedPost),
			success: function () {
				alert(`Post #${postId} updated`);
				window.location.href = 'index.html';
			},
			error: function () {
				alert('Failed to update post');
				console.error(`ERROR: Updating post #${postId}`);
			}
		});
	});
});
