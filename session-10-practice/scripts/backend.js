$(document).ready(function () {
});
$('#myForm').submit(function(e) {
    e.preventDefault();
    debugger;
    var input = $('#myForm > *');
    console.log(input.length-1)


    var values = [];
    var form_obj = {}
    for( var i=0;i< input.length-1; i++) {
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
    console.log(existing_form);


});