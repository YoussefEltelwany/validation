let nameforuser = document.getElementById('nameforuser');

let hampozo = JSON.parse(localStorage.getItem('hamad'));


for (let i = 0; i <hampozo.length; i++) {
    nameforuser.innerHTML = `${hampozo[i].name}`;
}
