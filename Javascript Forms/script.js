document.getElementById("dataForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve values of each input field by ID
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const resultDiv = document.getElementById("result");
    let errorMessage = "";

    // Validation
    if (name === "") {
        errorMessage += "Name is required.<br>";
    }
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Invalid email format.<br>";
    }
    
    if (age === "" || isNaN(age) || age < 18 || age > 100) {
        errorMessage += "Age must be between 18 and 100.<br>";
    }
    
    // Display error messages if any
    if (errorMessage) {
        resultDiv.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
        return;
    }

    resultDiv.innerHTML = `
        <p>Full Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
    `;

    document.getElementById("dataForm").reset();
});