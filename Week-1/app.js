const quoteText=document.querySelector(".quote"),
quoteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
shareBtn=document.querySelector(".share");

function randomQuote(authorName){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote..";
    const apiUrl=`https://api.quotable.io/random?author=${encodeURIComponent(authorName)}`;
    fetch(apiUrl).then(res=>res.json()).then(result=>{
        //console.log(result);
        quoteText.innerText=result.content;
        quoteBtn.innerText="Generate Quote"
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance)
});
copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText)
});
shareBtn.addEventListener("click",()=>{
    navigator.share({ text: quoteText });

});
quoteBtn.addEventListener("click",function(){
    const authorName = document.querySelector(".author .name").value.trim();
    if (!authorName) {
        alert("Please enter an author name.");
        return;
    }
    randomQuote(authorName);
});