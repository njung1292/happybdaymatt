var SITE = {
	init: function() {
		this.$document = $(window.document);
		this.$body = $('body');
	
		this.cacheVars();
		this.bindEvents();

		var context = this;
		setTimeout(function() {
			context.$froakie.addClass('appear');
		});

		this.initDraggable();
	},

	cacheVars: function() {
		this.$froakie = $('#froakie');
		this.$pokepuffs = $('.pokepuff');
	},

	bindEvents: function() {
		this.$body.on('click', this.functionName.bind(this));
	},

	initDraggable: function() {
		this.$pokepuffs.draggable();
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