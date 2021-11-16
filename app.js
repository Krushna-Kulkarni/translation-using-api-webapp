var txtInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranlationUrl(input){
var translationUrl = serverURL + "?" + "text=" + input;
return translationUrl;
}

function clickHandler(){
    var userTextInput = txtInput.value;
    fetch(getTranlationUrl(userTextInput))
    .then(Response => Response.json())
    .then(json => {
        var translation = json.contents.translated;
        txtOutput.innerText = translation;
        })
}




btnTranslate.addEventListener("click",clickHandler);
