const fromLang = document.querySelector("#from_lang");
const toLang = document.querySelector("#to_lang");
const btnTranslate = document.querySelector("#btnTranslate");
const toText = document.querySelector("#to-text");
const fromText = document.querySelector("#from-text");
const exchange = document.querySelector(".exchange");


for (let lang in languages) {
    let option = `<option value="${lang}">${languages[lang]}</option>`;

    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

btnTranslate.addEventListener("click", () => {
    const text = fromText.value;
    const from_lang = fromLang.value;
    const to_lang = toLang.value;
    if (text == "") {
        toText.value = "Please write something";
        toText.classList.add("error");
    }
    else {
        const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from_lang}|${to_lang}`;
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            toText.classList.remove("error");
            toText.value = data.responseData.translatedText;
        })
    }
    


});

exchange.addEventListener("click", () => {
    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
});
