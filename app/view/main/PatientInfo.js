Ext.define('EMF.view.main.PatientInfo', {
    extend: 'Ext.field.Panel',

    requires: [
        'EMF.model.PatientModel'
    ],

    xtype: 'patient-info',

    reference: 'patientRec',

    title: 'Patient Information',

    layout: 'vbox',

    //To set the focus on child with this itemId.
    defaultFocus: '#me',

    //Set defaults for immediate child items
    defaults: {
        xtype: 'textfield',
        errorTarget: 'under'
    },

    //bind form fields to model field validators 
    modelValidation: true,

    items: [{
        xtype: 'top-toolbar',
        docked: 'top'
    }, {
        xtype: 'containerfield',
        label: 'Name',
        align: 'end',
        required: true,
        defaults: {
            errorTarget: 'qtip'
        },

        items: [{
            xtype: 'textfield',
            width: '200',
            //A selector to be used for default focus.
            itemId: 'me',
            name: 'firstName',
            autoCapitalize: true,
            label: 'First',
            labelAlign: 'placeholder', //'top',
            labelTextAlign: 'left',
            placeholder: 'required',
            bind: {
                value: '{info.firstName}'
            }
        }, {
            xtype: 'textfield',
            width: '80',
            name: 'middleName',
            autoCapitalize: true,
            label: 'Middle',
            labelAlign: 'placeholder', //'top',
            labelTextAlign: 'left',
            required: false,
            bind: {
                value: '{info.middleName}'
            }
        }, {
            xtype: 'textfield',
            width: '200',
            name: 'lastName',
            autoCapitalize: true,
            label: 'Last',
            labelAlign: 'placeholder', //top',
            labelTextAlign: 'left',
            placeholder: 'required',
            bind: {
                value: '{info.lastName}'
            }
        }]
    }, {
        xtype: 'containerfield',
        defaults: {
            errorTarget: 'side'
        },
        items: [{
            xtype: 'textfield',
            name: 'ssn',
            label: 'SSN',
            width: 300,
            placeholder: '999-99-9999',
            inputMask: '999-99-9999',
            bind: {
                value: '{info.ssn}'
            }
        }, {
            xtype: 'component',
            flex: 1
        }, {
            xtype: 'textfield',
            name: 'employer',
            label: 'Employer',
            flex: 1,
            placeholder: 'required',
            validators: {
                type: 'length',
                max: 15,
                maxOnlyMessage: 'Maximun characters 100'
            },
            bind: {
                value: '{info.employer}'
            }
        }]

    }, {
        xtype: 'containerfield',
        items: [{
            xtype: 'containerfield',
            width: 300,
            layout: 'vbox',
            defaults: {
                errorTarget: 'qtip'
            },
            items: [{
                xtype: 'datefield',
                name: 'dob',
                label: 'DOB',
                editable: false,
                bind: {
                    value: '{info.dob}'
                }
            }, {
                type: 'numberfield',
                name: 'age',
                label: 'Age',
                editable: false,
                clearable: false,
                //minValue: 1,
                //maxValue: 100,
                bind: {
                    value: '{checkAge}'
                }
                /*validators: {
                     type: 'controller',
                     fn: 'checkAge'
                 }]*/
            }, {
                xtype: 'combobox',
                name: 'gender',
                label: 'Gender',
                displayField: 'sex',
                valueField: 'sex',
                editable: false,
                bind: {
                    store: '{gender}',
                    value: '{info.gender}'
                }
            }, {
                xtype: 'combobox',
                name: 'maritalStatus',
                label: 'Marital Status',
                displayField: 'status',
                valueField: 'status',
                editable: false,
                bind: {
                    store: '{marital}',
                    value: '{info.maritalStatus}'
                }
            }]
        }, {
            xtype: 'address',
            phoneLbl: 'Home Phone',
            phone: 'homePhone',
            addressLine1: 'homeAddLine1',
            addressLine2: 'homeAddLine2',
            zipCode: 'homeZipCode',
            city: 'homeCity',
            state: 'homeState',
            flex: 1,
            reference: 'patientHomeAddress',
            viewModel: {
                data: {
                    addInfo: ''
                }
            }
        }, {
            xtype: 'address',
            phoneLbl: 'Work Phone',
            phone: 'workPhone',
            addressLine1: 'workAddLine1',
            addressLine2: 'workAddLine2',
            zipCode: 'workZipCode',
            city: 'workCity',
            state: 'workState',
            flex: 1,
            reference: 'patientWorkAddress',
            viewModel: {
                data: {
                    addInfo: ''
                }
            },

        }]
    }, {
        xtype: 'containerfield',
        items: [{
            xtype: 'textfield',
            name: 'dl',
            label: 'DL #',
            width: 300,
            placeholder: 'a-z A-Z 0-9 only',
            bind: {
                value: '{info.dl}'
            }

        }, {
            xtype: 'textfield',
            name: 'refDoctor',
            autoCapitalize: true,
            label: 'Referring Doctor',
            labelWidth: 210,
            flex: 1,
            placeholder: 'required',
            bind: {
                value: '{info.refDoctor}'
            }
        }, {
            xtype: 'component',
            flex: 1
        }]
    }, {
        xtype: 'tabpanel',
        height: 400,
        padding: '10 0 0 0',
        items: [{
            title: 'Responsible Party/Spouse',
            xtype: 'fieldpanel',
            items: [{
                xtype: 'combobox',
                name: 'relationshipToPatient',
                label: 'Relationship to Patient',
                labelWidth: 200,
                width: 400,
                displayField: 'name',
                valueField: 'name',
                editable: false,
                bind: {
                    store: '{relation}',
                    value: '{info.relationshipToPatient}'
                },
            }, {
                xtype: 'containerfield',
                label: 'Name',
                defaults: {
                    errorTarget: 'qtip',
                    labelAlign: 'placeholder'
                },
                items: [{
                    xtype: 'textfield',
                    width: '200',
                    name: 'relativeFirstName',
                    autoCapitalize: true,
                    label: 'First',
                    //labelAlign: 'top',
                    labelTextAlign: 'left',
                    placeholder: 'required',
                    bind: {
                        value: '{info.relativeFirstName}'
                    }
                }, {
                    xtype: 'textfield',
                    width: '80',
                    name: 'relativeMiddleName',
                    autoCapitalize: true,
                    label: 'Middle',
                    //labelAlign: 'top',
                    labelTextAlign: 'left',
                    required: false,
                    placeholder: 'required',
                    bind: {
                        value: '{info.relativeMiddleName}'
                    }
                }, {
                    xtype: 'textfield',
                    width: '200',
                    name: 'relativeLastName',
                    autoCapitalize: true,
                    label: 'Last',
                    //labelAlign: 'top',
                    labelTextAlign: 'left',
                    placeholder: 'required',
                    bind: {
                        value: '{info.relativeLastName}'
                    }
                }]
            }, {
                xtype: 'containerfield',
                items: [{
                    xtype: 'containerfield',
                    width: 300,
                    layout: 'vbox',
                    defaults: {
                        errorTarget: 'side'
                    },
                    items: [{
                        xtype: 'datefield',
                        name: 'relativeDob',
                        label: 'DOB',
                        editable: false,
                        bind: {
                            value: '{info.relativeDob}'
                        }
                    }, {
                        xtype: 'combobox',
                        name: 'relativeGender',
                        label: 'Gender',
                        displayField: 'sex',
                        valueField: 'sex',
                        editable: false,
                        bind: {
                            store: '{gender}',
                            value: '{info.relativeGender}'
                        }
                    }, {
                        xtype: 'textfield',
                        name: 'relativeSsn',
                        label: 'SSN',
                        width: 300,
                        placeholder: '999-99-9999',
                        inputMask: '999-99-9999',
                        bind: {
                            value: '{info.relativeSsn}'
                        }
                    }, {
                        xtype: 'textfield',
                        name: 'relativeDl',
                        label: 'DL #',
                        placeholder: 'a-z A-Z 0-9 only',
                        bind: {
                            value: '{info.relativeDl}'
                        }
                    }]
                }, {
                    xtype: 'address',
                    phoneLbl: 'Home Phone',
                    phone: 'relativeHomePhone',
                    addressLine1: 'relativeHomeAddLine1',
                    addressLine2: 'relativeHomeAddLine2',
                    zipCode: 'relativeHomeZipCode',
                    city: 'relativeHomeCity',
                    state: 'relativeHomeState',
                    flex: 1,
                    reference: 'relativeHomeAddress',
                    viewModel: {
                        data: {
                            addInfo: ''
                        }
                    }
                }, {
                    xtype: 'address',
                    phoneLbl: 'Work Phone',
                    phone: 'relativeWorkPhone',
                    addressLine1: 'relativeWorkAddLine1',
                    addressLine2: 'relativeWorkAddLine2',
                    zipCode: 'relativeWorkZipCode',
                    state: 'relativeWorkState',
                    flex: 1,
                    reference: 'relativeWorkAddress',
                    viewModel: {
                        data: {
                            addInfo: ''
                        }
                    }
                }]
            }]
        }, {
            title: 'Primary Insurance',
            html: "This shall capture patient's primary insurance detail."
        }, {
            title: 'Secondary Insurance',
            html: "This shall capture patient's secondary insurance detail."
        }]
    }]
});