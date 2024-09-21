function verifyAge() {
    const birthdate = document.getElementById('birthdate').value;
    const errorMessage = document.getElementById('error-message');
    
    // Ensure the birthdate field is filled
    if (!birthdate) {
        errorMessage.textContent = "Please enter your birthdate.";
        return;
    }

    // Parse birthdate and calculate age
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    // Adjust age if the birthday has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // If the user is 18 or older, redirect to home.html
    if (age >= 18) {
        window.location.href = "home.html"; 
    } else {
        // Display error if the user is under 18
        errorMessage.textContent = "You must be 18 or older to enter.";
    }
}