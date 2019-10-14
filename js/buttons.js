function react()
{
	var buttons = document.getElementsByClassName("buttons");
	for (var i = 0; i < buttons.length;i++)
	{
		buttons[i].onclick = change_id;
	}
}
function change_id()
{
	var buttons = document.getElementsByClassName("buttons");
	var clicked_button = document.getElementById("clicked");
	
	var aside_texts = document.getElementsByTagName("span");
	var aside_activated_text = document.getElementById("active");
	aside_activated_text.id="";
	var button_choosen_data = this.dataset.textId;
	
	for (var i = 0; i < aside_texts.length;i++)
	{
		if (aside_texts[i].dataset.id == button_choosen_data) 
		{
			aside_texts[i].id = "active";
			break;
		}	
	}
	
	this.id = "clicked";
	if (clicked_button != null && this != clicked_button) 
	{
		clicked_button.id = "";
	}
	return;
	
}