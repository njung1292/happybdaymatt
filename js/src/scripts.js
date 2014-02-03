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
	},

	bindEvents: function() {
	},

	flashtext: function() {
		setInterval(function() {
			$('#message')[0].style.color = 'red';
			$('#message')[0].style.color = 'yellow';
			$('#message')[0].style.color = 'magenta';
			$('#message')[0].style.color = 'green';
			$('#message')[0].style.color = 'purple';
			$('#message')[0].style.color = 'cyan';
			$('#message')[0].style.color = 'orange';
		},200);
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
						$('#message')[0].style.visibility="visible";
						context.flashtext();
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
				context.froakieLeft = context.$froakie.position().left;
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