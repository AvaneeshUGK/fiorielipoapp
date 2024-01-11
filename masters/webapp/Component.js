/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "masters/model/models",
        "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"
    ],
    function (UIComponent, Device, models,ReuseComponentSupport) {
        "use strict";

        return UIComponent.extend("masters.Component", {
            metadata: {
                manifest:"json",
                library: "demoLibrary",
                //interfaces: ["sap.ui.core.IAsyncContentCreation"],
                properties: {
                    /* Standard properties for reuse components */
                    uiMode: {
                        type: "string",
                        group: "standard"
                    },
                    semanticObject: {
                        type: "string",
                        group: "standard"
                    },
                    stIsAreaVisible: {
                        type: "boolean",
                        group: "standard"
                    },
                    /* Component specific properties */
                    customerID: {
                        type: "string",
                        group: "specific",
                        defaultValue: ""
                    }

                }
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {debugger
                // call the base component's init function
                ReuseComponentSupport.mixInto(this);
                //Defensive call of init of the super class:
                ( UIComponent.prototype.init || jQuery.noop ).apply(this, arguments);
            },

            setView: function (oView) {debugger
                this._compView = oView;  
            },
            getBindingPath: function () {debugger
                return this._bindingPath;
            }
        });
    }
);