/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "fiorielipoapp/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("fiorielipoapp.Component", {
            metadata: {
                manifest: "json"
            },

            // eventMappings: {
			// 	Overview: [{
			// 		name: "toreusetest",
			// 		route: "reusetest",
			// 		componentTargetInfo: {
			// 			reusetest: {
			// 				route: "bookList",
			// 				parameters: {

			// 				}
			// 			}
			// 		}
			// 	}],
            //     Masters:[{
            //         name:"tomasters",
            //         route:"masters",
            //         commentTargetInfo:{
            //             masters:{
            //                 route:"routeApp"
            //             }
            //         }
            //     }]
            // },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                jQuery.sap.registerModulePath( "Overview", "bookshop/app/reusetest/webapp" );
            }
        });
    }
);