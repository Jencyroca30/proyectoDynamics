
///////////////////
//Author: Jency Roca date: 04-01-2024

var SubjectPhone = window.skd||{};

function Asignar(executionContext) {

   const formContext= executionContext.getFormContext();

   const phoneTitle = formContext.getAttribute('bpm_subject').getValue();

    const originSubject= formContext.getAttribute('subject');

    if(phoneTitle){

        const phoneTitleName=phoneTitle[0].name;

        originSubject.setValue(phoneTitleName);

    } else {

        originSubject.setValue("");

    }  

    console.log ('MOSTRAR EL VALOR DEL SUBJECT', originSubject.getValue());

}

