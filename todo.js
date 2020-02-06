//Click li to gray and cross out
$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});

//Click X to delete and fade out
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
  	$(this).remove();
  });
  event.stopPropogation();
});

//Enter new todo
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
  	//Grabs text from input after enter is hit and stores in var
  	var todoText = $(this).val();
  	$(this).val("");
  	//create a new li and add to ul
  	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText +"</li>")
  }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})

  