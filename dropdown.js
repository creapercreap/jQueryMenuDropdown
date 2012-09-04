$(document).ready(function() {

function menu_hide(){
	$('#menu ul ul').hide();
};
menu_hide();

	$('#menu ul li').hover(
		function() {
			$(this).find('ul:first').slideDown();
		},
		function() {
			$(this).find('ul:first').slideUp();
		}
	);
});