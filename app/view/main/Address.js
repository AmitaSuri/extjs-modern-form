Ext.define('EMF.view.main.Address', {
    extend: 'Ext.field.Container',
    xtype: 'address',

    config: {
        phoneLbl: 'Phone',
        phone: 'phone',
        addressLine1: 'addLine1',
        addressLine2: 'addLine2',
        zipCode: 'zip',
        city: 'city',
        state: 'state',
    },

    layout: 'vbox',

    defaultType: 'textfield',

    defaults: {
        errorTarget: 'side'
    },

    initConfig: function(instanceConfig) {

        //console.log('this: ', this, instanceConfig);

        instanceConfig.items = [{
            width: '300',
            name: this.initialConfig.phone,
            label: this.initialConfig.phoneLbl,
            placeholder: 'required',
            bind: {
                value: '{addInfo.phone}'
            }
        }, {
            name: this.initialConfig.addressLine1,
            label: 'Address Line 1',
            placeholder: 'required',
            bind: {
                value: '{addInfo.addressLine1}'
            }
        }, {
            name: this.initialConfig.addressLine2,
            label: 'Address Line 2',
            bind: {
                value: '{addInfo.addressLine2}'
            }
        }, {
            xtype: 'containerfield',
            defaults: {
                errorTarget: 'qtip',
                clearable: false
            },
            items: [{
                xtype: 'numberfield',
                label: 'ZIP',
                flex: 1,
                name: this.initialConfig.zipCode,
                placeholder: '5 digits',
                bind: {
                    value: '{addInfo.zipCode}'
                }
            }, {
                label: 'City',
                labelWidth: 41,
                width: 195,
                name: this.initialConfig.city,
                autoCapitalize: true,
                bind: {
                    value: '{addInfo.city}'
                }
            }, {
                label: 'State',
                flex: 1,
                labelWidth: 55,
                name: this.initialConfig.state,
                autoCapitalize: true,
                bind: {
                    value: '{addInfo.state}'
                }
            }]
        }];

        this.callParent([instanceConfig]);
    }
});