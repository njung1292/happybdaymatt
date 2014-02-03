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
		this.froakieLeft = this.$froakie.position().left;
		this.froakieRight = this.froakieLeft + this.$froakie.width();
		this.$pokepuffs = $('.pokepuff');
	},

	bindEvents: function() {
	},

	initDraggable: function() {
		var context = this;
		this.$pokepuffs.draggable({
			stop: function(e, ui) {
				var ppLeft = ui.offset.left;
				var ppRight = ppLeft + 50;

				if ((ppLeft >= context.froakieLeft)
					&& (ppRight <= context.froakieRight)) {
					var ppId = ui.helper.context.id;
					$('#' + ppId).remove();
					$('#yummy')[0].play();
					var stopMe = setInterval(function(){
						context.$froakie.stop(true,true).animate({left: '+=10'}, 100, function(){
      						$(this).stop(true,true).animate({left: '-=10'},100); 
      					});
					}, 200);
					setTimeout(function() {
						clearInterval(stopMe);
					},500);
				}
			}
		});
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