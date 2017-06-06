Ext.define('EMF.model.PatientModel', {
    extend: 'Ext.data.Model',

    //Loads custom validator class.
    requires: ['EMF.util.validators.Name'],

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'firstName',
        validators: [{
            type: 'presence'
        }, {
            type: 'name'
        }]
    }, {
        name: 'middleName',
        validators: 'name'
    }, {
        name: 'lastName',
        validators: [{
            type: 'presence'
        }, {
            type: 'name'
        }]
    }, {
        name: 'ssn',
        type: 'string',
        validators: [{
            type: 'presence',
            message: 'Required. Enter in the given format.'
        }]
    }, {
        name: 'employer',
        validators: [{
            type: 'presence'
        }]
    }, {
        name: 'dob',
        type: 'date',
        dateFormat: 'm/d/Y',
        validators: [{
            type: 'presence'
        }]
    }, {
        name: 'age',
        type: 'int',
    }, {
        name: 'gender'
    }, {
        name: 'maritalStatus'
    }, {
        name: 'dl',
        type: 'string',
        validators: [{
            type: 'presence'
        }, {
            type: 'format',
            matcher: /^[a-zA-Z0-9]*$/,
            message: 'Enter letters or digits only.'
        }]
    }, {
        name: 'refDoctor',
        validators: [{
            type: 'presence'
        }]
    }, {
        name: 'relationshipToPatient'
    }, {
        name: 'relativeFirstName',
        validators: [{
            type: 'presence'
        }, {
            type: 'name'
        }]
    }, {
        name: 'relativeMiddleName',
        validators: 'name'
    }, {
        name: 'relativeLastName',
        validators: [{
            type: 'presence'
        }, {
            type: 'name'
        }]
    }, {
        name: 'relativeDob',
        type: 'date',
        dateFormat: 'm/d/Y',
        validators: [{
            type: 'presence'
        }]
    }, {
        name: 'relativeGender'
    }, {
        name: 'relativeSsn',
        validators: [{
            type: 'presence',
            message: 'Required. Enter in the given format.'
        }]
    }, {
        name: 'relativeDl',
        validators: [{
            type: 'presence'
        }, {
            type: 'format',
            matcher: /^[a-zA-Z0-9]*$/,
            message: 'Enter letters or digits only.'
        }]
    }],

    proxy: {
        type: 'ajax',
        url: 'resources/data/PatientInfo.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});