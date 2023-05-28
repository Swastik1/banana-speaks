var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslator(input){
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the server ");
}


function clickHandler(){

    //reading the value from the textarea
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslator(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerText= json.contents.translated)

}


btnTranslate.addEventListener("click",clickHandler);