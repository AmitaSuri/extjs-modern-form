/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('EMF.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'EMF',
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: '',
        info: '',
        addInfo: ''
    },

    formulas: {
        checkAge: {
            bind: '{info.dob}',
            get: function(dob) {
                var today = new Date();
                var ageInYr = today.getFullYear() - dob.getFullYear();
                var m = today.getMonth() - dob.getMonth();

                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    ageInYr--;
                }
                return ageInYr;
            }
        }
    },

    stores: {
        gender: {
            fields: ['sex'],
            data: [{
                "sex": 'Male'
            }, {
                "sex": 'Female'
            }]
        },

        marital: {
            fields: ['status'],
            data: [{
                "status": 'Single'
            }, {
                "status": 'Married'
            }]
        },

        relation: {
            fields: ['name'],
            data: [{
                "name": 'Father'
            }, {
                "name": 'Mother'
            }, {
                "name": 'Wife'
            }, {
                "name": 'Son'
            }, {
                "name": 'Daughter'
            }, {
                "name": 'Aunt'
            }, {
                "name": 'Uncle'
            }, {
                "name": 'Other'
            }]
        }
    }


});