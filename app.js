
// function getText() {
//     // Get the input element by ID
//     var inputElement = document.getElementById("textInput");

//     var inputValue = inputElement.value;

//     // Display the value in the console (you can use it as needed)
//     console.log("Entered Text: " + inputValue);
// } 


function generate() {

    var alpha = document.getElementById("alpha").checked
    var ALPHA = document.getElementById("ALPHA").checked
    var num = document.getElementById("numbers").checked
    var char = document.getElementById("characters").checked

    var charset = ""
    if (alpha) charset += "abcdefghijklmnopqrstuvwxyz"
    if (ALPHA) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (num) charset += "0123456789"
    if (char) charset += "!@#$&*()/|<>"
    if (charset === "") {
        alert("please select at least one character type !");
        document.getElementById("field").innerText = ""
    }

    var pass = ""

    var textInput = document.getElementById("textInput")
    var length = textInput.value
    for (let i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * charset.length)
        pass += charset[index]
    }

    document.getElementById("field").innerText = pass

}
function reset() {
    document.getElementById("field").innerText = ""
}