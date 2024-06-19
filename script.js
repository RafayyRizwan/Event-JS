

function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    console.log('Username:', username);
    console.log('Age:', age);
    console.log('Email:', email);
    console.log('Job:', job);
    console.log('Designation:', designation);
    console.log('Product Type:', productType);
    console.log('Feedback:', feedback);

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    alert('Thank you for your valuable feedback');
    document.getElementById('userInfo').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitFeedback();
        }
    });
});
