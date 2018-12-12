//Animals Array
Topics=[
    "Dog",
    "Cat",
    "Rabit",
    "Hamster",
    "Chicken",
    "Frog",
    "Turtle",
    "Skunk",
    "Bird"
];


var intervalId;
var newText="";
var i=0;
var queryurl;

//API Key
var APIvalue="RIMwrYvXc0dkhKYzON01zcvaeucMiCDC";

var baseurl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=3&q="


//Create Buttons with Animal Names  
function CreateBtn(){
    $('.buttons').empty();
    $('.btns').empty();
    
        for(i=0;i<Topics.length;i++)
        {
            var Btn = $("<button>");
            Btn.attr("id","Btn-"+i);
            Btn.addClass('btns');
            Btn.text(Topics[i]);
            console.log(Topics[i]);
            console.log(Topics.length);
            $('.buttons').append(Btn);
        }
    
    
}

//function to load Gif (from Giphy) on click of Animal button 
function loadGif()
    {
        $.ajax({
            url: queryurl,
            method: 'GET'
          }).done(function(result) {
            console.log(result);
            $("#gif").prepend("<img src="+result.data.images.downsized_still.url+">");
        });
    }

CreateBtn();
$(".submitBtn").on("click",function()
{
 
    newText=$("#animal").val().trim();
    
    // Create button only if no input or input already in Topics Array
    if((newText!=="")&&(!(Topics.includes(newText))))
    {
    Topics.push(newText);
    CreateBtn();
    }
    else
    {
    return false;
    }
    console.log(newText);
    console.log(Topics);
    return false;
    
});

$(".btns").on("click",function()
{
    var btnVal;
    var btnId;
    btnId=$(this).attr("id");
    console.log(btnId);
    btnVal=$(this).text();
    queryurl=baseurl+btnVal;
    console.log(queryurl);
    loadGif();
    console.log(btnVal);
    
})
