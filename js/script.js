$('.menu-btn').on('click', function(e) {
	e.preverntDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu_nav').toggleClass('menu_nav_active');
})