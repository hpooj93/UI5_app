/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI5_app_for_Qunit_testing/Sample_UI5App/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
