/////////////////////Author: Jency Roca date: 04-12-2024

var SubjectPhone = window.skd || {};

function AsignSubject(executionContext) {

  const formContext = executionContext.getFormContext();

  const subjectBbva = formContext.getAttribute("bpm_subject").getValue();

  const subject = formContext.getAttribute("subject");

  if (subjectBbva) {

    const subjectBbvaName = subjectBbva[0].name;

    subject.setValue(subjectBbvaName);

  } else {

    subject.setValue("");

  }

  console.log("MOSTRAR EL VALOR DEL SUBJECT", subject.getValue());

}

 

function RetriveUserBussinesUnit(executionContext) {

  const formContext = executionContext.getFormContext();

  const onwerFom = formContext.getAttribute("ownerid").getValue();

  const onwerFormId = onwerFom[0].id;

  const onwerId = onwerFormId.replace(/[{}]/g, "");

  const formItem = formContext.ui.formSelector.getCurrentItem();

  const formLevel = formItem.getLabel();

 

  if (formLevel !== "BBVA Phone Call") return;

  console.log("VALOR DE CAMPO", formContext.getAttribute("bpm_subject"));

 

  Xrm.WebApi.retrieveRecord(

    "systemuser",

    onwerId,

    "?$select=lastname,_businessunitid_value"

  ).then(

    function success(result) {

      const bussinesUnitId = result._businessunitid_value;

      if (!bussinesUnitId) return;

      if (bussinesUnitId === "4be2c569-8d5b-e411-b4b3-d89d67634e04") {

        formContext.getAttribute("bpm_subject").getRequiredLevel("required");

        //CAMBIAR UNIDAD DE NEGOCIO AL PASAR DE AMBIENTE

        AsignSubject(executionContext);

        console.table({

          lastname: result.lastname,

          id: result._businessunitid_value,

          onwerId,

        });

      }

    },

    function (error) {

      console.log(error.message);

      // handle error conditions

    }

  );

}

 