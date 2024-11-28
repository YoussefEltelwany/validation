var inputforemail = document.getElementById('emailinput');
var inputforpassword = document.getElementById('Passwordinput');
var buttonlogin = document.getElementById('Loginbtn');

let datasingin = [];
if (localStorage.getItem("hamad") != null) {
    datasingin = JSON.parse(localStorage.getItem('hamad'));
}

buttonlogin.addEventListener('click', function () {
    let inf = {
        email: inputforemail.value.trim(),
        password: inputforpassword.value
    };

    let isValidUser = false;

    for (let i = 0; i < datasingin.length; i++) {
        if (inf.email === datasingin[i].email && inf.password === datasingin[i].password) {
            isValidUser = true;
            break; 
        }
    }
    if (isValidUser) {
        window.location = "./home.html";
    } else {
        alert('Invalid Email or Password');
    }

    clearform();
});

function clearform() {
    inputforemail.value = '';
    inputforpassword.value = '';
}
