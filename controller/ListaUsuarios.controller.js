sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function ( Controller, JSONModel, Filter, FilterOperator ) {
		"use strict";
		return Controller.extend("sap.ui.demo.walkthrough.controller.ListaUsuarios", {
		
		buscarUsuarios : function (oEvent) {

			// Construye el filtro del array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Nombre", FilterOperator.Contains, sQuery));
			}

			// Enlace de filtros
			var oList = this.byId("listaUsuarios");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				rutaUsuarios: window.encodeURIComponent(oItem.getBindingContext("usuarios").getPath().substr(1))
			});
		}
	});

});