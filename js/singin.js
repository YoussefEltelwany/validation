let inputname = document.getElementById('getname');
let inputemail = document.getElementById('getemail');
let inputpassword = document.getElementById('getpassword');
let submitBtn = document.getElementById('singinbtn');

let datasingin =[];
 if (localStorage.getItem("hamad") != null) {
   datasingin= JSON.parse(localStorage.getItem('hamad'))
}

submitBtn.addEventListener('click', function () {
    let name = inputname.value.trim();
    let email = inputemail.value.trim();
    let password = inputpassword.value;

    if (name === '') {
        alert("Name cannot be empty.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    let infoForm = {
        name: name,
        email: email,
        password: password
    };
    datasingin.push(infoForm);
    localStorage.setItem('hamad', JSON.stringify(datasingin));
    console.log(datasingin);

   
    inputname.value = '';
    inputemail.value = '';
    inputpassword.value = '';
    alert("Form submitted successfully!");
});
function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
