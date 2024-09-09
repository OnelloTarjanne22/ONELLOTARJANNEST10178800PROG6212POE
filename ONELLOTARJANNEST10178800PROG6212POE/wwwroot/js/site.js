document.getElementById('claimForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Claim submitted successfully!');
});

document.getElementById('trackingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Tracking request sent!');
});
