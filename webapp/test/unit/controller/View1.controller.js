/*global QUnit*/

sap.ui.define([
	"UI5_app_for_Qunit_testing/UI5_app/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", 
	function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});
	
	QUnit.module("Price State");
	function priceStateTestCase(Products) {

  var sState = Products.ProductName;

  Products.assert.strictEqual(sState, Products.ReorderLevel, "Is the first Product name Chai?");
}

  QUnit.test("The first product name is chai", function (assert) {

  priceStateTestCase.call(this, {

  assert: assert,

  ProductName: "Available",

  ReorderLevel: "Available"

  });

});
});


