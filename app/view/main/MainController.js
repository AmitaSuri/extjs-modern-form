/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('EMF.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	requires: [
		'EMF.view.main.LoadDialog'
	],

	alias: 'controller.main',

	//Stores references of reused Address component.
	refs: ['patientHomeAddress', 'patientWorkAddress', 'relativeHomeAddress', 'relativeWorkAddress'],
		
	//Show Dialog to enter patient ID.
	onView: function(btn) {
		var win = Ext.create({
			xtype: 'loaddialog',
			title: 'Dialog'
		});
		this.getView().add(win);
		win.show();
	},
	
	//Load data after a valid ID is entered.
	onIDSubmit: function(btn) {
		var me = this;
		
		//Hide the opened window before loading.
		me.lookup('loadDialog').hide();

		var id = me.getViewModel().get('id');
		var url = 'resources/data/';

		if (id == 1) {
			//Load Patient Record.
			me.loadPatientData(id, this);

			//Load Adresses.
			var refs = me.refs;
			for (var i = 0; i < 4; i++) {
				EMF.model.AddressModel.getProxy().url = url + refs[i] + '.json';
				me.loadAddressData(id, refs[i], this);
			};
		}
		//Make ViewModel id null so that it does not show in Dialog.
		me.getViewModel().set({
			id: ''
		});

		//To set the default focus on form load.
		me.lookup('patientRec').focus();

	},

	//Hide Dialog on the click of its Cancel button.
	onIDCancel: function(button) {
		this.getViewModel().set({
			id: ''
		});
		this.lookup('loadDialog').hide();
	},

	//Save the Form Field Changes, if valid.
	onSave: function(btn) {
		var me = this;

		//Get Patient Record
		var rec = me.getViewModel().get('info');
		var form = this.lookup('patientRec');

		//Check for validity and save.
		if (rec) {
			if (form.validate()) {
				Ext.Msg.alert('Validity', 'The record is valid. Look at network traffic to see what was sent.');

				//Save Patient Record.
				rec.save();

				//Save Addresses.
				var refs = me.refs;
				var url = 'resources/data/';
				for (var i = 0; i < 4; i++) {
					EMF.model.AddressModel.getProxy().url = url + refs[i] + '.json';
					var rec1 = me.lookup(refs[i]).getViewModel().get('addInfo');
					console.log(rec1);
					rec1.save();
				};
			} else {
				Ext.Msg.alert('Validity', 'The record isn\'t valid.');
				//this shows the first returned object as dirty
				console.log(rec.getValidation());
			}
		}
	},

	//Undo the Form Field Changes.
	onUndo: function(btn) {
		var me = this;
		var form = me.lookup('patientRec');
		form.clearErrors();

		//Undo the patient record.
		var rec = me.getViewModel().get('info');
		rec.reject();
		
		//Undo the addresses.
		var refs = me.refs;
		for (var i = 0; i < 4; i++) {
			var rec1 = me.lookup(refs[i]).getViewModel().get('addInfo');
			rec1.reject();
		}
	},

	//Method to load the patient record.
	//Called by onIDSubmit().
	loadPatientData: function(id, scope) {
		EMF.model.PatientModel.load(id, {
			scope: scope,

			failure: function(record, operation) {
				Ext.Msg.alert('Unable to load Record');
			},

			success: function(record, operation) {
				this.getViewModel().set({
					info: record
				});
			}
		});
	},

	//Method to load the relative record.
	//Called by onIDSubmit().
	loadAddressData: function(id, ref, scope) {
		EMF.model.AddressModel.load(id, {
			scope: scope,

			failure: function(record, operation) {
				Ext.Msg.alert('Unable to load Record');
			},

			success: function(record, operation) {
				this.lookup(ref).getViewModel().set({
					addInfo: record
				});
			}
		});
	},

	//Custom validator for age field.
	/*checkAge: function(value) {
		var birthDate = this.getViewModel().get('info.dob');
		var today = new Date();
		var ageInYr = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			ageInYr--;
		}
		if (ageInYr === value) {
			return true;
		} else {
			return "Date must match the date of birth."
		}
	}*/
});