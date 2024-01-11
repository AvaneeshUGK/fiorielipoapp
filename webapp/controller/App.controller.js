sap.ui.define([
    "sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/ComponentSupport",
	"sap/m/Popover",
	"sap/m/Button",
	"sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Device, Controller, JSONModel, Popover, Button,ComponentSupport, library) {
        "use strict";

        var ButtonType = library.ButtonType,
		PlacementType = library.PlacementType;
        var oUserInfoService = sap.ushell.Container.getService("UserInfo");
        var oUser = oUserInfoService.getUser();
        var mod;
        var n = "";
        const binding={
            "Email":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#email_dep-display?sap-ui-app-id-hint=saas_approuter_emaildep&/?sap-iapp-state=TASJUZ6F58J7KTZCCRBV5ZTI7Q6TKWHMHR9XE38VS",
            "Overview":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#ovoverview-display?sap-ui-app-id-hint=saas_approuter_ov.overview",
            "Liability Report":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#liabilityreportsob-display?sap-ui-app-id-hint=saas_approuter_my.liability&/?sap-iapp-state=TASYTF4ZO3BIVCY58YWM9KQTQMGL52A5D21SV7G71",
            "Parameters":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#parameterssemobj-display?sap-ui-app-id-hint=saas_approuter_parameterssettings",
            "Po Cockpit":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#pocockpit-display?sap-ui-app-id-hint=saas_approuter_pocockpitdep&/?sap-iapp-state=TAS53U0L4UV4DGOTG780N6L879YPMVSNQ2Z9R7N0H",
            "Track Po":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#trackpo-display?sap-ui-app-id-hint=saas_approuter_trackpodep&/?sap-iapp-state=TASVMDHZSAWXSU2EQAAG8WWCMH249X08V4P9K9VWZ",
            "Aging Report":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#agingreportsob-display?sap-ui-app-id-hint=saas_approuter_re.agingreport&/?sap-iapp-state=TASVJ7X9KFTIVQKHRAP608CMC6SOUGPM2ULHXSETQ",
            "Masters":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#mastereliposo-display?sap-ui-app-id-hint=saas_approuter_masterss",
            "Groups":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#elipogroup-display?sap-ui-app-id-hint=saas_approuter_elipogroupapp",
            "Invoice Review":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#supplierelipodh-display?sap-ui-app-id-hint=saas_approuter_supplier2nd&/?sap-iapp-state=TASKAQ3C60TK32H2LTOKO2XMPZ0VI1ZH2B438T7MG",
            "Invoice Assignment":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#invoice_assignment_01-display?sap-ui-app-id-hint=saas_approuter_invoiceassignment01",
            "My Inbox":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#my_inbox_01-display?sap-ui-app-id-hint=saas_approuter_myinbox01",
            "Productivity Report":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#productivityreportso-display?sap-ui-app-id-hint=saas_approuter_re.productivityreport&/?sap-iapp-state=TASM2H0H9VT9GCJAYEGMQ9UO2HFYAK635EERAUFVS",
            "Key Process Analytics Report":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#keyprocessanalyreportso-display?sap-ui-app-id-hint=saas_approuter_re.keyprocessanalyreport&/?sap-iapp-state=TASWNXXUCSUI0FOQ4KWQOTM8KEMNNM72228E55NH6",
            "Invoice Summary Report":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#invoicesumreportso-display?sap-ui-app-id-hint=saas_approuter_re.invoicesumreport&/?sap-iapp-state=TASOZO6TE2TRN66SOT7476W63M5L5I8JTQPGF8YBQ",
            "OCR Keyword":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#ocrkeywordsemobj-display?sap-ui-app-id-hint=saas_approuter_ocrkeywords",
            "Assign Role":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#assignrolesemobj-display?sap-ui-app-id-hint=saas_approuter_assignrole",
            "Comment Template":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#comments_template_01-display?sap-ui-app-id-hint=saas_approuter_commentstemplate01&/?sap-iapp-state=TAS6LMCOYA10HPRO1FO6DO2GOR37PHP4TWWXS1I6Q",
            "Track Invoices":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#track_invoices_01-display?sap-ui-app-id-hint=saas_approuter_trackinvoices01",
            "View All Rules / Notifications":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#viewallrn-display?sap-ui-app-id-hint=saas_approuter_viewallrn&/?sap-iapp-state=TAS63DJQZX01L1XB0QX6YVIYLEMCNIANLB2Y8OL34",
            "Invoice Cockpit":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#invoice_cockpit_01-display?sap-ui-app-id-hint=saas_approuter_invoicecockpit01&/?sap-iapp-state=TAS6HSXBNPDC1JSV6LAJGKHXCMDB1UHH4GPGXXMFI",
            "Supplier Enquiry":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#supplier_enquires_001-display?sap-ui-app-id-hint=saas_approuter_supplierenquires001&/?sap-iapp-state=TASY67U0DPHHLM8KBQ2O4BRQ37KO8F19RRPKCNT15",
            "Supplier Create Invoice":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#suppliertcreate-display?sap-ui-app-id-hint=saas_approuter_suppliercreateform",
            "Create Invoice":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#suppliertcreate-display?sap-ui-app-id-hint=saas_approuter_suppliercreateform",
            "Assignment Rules":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#rulesdisplayassinment-display?sap-ui-app-id-hint=saas_approuter_assighnemtrules22",
            "Notification Rules":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#notificationrule-display?sap-ui-app-id-hint=saas_approuter_notificationrules&/notification_rules(nr_id=c05ba420-9267-4b1b-b91b-d29a6251b64b,IsActiveEntity=false)?i-action=create",
            "Approval Rules":"https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/site?siteId=c0e4a12c-f45b-4d4c-a065-b8919bf4e669#create_approval_rules-display?sap-ui-app-id-hint=saas_approuter_createapprovalrules&/rules(id=3084952c-fd76-4d91-b1a3-210d73bcf618,IsActiveEntity=false)?i-action=create"
            
        }
        var icons={
            "Overview":"sap-icon://collections-management",
            "Masters":"sap-icon://tree",
            "Groups":"sap-icon://company-view",
            "Rules":"sap-icon://activities",
            "Invoice":"sap-icon://create",
            "Purchase":"sap-icon://add-document",
            "Supplier":"sap-icon://add-coursebook",
            "Reports":"sap-icon://print",
            "Assign Role":"sap-icon://add",
            "Settings":"sap-icon://action-settings"
            
        }

        return Controller.extend("fiorielipoapp.controller.App", {
            onInit: function () {   debugger
                this.byId("_IDGenToolHeader1").setVisible(false);
                // var oModel = new JSONModel({
                //     "selectedKey": "page2",
                //     "navigation": [
                //         {
                //             "title": "Overview",
                //             "icon": "sap-icon://collections-management",
                //             "expanded": true,
                //             "key": "root1"
                //         },
                //         {
                //             "title": "Master",
                //             "icon": "sap-icon://tree",
                //             "key": "root2"
                //         },
                //         {
                //             "title": "Groups",
                //             "icon": "sap-icon://company-view",
                //             "key": "root3"
                //         },
                //         {
                //             "title": "Rules",
                //             "icon": "sap-icon://activities",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "View All Rules/Notifications"
                //                 },
                //                 {
                //                     "title": "Assignment Rules"
                //                 },
                //                 {
                //                     "title": "Approved Rules"
                //                 },
                //                 {
                //                     "title": "Notification Rules"
                //                 }
                //             ]
                //         },
                //         {
                //             "title": "Invoice",
                //             "icon": "sap-icon://create",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "Email"
                //                 },
                //                 {
                //                     "title": "Create Invoice"
                //                 },
                //                 {
                //                     "title": "Invoice Cockpit"
                //                 },
                //                 {
                //                     "title": "My Inbox"
                //                 },
                //                 {
                //                     "title": "Track Invoices"
                //                 },
                //                 {
                //                     "title": "Comments Template"
                //                 },
                //                 {
                //                     "title": "Supplier Enquries"
                //                 },
                //                 {
                //                     "title": "Invoice Assignment"
                //                 }
                //             ]
                //         },
                //         {
                //             "title": "Purchase Order",
                //             "icon": "sap-icon://add-document",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "Email PO"
                //                 },
                //                 {
                //                     "title": "PO Cockpit"
                //                 },
                //                 {
                //                     "title": "Track PO"
                //                 }
                //             ]
                //         },
                //         {
                //             "title": "Supplier",
                //             "icon": "sap-icon://add-coursebook",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "Create Invoice"
                //                 },
                //                 {
                //                     "title": "Invoice Review"
                //                 }
                //             ]
                //         },
                //         {
                //             "title": "Reports",
                //             "icon": "sap-icon://print",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "Invoice Summary Report"
                //                 },
                //                 {
                //                     "title": "Liability Report"
                //                 },
                //                 {
                //                     "title": "Aging Report"
                //                 },
                //                 {
                //                     "title": "Key Process Analytics Report"
                //                 },
                //                 {
                //                     "title": "Productivity Report"
                //                 }
                //             ]
                //         },
                //         {
                //             "title": "Assign Role",
                //             "icon": "sap-icon://add",
                //             "expanded": false
                //         },
                //         {
                //             "title": "Setting",
                //             "icon": "sap-icon://action-settings",
                //             "expanded": false,
                //             "items": [
                //                 {
                //                     "title": "Parameters"
                //                 },
                //                 {
                //                     "title": "OCR Keyword"
                //                 }
                //             ]
                //         }
                //     ]
                // });

                debugger
                    // Show the BusyDialog before fetching data
                    var email = oUser.getEmail();
                    // var url = 'https://elipo_backend-shy-echidna-yp.cfapps.us20.hana.ondemand.com/dev/user?userid=einvoiceportal@gmail.com';
                    var url = 'https://elipo_backend-shy-echidna-yp.cfapps.us20.hana.ondemand.com/dev/user?userid='+email;
                    fetch(url)
                      .then(res => res.json())
                      .then(res => { 
                        // var dataModel = new sap.ui.model.json.JSONModel();
                        var data = res.body.tab_access;
                        var model = [];
                        var unique = [];
                        data.forEach(e => {
                            let i = e.itemTabs;
                            if (!unique.includes(e.tab_name)){
                            if (i.length === 0){
                                model.push({
                                "title":e.tab_name,
                                "id":e.tab_name,
                                "key":e.tab_name,
                                "icon":icons[e.tab_name],
                                "expanded":false
                                
                            });
                        }
                        else{
                            const v = [];
                            const sub =[];
                            i.forEach(a=>{
                                if (((e.tab_name === "Invoice") && (a.subtab_name === "PO Cockpit")) || ((e.tab_name === "Purchase") && (a.subtab_name === "My Inbox"))){

                                }
                                else{
                                if (!sub.includes(a.subtab_name)){
                                if (!(a.subtab_name === "Create Po")){
                                    v.push({
                                        "title":a.subtab_name,
                                        "key":a.subtab_name,
                                        "id":a.subtab_name
                                    });
                                    sub.push(a.subtab_name);
                                    }
                            }
                        }
                            });
                            model.push({
                                "title":e.tab_name,
                                "key":e.tab_name,
                                "id":e.tab_name,
                                "icon":icons[e.tab_name],
                                "items":v,
                                "expanded":false
                            });

                        }
                        unique.push(e.tab_name);

                    }
                            
                        });
                        var oModel = new JSONModel({
                            "selectedKey" : "page2",
                            "id":"navigation",
                            "navigation": model
                        });
                        // dataModel.setData(res.data);
                        mod = oModel;
                        this.getView().setModel(mod);
                        var oNavListItem = this.byId("Invoice");
			            oNavListItem.setVisible(!oNavListItem.getVisible());
                        this._setToggleButtonTooltip(!Device.system.desktop);
              
                        // Hide the BusyDialog after data is fetched
                        // this._busyDialog.close();
                      })
                      .catch(err => {
                        // In case of error, hide the loader and handle the error
                        // this._busyDialog.close();
                        console.error("Error fetching data:", err);
                      });
                
                // // var oModel = new JSONModel();
                // this.getView().setModel(oModel);
                // // var data = oModel.loadData("https://elipo_backend-shy-echidna-yp.cfapps.us20.hana.ondemand.com/dev/user?userid=einvoiceportal@gmail.com",null,false,"GET",null,false,null);
                // this._setToggleButtonTooltip(!Device.system.desktop);
            },
            initComponent: function (name) {debugger
               
                var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
                    usage: name,async:true,manifest:true
                });
                ocustomerDetailContainer.then(
                    function (ocustomerDetail) {debugger
                        this.byId("Overview").setComponent(ocustomerDetail);
                        this._customerDetailContainer = ocustomerDetail;
                    }.bind(this)
                );
                
            },


            onItemSelect: function (oEvent) {debugger
                this.getView().setModel(mod);
                // var oItem = oEvent.getParameter("item");
                var name = oEvent.oSource.mProperties.selectedKey;
                // this.initComponent(name);
                // this.getOwnerComponent()
				// .getRouter()
				// .navTo(name);
                var url = binding[name];
                

                // var oNavListItem = this.byId(name);
			    // oNavListItem.setVisible(!oNavListItem.getVisible())
                // var navig = this.byId("sideNavigationToggleButton")
                // var nav = '#'+na+'-display'
                // if (nav !== undefined){debugger
                    // var url = "https://provider-oxb1v9j3.launchpad.cfapps.us20.hana.ondemand.com/db2bb0c6-c662-4e18-8037-995ef7eacdd8.supplier221managed.supplier2nd-0.0.1/index.html";
                if (url === undefined){
                    var exx = oEvent.mParameters.item.oParent.mProperties.key;
                    name = exx + " " + name;
                    var url = binding[name];
                    
            }
            if (url === undefined){
                var ex = oEvent.mParameters.item.mProperties.text;
                var data = mod.oData.navigation;
                var n = data.length;
                // var nav = this.byId(name);
                // nav.setVisible(!nav.getVisible())
                // ex.expanded = true;
                for (var i = 0; i<n ; i++){
                    if(data[i].title === ex){
                        if (mod.oData.navigation[i].expanded === true){
                            mod.oData.navigation[i].expanded = false;
                            // var oModel = mod;
                            // this.getView().setModel(!mod.oData.navigation[i].expanded)
                    }
                    else{
                        mod.oData.navigation[i].expanded = true;
                        // this.getView().setModel(mod)

                    }
                }
                
            };
            // this.getView().setModel(mod);
        
        
            }
            else{
            $("#myIframe").attr("src",url);
            }
            this.getView().setModel(mod);
            },
    
            handleUserNamePress: function (event) {
                var oPopover = new Popover({
                    showHeader: false,
                    placement: PlacementType.Bottom,
                    content: [
                        new Button({
                            text: 'Feedback',
                            type: ButtonType.Transparent
                        }),
                        new Button({
                            text: 'Help',
                            type: ButtonType.Transparent
                        }),
                        new Button({
                            text: 'Logout',
                            type: ButtonType.Transparent
                        })
                    ]
                }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
    
                oPopover.openBy(event.getSource());
            },
    
            onSideNavButtonPress: function () {debugger
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
    
                this._setToggleButtonTooltip(bSideExpanded);
    
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
    
            _setToggleButtonTooltip: function (bLarge) {
                var oToggleButton = this.byId('sideNavigationToggleButton').setVisible(false);
                if (bLarge) {
                    oToggleButton.setTooltip('Large Size Navigation');
                } else {
                    oToggleButton.setTooltip('Small Size Navigation');
                }
            }
        });
    });
