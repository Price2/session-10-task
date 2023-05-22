$(document).ready(function () {
});
$('#myForm').submit(function(e) {
    // debugger;
    var input = $('input, select');


    var values = [];
    var form_obj = {}
    for( var i=0;i< input.length; i++) {
        console.log(input[i].name)
        form_obj[input[i].name] = $(input[i]).val();
    }    
    if(localStorage.getItem('form') == null)
    {
        values.push(form_obj);
        localStorage.setItem('form', JSON.stringify(values));
    }
    else{
       var existing_form = JSON.parse(localStorage.getItem('form'));
       existing_form.push(form_obj);
       localStorage.setItem('form', JSON.stringify(existing_form));
    }


});
