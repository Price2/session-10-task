var storage_obj = JSON.parse(localStorage.getItem('form'));


$(document).ready(function () {

    $("<hr/>").insertAfter("#insertAfterCol").css("display","none");
    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() <= 773) {
           $("hr").css({"display": "block", "border":"1px solid gray"})
         }
         else{
            $("hr").css({"display": "none"})
         }
    });

    
    if (storage_obj != null)
    {
        for (var i = 0; i< storage_obj.length; i++)
        {
            var temp = `<div class="col-12 col-md-3 col-lg-3 mb-3">
            <div class="card upper-border card-color-toggle-dark"">
                <div class="card-body text-center">
                  <h5 class="card-title py-3" style="color:#666d90">${insertIcon(storage_obj[i].media_type)}${storage_obj[i].username}</h5>
                  <h6 class="card-subtitle mb-2 display-5 fw-bold text-light">${storage_obj[i].number}</h6>
                  <p class="card-text" style="color:#666d90; letter-spacing: 5px">${storage_obj[i].bottom_text}</p>
                  <p class="card-text mt-3 fw-bold" style="color:#38a292;"><i class="fa-solid fa-caret-up align-middle m-2" style="color:#38a292"></i>12 today</p>
                </div>
              </div>
        </div>`
        
        $("#cards-wrapper").append(temp);
        }
    }
});


$("#test").click(function (e) { 
    $("body").toggleClass("body-dark text-light")
    $("#background-overlay").toggleClass("background-shadow background-light")
    $(".card").toggleClass("card-color-toggle-dark card-color-toggle-light");
    $(".text-light, .text-dark").toggleClass("text-light text-dark");
    
});

function insertIcon(icon_type){
if(icon_type == 'facebook'){
    icon_type = `<i class="fa-brands fa-square-facebook fa-lg m-2" style="color: #1b8ef6;"></i>`;
}
else if(icon_type == 'instagram'){
    icon_type = `<i class="fa-brands fa-instagram fa-lg m-2" style="color: #f1a44b;"></i>`;
}
else if(icon_type == 'twitter'){
    icon_type = `<i class="fa-brands fa-twitter fa-lg m-2" style="color: #005eff;"></i>`
}

else{
    icon_type =`<i class="fa-brands fa-youtube fa-lg m-2" style="color: #ff0000"></i>`;
}

return icon_type;
}
