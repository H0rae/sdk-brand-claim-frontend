const apiURL = 'https://api.dev.horae.io/api/claim-request/invite-user';
const brandName = 'Horae';

document.getElementById('claimForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var submitButton = event.target.querySelector('button');
    var loader = submitButton.querySelector('.loader');
    var serialNumber = document.getElementById('serialNumber').value;
    var claimCode = document.getElementById('claimCode').value || null;
    var email = document.getElementById('email').value;
    var statusMessage = document.getElementById('statusMessage');  // Corrected ID

    // Prepare for sending
    submitButton.disabled = true;
    loader.style.visibility = 'visible'; // Display the loader

    // Real API call
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            serialNumber: serialNumber,
            brand : brandName,
            claimCode: claimCode, // Optional depending on the brand
            email: email
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    })
    .then(data => {
        // Handle response in case of success
        console.log('API Success:', data);
        statusMessage.className = 'status-message status-success';
        statusMessage.innerHTML = 'Passport claim request sent successfully!<br>Please check your email/spam and follow the instructions to redeem your new certificate.';
        statusMessage.style.display = 'block';
        setTimeout(() => { statusMessage.style.opacity = 1; }, 10);
    })
    .catch(error => {
        // Handle errors
        console.error('API Error:', error);
        statusMessage.className = 'status-message status-error';
        statusMessage.innerHTML = 'Failed to request your watch passport. Please try again.';
        statusMessage.style.display = 'block';
        setTimeout(() => { statusMessage.style.opacity = 1; }, 10);
    })
    .finally(() => {
        loader.style.visibility = 'hidden'; 
        submitButton.disabled = false;
    });
});


// Simulated API call - TESTING PURPOSES 

// document.getElementById('claimForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var submitButton = event.target.querySelector('button');
//     var loader = submitButton.querySelector('.loader');
//     var serialNumber = document.getElementById('serialNumber').value;
//     var claimCode = document.getElementById('claimCode').value || null;
//     var email = document.getElementById('email').value;
//     var statusMessage = document.getElementById('statusMessage');

//     submitButton.disabled = true;
//     loader.style.visibility = 'visible'; 

//     console.log("Sending data to the API:", {serialNumber, claimCode, email});

//     setTimeout(() => {
//         var success = Math.random() > 0.5; 

//         if (success) {
//             console.log('Simulated API Success');
//             statusMessage.className = 'status-message status-success';
//             statusMessage.innerHTML = 'Passport claim request sent successfully!<br>Please check your email/spam and follow the instructions to redeem your new certificate.';
//             statusMessage.style.display = 'block';
//             setTimeout(() => { statusMessage.style.opacity = 1; }, 10); 
//         } else {
//             console.error('Simulated API Error');
//             statusMessage.className = 'status-message status-error';
//             statusMessage.innerHTML = 'Failed to request your watch passport. Please try again.';
//             statusMessage.style.display = 'block';
//             setTimeout(() => { statusMessage.style.opacity = 1; }, 10); 
//         }
//         loader.style.visibility = 'hidden'; 
//         submitButton.disabled = false; 
//     }, 2000); 
// });
