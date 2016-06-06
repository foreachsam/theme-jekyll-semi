
//sidebar
!function(global, $) {
	$(document).ready(function() {
		var sidebar = {
			toggle: function(){
				$('.ui.sidebar')
				  .sidebar('toggle')
				;
			}
		};

		var btnSidebar = '.menu-btn';
		$(document).on('click', btnSidebar, function(evt) {
			evt.preventDefault();
			sidebar.toggle();
		});
	});
}(window, jQuery);


// not found
!function(global, $) {
	$(document).ready(function() {
		var pnlNotFound = '.pnl-not-found';
		$(pnlNotFound).show('slide');
	});
}(window, jQuery);
