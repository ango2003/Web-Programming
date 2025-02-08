document.getElementById("dataForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve values of each input field by ID
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const age = document.getElementById("age").value;
    
    // Get selected gender
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
    
    // Get selected country
    const country = document.getElementById("country").value;
    
    // Check if the user agrees to the terms
    const agreement = document.getElementById("agreement").checked ? "Agreed" : "Not agreed";
    
    // Display the values
    const resultDiv = document.getElementById("result"); // Make sure you have an element with id="result"
    
    resultDiv.innerHTML = `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Country: ${country}</p>
        <p>Agreement: ${agreement}</p>
    `;
});
