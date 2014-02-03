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
		yummy = $('#yummy')[0];
	},

	cacheVars: function() {
		this.$froakie = $('#froakie');
		this.froakieLeft = this.$froakie.position().left;
		this.froakieRight = this.froakieLeft + this.$froakie.width();
		this.$pokepuffs = $('.pokepuff');
		this.count = 0;
		this.$message = $('#message')[0];
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
					yummy.play();
					context.count += 1;
					console.log(context.count);
					if (context.count == 3) {
						context.$froakie.removeClass('appear');
						context.$froakie.addClass('frogadier');
						$('#evolve')[0].play();
						yummy = $('#deepyummy')[0];
					}
					if (context.count == 6) {
						context.$froakie.removeClass('frogadier');
						context.$froakie.addClass('greninja');
						$('#evolve')[0].play();
						$('#frozen').animate({volume: 0}, 1000);
						$('#victory')[0].play();
						context.$message.style.visibility="visible";
					}
					// context.$froakie.effect('shake',50);
					// var stopMe = setInterval(function(){
					// 	context.$froakie.effect('shake',50),200});
					// setTimeout(function() {
					// 	clearInterval(stopMe);
					// },1000);
				}
			}
		});
		this.$froakie.draggable({
			stop: function(e,ui) {
				context.froakieLeft = ui.position.left;
				context.froakieRight = context.froakieLeft + context.$froakie.width();
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