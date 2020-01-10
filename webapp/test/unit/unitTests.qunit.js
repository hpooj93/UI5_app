/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI5_app_for_Qunit_testing/UI5_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
