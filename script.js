
const visitorApiUrl = 'https://7hzdkm8ub2.execute-api.us-east-1.amazonaws.com/prod/visitorCounter';
const contactApiUrl = 'https://7hzdkm8ub2.execute-api.us-east-1.amazonaws.com/prod/contactForm';

window.onload = () => {
  fetch(visitorApiUrl)
    .then(res => res.json())
    .then(data => {
      document.getElementById('visitor-count').innerText = data.count;
    })
    .catch(() => {
      document.getElementById('visitor-count').innerText = 'N/A';
    });
};

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  fetch(contactApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('form-status').innerText = 'Message sent successfully!';
    })
    .catch(err => {
      document.getElementById('form-status').innerText = 'Error sending message.';
    });
});
