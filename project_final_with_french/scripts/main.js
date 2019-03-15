// JavaScript source code
// display choosen item in dropdpwn header boot strap 

'use strict';
$(document).ready(function () 
{
    // filter cards 
    if (sessionStorage.length > 0)
     {
    var x= sessionStorage.getItem("id");
    sessionStorage.clear();  
    filterSelection(x);
     }
    
    //show chosen select in text 
    $(".dropdown-menu a").click(function () {
        $('.album').find(".card-text").parent().parent().css('display', 'inline');

        $(this).parents(".dropdown").find('.btn').html($(this).text().trim());
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
      
        $('.album').find(".card-text:not(:contains(" + $(this).text().toLowerCase().trim() + "))").parent().parent().css('display', 'none');
    });
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    console.log(slider.value);

   
    slider.oninput = function ()
    {     
        output.innerHTML = this.value;
        $('.album').find(".card-text").parent().parent().css('display', 'inline');
        $('.album').find(".card-text:not(:contains(" + slider.value.trim() + "))").parent().parent().css('display', 'none');
    }

});
function filterSelection(c)
{
    $('.album').find(".card-text").parent().parent().css('display', 'inline');
    $('.album').find(".card-text:not(:contains(" + c.toLowerCase().trim() + "))").parent().parent().css('display', 'none');
}

function getsend(c)
{

    sessionStorage.setItem("id", c);

}
