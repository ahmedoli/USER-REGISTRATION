document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(' http://localhost:3000/submit', {
        method: 'POST',
        body: new URLSearchParams(formData),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with your registration!');
    });
});
