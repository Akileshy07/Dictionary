
const searchBtn = (e) =>{
    let findMeaning = document.getElementById("input").value;
console.log(`word:${findMeaning}`);
SearchMeaning(findMeaning);
}

const SearchMeaning = async(word) =>{
    // alert(`word:${word}`);
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let data = await response.json();
    let  meaningOfWord = data[0].meanings[0].definitions[0].definition;
    let  partOfSpeech = data[0].meanings[0].partOfSpeech;
    let  antonyms = data[0].meanings[0].antonyms[0];
    let  synonyms = data[0].meanings[0].synonyms[0];
    console.log(data)

    document.getElementById("meaning").innerHTML = meaningOfWord;
    document.getElementById("word").innerHTML = word;
    document.getElementById("pos").innerHTML = partOfSpeech;
    document.getElementById("ant").innerHTML = antonyms;
    document.getElementById("syn").innerHTML = synonyms;
}