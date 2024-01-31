
const objUser = [
    {
        username: "Niraj",
        password: 123
    },
    {
        username: "Tushar",
        password: 124
    },
    {
        username: "Harsh",
        password: 125
    }
]

function validation() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < objUser.length; i++) {
        if (username == objUser[i].username && password == objUser[i].password) {
            window.location.href = "atm.html";
            return true;
        }
    }
    if (username == "") {
        alert("please enter username")
        return false;
    }
    else if (password == "") {
        alert("please enter password")
        return false;
    }
    else if (username != objUser[i].username) {
        alert("Invalid username")
        return false;
    }
    else {
        alert("Invalid password")
        return false;
    }

}


// login page script over 
let result = 5000;

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        result += amount;
        document.getElementById("result").innerHTML = 'Your Account Balance is :' + result;
    } else {
        alert("Please enter a valid amount for deposit.");
    }
}

function widthdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount <= result && amount > 0) {
        result -= amount;
        document.getElementById("result").innerHTML = 'Your Account Balance is :' + result;
    } else {
        alert("Please enter a valid amount for widthdraw.");
    }
}


function balance() {
    document.getElementById("result").innerHTML = 'Your Account Balance is :' + result;
    document.getElementById("amount").value = '';
}

function exit() {
    window.location.href = "loginpage.html";
}


