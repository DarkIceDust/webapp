
// DEFINICIÓN SAP - COMPONENTE
/* sap.ui.define([
		"sap/ui/core/UIComponent"
	], function(UIComponent) {
		"use strict";
		return UIComponent.extend("", {
			init: function() {
				// Llamada a la init function del padre
				UIComponent.prototype.init.apply(this, arguments);
			}
		});
	});
*/

/* sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel"
	], function(UIComponent, JSONModel, ResourceModel) {
		"use strict";
		return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
			metadata : {
				"interfaces" : ["sap.ui.core.IAsyncContentCreation"],
				"rootview" : {
					"viewName": "sap.ui.demo.walkthrough.view.App",
					"type": "XML",
					// "async": true,
					"id": "app"
				}
			},
			init: function() {
				// Llamada a la init function del padre
				UIComponent.prototype.init.apply(this, arguments);
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
		}
	});
});
*/

sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel"
	], function(UIComponent, JSONModel, ResourceModel) {
		"use strict";
		return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
			// en el metadata especificamos una interfaz y especificamos que el manifest será nuestro manifest.json.
			metadata : {
				interfaces : ["sap.ui.core.IAsyncContentCreation"],
				manifest: "json"
			},
			init: function() {
				// Llamada a la init function del padre
				UIComponent.prototype.init.apply(this, arguments);
				var oData = {
      				recipient : {
      					name : "Pepe"
      				}
				};
			// Y ahora creamos una variable que guardará un modelo JSON con los valores del objeto oData.
	      	// Además, especificamos que le asigne este modelo a la vista.
	      	var oModel = new JSONModel(oData);
	      	this.setModel(oModel);
	      
	      	// Crea las vistas basado en el url/hash
	      	this.getRouter().initialize();
		}
	});
});	
	