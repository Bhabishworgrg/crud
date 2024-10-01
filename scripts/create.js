$(document).ready(function () {
	$('#create-form').on('submit', function (event) {
		event.preventDefault();

		const newPost = {
			title: $('#title').val(),
			body: $('#body').val()
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(newPost),
			success: function (createdPost) {
				alert('Post created successfully!');
				console.log('SUCCESS: Created post |', createdPost);
				window.location.href = 'index.html';
			},
			error: function () {
				alert('Failed to create post');
				console.error('ERROR: Creating post');
			}
		});
	});
});
