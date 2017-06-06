Ext.define('EMF.view.main.LoadDialog', {
	extend: 'Ext.Dialog',

	xtype: 'loaddialog',

	width: 300,
	height: 150,
	resizable: false,
	bodyPadding: 8,
	modal: true,

	layout: 'fit',

	reference: 'loadDialog',

	items: [{
		xtype: 'formpanel',
		buttonAlign: 'right',
		items: [{
			xtype: 'textfield',
			label: 'Patient ID',
			name: 'recId',
			placeholder: 'Enter ID',
			labelWidth: 70,
			labelTextAlign: 'left',
			errorTarget: 'side',
			validators: {
				type: 'range',
				min: 1,
				max: 1,
				bothMessage: "There's no backend code. Enter 1 only."
			},
			bind: {
				value: '{id}'
			}
		}],
		buttons: [{
			text: 'Submit',
			handler: 'onIDSubmit'
		}, {
			text: 'Cancel',
			handler: 'onIDCancel'
		}]
	}]
});