const reconigition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
reconigition.lang="en-us";
//console.log(reconigition);
const btn = document.querySelector("#butt");
btn.addEventListener("click" ,()=>{
    
    // convert text to voice
    function speak(text)
    {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }
    function handlecommand(command)
    {
        if(command.includes("open Youtube"))
        {
            speak("Opening YouTube...")
            window.open("https://www.youtube.com","_blank")
        }
        if(command.includes("open Google"))
            {
                speak("Opening Google...")
                window.open("https://www.google.com","_blank")
            }
        else if(command.includes("open facebook"))
        {
            speak("Opening Facebook...")
            window.open("https://www.facebook.com","_blank")
        }
        else if(command.includes("open Whatsup"))
            {
                speak("Opening Whatsup...")
                window.open("https://www.whatsup.com","_blank")
            }
            else if(command.includes("open Instagram"))
                {
                    speak("Opening Instagram...")
                    window.open("https://www.instagram.com","_blank")
                }
        else{
            speak("search on google chrome");
            window.open(`https://www.google.com/search?q=${command}`,"_blank")
        }
    }
    speak("hello , how can i help you");
    setTimeout(()=>{
        reconigition.start();
    },2000)
    reconigition.onresult =(e)=>{
        //console.log(e)
        const command=e.results[0][0].transcript.toLowerCase();
       // console.log(command)
       handlecommand(command)
    }
})
