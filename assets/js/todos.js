$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

var arr=[];
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText= $(this).val();
		$(this).val("");
		
		arr.push(todoText);
		localStorage.setItem("arr",arr);

	}
});

 var htmlAppend = localStorage.getItem("arr");
    if (htmlAppend) {
    	for(var i=0; i<htmlAppend.length;i++)
    		{
    			$("ul").append("<li><span><i class='fa fa-trash'></i></span>" +htmlAppend[i] +"</li>");
    		}
        
    }

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})