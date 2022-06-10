import { createTransport } from "nodemailer";



 var transporter = createTransport({
        sendmail: true,
        newline: 'windows',
        path: '/usr/sbin/sendmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "victor.henrick9@gmail.com",
        pass: "VICtor2018**"
    },
});

function run() {
    

transporter.sendMail({
    from: 'HowTo play <victor.henrick9@gmail.com',
    to: ['victor.henrick9@gmail.com'], 
    subject: ' Obrigado!',
    text: 'Obrigado por se cadstrar! Esse é o primeiro passo para melhorar seu Aprendizado. Aguarde que durante a semana te enviaremos conteúdos exclusivos para te ajudar a se tornar um músico profissional!',
    }).then(message =>{ 
        console,log(message);
    }).catch(err =>{ 
        console.log(err)
    })}
export default { 
    run
}

