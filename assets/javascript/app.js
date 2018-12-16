$( document ).ready(function() {
//Animals Array
Topics=[
    "Dog",
    "Cat",
    "Rabbit",
    "Hamster",
    "Chicken",
    "Frog",
    "Turtle",
    "Skunk",
    "Bird"
];



var newText="";
var i=0;
var queryurl="";


//API Key
var APIvalue="RIMwrYvXc0dkhKYzON01zcvaeucMiCDC";

var baseurl = "https://api.giphy.com/v1/gifs/search?api_key=RIMwrYvXc0dkhKYzON01zcvaeucMiCDC&limit=10&rating!=pg-13&q="


//Create Buttons with Animal Names  
function CreateBtn(){
        queryurl="";
        $('.buttons').empty();
        $('.btns').empty();
    
        for(i=0;i<Topics.length;i++)
        {
            var Btn = $("<button>");
            Btn.attr("id","Btn-"+i);
            Btn.addClass('btns');
            Btn.addClass("btn btn-primary");
            Btn.text(Topics[i]);
            $('.buttons').append(Btn);
            

        }
    
    
}

//function to load Gif (from Giphy) on click of Animal button 
function loadGif()
    {
        
        btnId=$(this).attr("id");
        btnVal=$(this).text();
        queryurl=baseurl+btnVal;
        $.ajax({
            url: queryurl,
            method: 'GET'
          }).done(function(result) {
            console.log(result);
           
            //clear previous content
            $("#imgContainer").empty();

            for(var i=0;i<result.data.length;i++)
            {
                //Create new div for gif
                var newGifdiv=$("<div>");
                newGifdiv.addClass("gifDiv");
                //gif rating
                var gifRating=$("<p>");
                gifRating.text("Rating: "+result.data[i].rating);
                newGifdiv.append(gifRating);
                //gif Title
                var newtitle=(result.data[i].title).split('GIF')[0];
                var gifTitle=$("<p>");
                gifTitle.text("Title: "+newtitle);
                newGifdiv.append(gifTitle);
                //gif image
                var gifImg=$("<img>");
                gifImg.addClass("image");
                gifImg.attr("src",result.data[i].images.fixed_width_still.url);
                gifImg.attr("data-animate",result.data[i].images.fixed_width.url);
                gifImg.attr("data-still", result.data[i].images.fixed_width_still.url);
                gifImg.attr("data-state", "still");
                newGifdiv.append(gifImg);
                $("#imgContainer").prepend(newGifdiv);
                
            
            }
            
        });
    }


$(".submitBtn").on("click",function()
{
 
    event.preventDefault();
    newText=$("#animal").val().trim();
    
    // Create button only if no input or input already in Topics Array
    if((newText!=="")&&(!(Topics.includes(newText))))
    {
    Topics.push(newText);
    CreateBtn();
    }
         
});



//functions called on form load
CreateBtn();
$(document).on("click", ".btns", loadGif);
$(document).on("click", ".image", function()
 {

    var state = $(this).attr("data-state");
    console.log(state);
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});
});