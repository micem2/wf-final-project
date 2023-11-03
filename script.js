// $.ajax(
//     'https://api.adviceslip.com/advice',
//     {
//         success: function (APIResponse) {
//             var myDiv = document.getElementById("advice");
//             var adviceTag = document.createElement("p");
//             adviceTag.innerHTML = APIResponse.slip.advice;
//             myDiv.appendChild(adviceTag);
//             console.log(APIResponse.slip.advice);
//         }
//     }
// )
var apiLink = "https://api.adviceslip.com/advice";  
async function getapi(link){
    var res = await fetch(link);
    var data = await res.json();
    var adviceText = data.slip.advice;
    document.getElementById("advice").innerHTML = adviceText;
    console.log(data.slip.advice);
}
getapi(apiLink);