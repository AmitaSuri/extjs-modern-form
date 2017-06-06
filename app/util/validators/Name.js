Ext.define('EMF.util.validators.Name', {
    extend: 'Ext.data.validator.Validator',
    alias: 'data.validator.name',
    message: 'Enter letters only.',
    validate: function(value) {
    	return /^[a-zA-Z]*$/.test(value)? true : this.message;
    }
});
