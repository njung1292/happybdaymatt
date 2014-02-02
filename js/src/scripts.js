var SITE = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');
		this.cacheVars();
		this.bindEvents();
	},

	cacheVars: function() {

	},

	bindEvents: function() {
		this.$body.on('click', this.functionName.bind(this));
	},

	functionName: function(e) {
		var $blah = $(e.currentTarget);
		//stuff
		e.preventDefault();
	},
}

SITE.init();

// SITE = {
// 	init: function() {
// 		this.$document = $(window.document);
// 		this.$body = $('body');
// 		// this.$pokepuffs = $('#pokepuffs');
// 		$('#draggable').draggable();
// 	}
// }