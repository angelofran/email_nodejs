const nm = require('nodemailer');

const transport =  nm.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secureConnection: false, // true para portas 465 e false para as outras
    auth: {
        //de quem será o email
        user: 'youremail',
        //senha da conta
        pass: 'yourpass',
    }
});

transport.sendMail({
    from: 'youremail',
    to: 'to who?',
    subject: 'title',
    html: 'body message',
    text: 'alternative',
})
.then(() => console.log('sended!'))
.catch((err) => console.log('error: ', err));