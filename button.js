var myButton = document.getElementById('Tombol-mati');

function disableButton() {
    myButton.disabled = true;
    myButton.textContent = "Telah Di Pesan";
}

myButton.addEventListener('Tekan', disableButton);