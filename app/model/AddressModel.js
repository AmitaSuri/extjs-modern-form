Ext.define('EMF.model.AddressModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'phone',
        type: 'string',
        validators: [{
            type: 'presence'
        }, {
            type: 'phone',
            matcher: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            message: 'Enter a valid phone number.'
        }]
    }, {
        name: 'addressLine1',
        validators: 'presence',
    }, {
        name: 'addressLine2'
    }, {
        name: 'zipCode',
        type: 'int',
        validators: [{
            type: 'presence'
        }, {
            type: 'format',
            matcher: /^[1-9]\d{4}$/,
            message: 'Zip code is a positive 5 digit number.'
        }]
    }, {
        name: 'city',
        validators: [{
            type: 'presence',
        }, {
            type: 'format',
            matcher: /^[a-zA-Z\s]*$/,
            message: 'Enter letters and spaces only.'
        }]
    }, {
        name: 'state',
        validators: [{
            type: 'presence'
        }, {
            type: 'format',
            matcher: /^[a-zA-Z\s]*$/,
            message: 'Enter letters and spaces only.'
        }]
    }],
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});