document.getElementById('toSignUp').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
});

document.getElementById('toLogin').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});