
$('.menu li').bind('mouseover', openSubMenu);
$('.menu li').bind('mouseout', closeSubMenu);

function openSubMenu() {
	$(this).find('ul').css('display', 'block');
}

function closeSubMenu() {
	$(this).find('ul').css('display', 'none');
}