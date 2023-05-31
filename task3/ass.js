function signup() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    
    // Encrypt the password (you can use any encryption method)
    var encryptedPassword = btoa(password);
    
    // Store the user credentials in local storage
    localStorage.setItem(username, encryptedPassword);
    
    alert("Signup successful!");
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Get the stored encrypted password from local storage
    var storedEncryptedPassword = localStorage.getItem(username);
    
    if (storedEncryptedPassword) {
        // Decrypt the stored encrypted password
        var storedPassword = atob(storedEncryptedPassword);
        
        if (password === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("User not found!");
    }
}
