function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        alert("Congratulations!");
        console.log(0);
        return true;
    }
}