Ext.define('EMF.view.main.TopToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'top-toolbar',
    
    items: [{
        text: 'View',
        iconCls: 'x-fa fa-bullseye',
        tooltip: 'View Patient Record',
        handler: 'onView'
    }, {
        text: 'Save',
        iconCls: 'x-fa fa-save',
        tooltip: 'Save Patient Record',
        handler: 'onSave'
    }, {
        text: 'Undo',
        iconCls: 'x-fa fa-undo',
        tooltip: 'Reset Patient Record',
        handler: 'onUndo'
    }]
});