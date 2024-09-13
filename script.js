// script.js

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const correctAnswer = 'saan ang banyo?';

    if (answer === correctAnswer) {
        result.textContent = 'Correct! Great job!';
        result.style.color = 'green';
    } else {
        result.textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
        result.style.color = 'red';
    }
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending an email or submitting the form
    console.log('Form submitted:', { name, email, message });
    
    alert('Thank you for your message. We will get back to you soon!');
    
    // Clear the form fields
    document.getElementById('contact-form').reset();
});
