Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
	launch: function() {
		console.log("My First rally app");
		this._loadData();
	},
	
	_loadData: function() {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					console.log('got data!', myStore, myData, success);
					this._loadGrid(myStore);
				},
				scope:this
			},
			fetch: ['FormattedID','Name', 'ScheduleState','Owner']
		});
	},
	
	_loadGrid: function(myStore) {
		var myGrid = Ext.create('Rally.ui.grid.Grid',{
			store:myStore,
			columnCfgs: [
				'FormattedID','Name','Owner'
			]
		});
		console.log('my grid', myGrid);
		this.add(myGrid);
		console.log('what is this?', this);
	}
});
