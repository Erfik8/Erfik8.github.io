window.onscroll = function(){display_menu();};
function display_menu()
{
	var menu_nav = document.getElementById("menu_nav");
	var menu_nav_height = parseInt(window.getComputedStyle(menu_nav).getPropertyValue("height"));
	var header = document.getElementById("header");
	var header_height = parseInt(window.getComputedStyle(header).getPropertyValue("height"));
	
	if (document.body.scrollTop > header_height/2 || document.documentElement.scrollTop > header_height/2 )
	{
		menu_nav.style.top = "0px"
	}
	else
	{
		menu_nav.style.top = -1*menu_nav_height + "px";
	}
	
	
	
}

function show()
{
	var menu_div = document.getElementById("menu_div");
	
	var menu_button = document.getElementsByClassName("menu_start");
	
	var menu_button_length = menu_button.length;
	
	
	for (var i = 0;i<menu_button_length;i++)
		menu_button[i].style.visibility = "hidden";
	
	menu_div.style.setProperty("width","");
	
	
	
}

function hide()
{
	var menu_div = document.getElementById("menu_div");
	
	
	var menu_button = document.getElementsByClassName("menu_start");
	
	var menu_button_length = menu_button.length;
	for (var i = 0;i<menu_button_length;i++)
		menu_button[i].style.visibility = "visible";
	
	menu_div.style.setProperty("width","0px");
	
	
	
	
}
