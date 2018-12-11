//Question Answers Object
Topics=[
    "Dog",
    "Cat",
    "Rabit",
    "Hamster"
];


var intervalId;
var time = 10;
var timerRunning = false;
var currentQuestion=0;
var correctAnswers=0;var incorrectAnswers=0;var unanswered=0;
var newText="";
var i=0



//Major function 
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
//CreateBtn();
$(".submitBtn").on("click",function()
{
 
    newText=$("#animal").val().trim();
    Topics.push(newText);
    //alert(Topics);
    CreateBtn();
   
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
    console.log(btnVal);
    
})
