var opened = localStorage.opened;
if (opened !== "true") {
    //localStorage.opened = true;
    $("body").on("contextmenu",function(){
       return false;
    }); 
    $(document).keydown(function(event){
        if(event.keyCode==123){
            return false;
        } else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
            return false;  //Prevent from ctrl+shift+i
        }
    });
} else {
    $("#hint").css("color","black").css("display","block");
}