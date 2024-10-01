const postId = new URLSearchParams(window.location.search).get('id');
const form = document.getElementById('edit-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');

(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  titleInput.value = post.title;
  bodyInput.value = post.body;
})();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const updatedPost = {
    title: titleInput.value,
    body: bodyInput.value,
  };

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  });

  if (response.ok) {
    alert('Post updated');
    window.location.href = `index.html`;
  } else {
    alert('Failed to update post');
  }
});

