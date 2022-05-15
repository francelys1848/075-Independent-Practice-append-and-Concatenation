$(".to-pack-button").click(function(){

let input= $(".pack-input").val();

$(".packinglist").append("<li>" + input + "</li>");
    
});

