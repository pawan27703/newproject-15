document.getElementById("calculate-btn").addEventListener("click", function() {
    let dob = document.getElementById("dob").value; 
    let result = document.getElementById("age-result");

    if (!dob) {
        alert("Please enter your date of birth.");
        return; 
    }

    
    let birthDate = new Date(dob); 
    let today = new Date(); 
    let age = today.getFullYear() - birthDate.getFullYear(); 
    let monthDifference = today.getMonth() - birthDate.getMonth();

    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.textContent = age; 
});

