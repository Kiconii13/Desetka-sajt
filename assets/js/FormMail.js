function sendMail(){
    var params={
        name: document.getElementById("tbIme").value + " " + document.getElementById("tbPrezime").value,
        email: document.getElementById("tbEmail").value,
        message: document.getElementById("tbMess").value
    };
    const ServiceID="service_9nkp45z";
    const TemplateID="template_wcxudkl";

    emailjs.send(ServiceID,TemplateID,params);

    console.log("Uspeh!");
}
