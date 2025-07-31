// script.js
document.getElementById('add-stars').onclick = () => {
  document.getElementById('stars-modal').style.display = 'flex';
};

document.getElementById('close-modal').onclick = () => {
  document.getElementById('stars-modal').style.display = 'none';
};

document.getElementById('confirm-stars').onclick = () => {
  const amount = parseInt(document.getElementById('star-amount').value);
  fetch('/api/add-stars', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ user_id: 'test_user', amount })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('stars-count').innerText = data.stars;
      document.getElementById('stars-modal').style.display = 'none';
    }
  });
};
