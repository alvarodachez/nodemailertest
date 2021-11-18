const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'testmailernode99@gmail.com',
            pass: 'testNOde99'
        }
    });

    const mailOptions = {
        from:`"${formulario.name}" <${formulario.email}>`,
        to: 'alvaro.rueda.sanchez.corp@gmail.com',
        subject: formulario.subject,
        html:`
        <strong>Name:</strong> ${formulario.name} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Message:</strong> ${formulario.message}
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}