const form = document.getElementById(reservationForm);
const paymentMethod = document.getElementById(paymentMethod);
const peymentQRcode = document.getElementById(peymentQRcode);

form.addEventListener('submit', function 
(event) 
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectedPaymentMethod = paymentMethod.value;

    if (selectedPaymentMethod === 'qrcode') {

        const qrcodeURL = 'URL_DO _SERVIÇO_DE_PAGAMENTO'
        paymentQRcode.innerHTML = '<img src="${qrcodeURL}" alt=QR Code de Pagamento">';
    } else if (selectedPaymentMethod ==='pix'){
        alert('Ola, ${name}! Um link de pagamento via Pix foi enviado para o seu email ${email}.');
    }
    

});