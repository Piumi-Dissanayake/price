function sendToWhatsapp() {
    let number = "+94 71 133 0776";  // Make sure this is the correct WhatsApp number
    let name = document.getElementById('name').value;

    var url = "https://wa.me" + number + "&text=" + "Name : " +name+ "%0a";

    window.open(url, '_blank').focus();
}
