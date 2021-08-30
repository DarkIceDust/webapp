
// DEFINICIÓN SAP - CONTROLADOR
/*sap.ui.define([
	// Definimos los elementos que vayamos a usar.
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
   // Los pasamos como argumentos de la función.
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   // Y devolvemos un Controller.extend con el nombre del controller.
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   	// Luego un onInit que será lo que se ejecute, creará un oData con un recipient y un name,
   	// el cual usará la vista.
      onInit : function() {
      	var oData = {
      		recipient : {
      			name : "Pepe"
      		}
      	};
      	// Y ahora creamos una variable que guardará un modelo JSON con los valores del objeto oData.
      	// Además, especificamos que le asigne este modelo a la vista.
      	var oModel = new JSONModel(oData);
      	this.getView().setModel(oModel);
      	// Establecer el modelo i18n en la vista y especificamos el bundleName de dicho archivo.
      	var i18nModel = new ResourceModel({
      		bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
      	});
      	// Y especificamos que se le asigne este modelo a la vista, con el nombre i18n.
      	this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello : function () {
		// EXPLICAR (NO LO ENTIENDO)
      	var oBundle = this.getView().getModel("i18n").getResourceBundle();
      	var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      	var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      	// Mostrar el mensaje
      	MessageToast.show(sMsg);
      }
   });
});
*/

/* sap.ui.define([
	// Definimos los elementos que vayamos a usar.
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
   // Los pasamos como argumentos de la función.
], function (Controller, MessageToast) {
   "use strict";
   // Y devolvemos un Controller.extend con el nombre del controller.
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
		// EXPLICAR (NO LO ENTIENDO)
      	var oBundle = this.getView().getModel("i18n").getResourceBundle();
      	var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      	var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      	// Mostrar el mensaje
      	MessageToast.show(sMsg);
      }
   });
});
*/

sap.ui.define([
	// Definimos los elementos que vayamos a usar.
   "sap/ui/core/mvc/Controller"
   // Los pasamos como argumentos de la función.
], function (Controller) {
   "use strict";
   // Y devolvemos un Controller.extend con el nombre del controller.
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   });
});

