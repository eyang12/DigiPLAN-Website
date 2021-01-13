$(document).ready(function() {

});

function verify() {
    if ($("#username").val() == "admin" && $("#password").val() == "admin") {
        $("#signin").attr("action", "https://webpages.uncc.edu/eyang12/Exercise/Assignment/home.html");
    }
    else {
        $("#signin").attr("action", "https://webpages.uncc.edu/eyang12/Exercise/Assignment/signin.html");
        alert("You have entered the wrong username and password. Please try 'admin' for both fields.");
    }
}

function updateChat() {
    var x = document.getElementById("textbox").value;
    var old =  document.getElementById("chat").innerHTML;
    document.getElementById("chat").innerHTML = old + "User says: " + x + "<br />";
    document.getElementById("textbox").value = "";
}

