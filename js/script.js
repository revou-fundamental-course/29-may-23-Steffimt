function validateform(){
    var name = document.forms['message-form']['nama'].value;
    var email = document.forms['message-form']['email'].value;
    // var date = document.forms['message-form']['tanggal-lahir'].value;
    // var gender = document.forms['message-form']['gender'].value;
    var number = document.forms['message-form']['nomor'].value;
    var messages = document.forms['message-form']['pesan'].value;
    if(name=="" ||email=="" || number=="" ||messages==""){
        alert("Input tidak boleh kosong");
        return false;
    }
    document.getElementById("sender-full-name").innerText=name;
    document.getElementById("sender-email").innerText=email;
    // document.getElementById("sender-birth-date").innerText=date;
    // document.getElementById("sender-gender").innerText=gender;
    document.getElementById("sender-number").innerText=number;
    document.getElementById("sender-messages").innerText=messages;
    return false;
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}