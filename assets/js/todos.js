// Check off specific todos by clicking
$('ul').on("click", "li", function(event) {
	$(this).toggleClass("completed");
	event.stopPropagation();
});

//click on X to delete todo
$('ul').on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add a todo item
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add it to ul
		$('ul').append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
		//clear the input
		$(this).val("");
	}
});

$("#toggle-form").click(function() {
	$("input[type='text']").fadeToggle();
});