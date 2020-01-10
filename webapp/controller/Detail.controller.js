sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("UI5_app_for_Qunit_testing.UI5_app.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Sample_UI5App_for_Qunit_testing.Sample_UI5App.view.Detail
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
    			path : "/Products(" + oArgs.productId + ")",
    			events : {
    				dataRequested: function () {
        			oView.setBusy(true);
    			},
    			dataReceived: function () {
        			oView.setBusy(false);
    			}
    		}
		});
	},
handleNavButtonPress : function (evt) {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("");
}

	});

});
