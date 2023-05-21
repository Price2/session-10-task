$(document).ready(function () {
});
$('#myForm').submit(function(e) {
    e.preventDefault();
    debugger;
    var input = $('#myForm > *');
    console.log(input.length-1)


    var values = {};
    for( var i=0;i< input.length-1; i++) {
        console.log(input[i].name)
        values[input[i].name] = $(input[i]).val();
    }

    localStorage.setItem('form-submission', JSON.stringify(values));


});