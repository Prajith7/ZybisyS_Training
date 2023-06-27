let searchIcon = document.getElementById("search-icon")
let chk = document.getElementById("chk")
chk.addEventListener("change",()=>{
    document.body.classList.toggle('dark')
})
searchIcon.addEventListener("click",(event)=>{
    event.preventDefault();
    let value = document.getElementById("word")
    let wordValue = value.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`;
    fetch(url).then((response)=>response.json()).then((response)=>{
        console.log(response);
        let headingValue = document.getElementById("headingValue");
        headingValue.innerHTML = wordValue;
        let phoeneticValue = document.getElementById("phoenitic");
        phoeneticValue.innerHTML = response[0].phonetic;

        let nounTitle = document.getElementById("noun-title")
        nounTitle.innerHTML = response[0].meanings[0].partOfSpeech

        let meaningTitle = document.getElementById("meaning1")
        meaningTitle.innerHTML = "Meaning"
        
        let noundefine = document.getElementById("noun-meaning")
        noundefine.innerHTML = "";

        
        for(let i=0;i<response[0].meanings[0].definitions.length;i++){
            
            let definitionList1=document.createElement("ul")
            let nounLists = document.createElement("li")
            let list1 = response[0].meanings[0].definitions[i].definition;
            nounLists.innerHTML = list1;
            definitionList1.appendChild(nounLists);
            noundefine.appendChild(definitionList1);

        }
        
        let synonymsTitle = document.getElementById("synonyms")
        synonymsTitle.innerHTML = "synonyms"
        let synonyms1 = document.getElementById("synonym-ans");
        let synonymAns = response[0].meanings[0].synonyms;
        synonyms1.innerHTML = synonymAns;
        

        let verbdefine = document.getElementById("defintion-list2")
        verbdefine.innerHTML="";

        let verbTitle = document.getElementById("verb-title")
        verbTitle.innerHTML = response[0].meanings[1].partOfSpeech

        let meaningTitle1 = document.getElementById("meaning2")
        meaningTitle1.innerHTML = "Meaning"
        for(let i=0;i<response[0].meanings[1].definitions.length;i++){
            
            let verblists = document.createElement("li")
            let lists2 = response[0].meanings[1].definitions[i].definition;
            verblists.innerHTML=lists2;
            verbdefine.appendChild(verblists);
        }
   
    let footerDiv = document.getElementById("footer")
    let sourceDiv = document.getElementById("source-name")
    let sourceName = document.getElementById("source-h")
    sourceName.innerHTML = "source";
    let sourceLink = document.getElementById("source-div")
     let  a = document.createElement('a'); 
     console.log( response[0].sourceUrls)
     
     a.setAttribute('href', response[0].sourceUrls);
     a.setAttribute('target',"blank");
     console.log(a);
     a.innerHTML = response[0].sourceUrls;
     
    sourceLink.appendChild(a);
    
    sourceDiv.appendChild(sourceName)
    footerDiv.appendChild(sourceDiv)
    footerDiv.append(sourceLink)
    
})
    })