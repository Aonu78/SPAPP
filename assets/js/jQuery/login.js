document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userData = localStorage.getItem('userData');
    var users = userData ? JSON.parse(userData) : [];
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });
    if (user) {

        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("loggedInUserEmail", user.email); // Save user's email
        localStorage.setItem("loginTime", Date.now()); 

        window.location.hash = 'account';        
        document.getElementById('nav-login').setAttribute('href', '#account');
        document.getElementById('top-login').removeAttribute('href');
        document.getElementById('top-login').innerText = 'Logout'; 
        document.getElementById('top-login').setAttribute('id',"logout")
    } else {
        console.log("User not found"); // Debug statement
        document.getElementById('error-call').style.display = "block";
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    return false;
});
