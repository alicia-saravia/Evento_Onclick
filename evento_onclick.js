function login(){
    var btn = document.getElementById('login');
    if (btn.innerHTML == 'Login') 
        btn.innerHTML = 'Logout';
    else btn.innerHTML = 'Login'; 
}

function boton(){
    var btn = document.getElementById('add-boton');
    if (btn.innerHTML == 'Add Definition') 
        btn.innerHTML = '    ';
    else btn.innerHTML = 'Add Definition'; 
}

function ninja(){
    alert("This page says Ninja was liked");
}

