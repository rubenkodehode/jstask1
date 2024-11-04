// 1.1 - split_reverse
function split_reverse(text) {
    let index = text.length / 2
    let first_half = text.slice(0, index);
    let second_half = text.slice(index);
    let array1 = first_half.split('').reverse().join("");
    return array1 + second_half;
    
}
console.log("1.1 - split_reverse");
console.log(split_reverse("this is a text"));

// 1.2 - caps_nocaps
function caps_nocaps(text, b){
   if(b === true){
        return text.toUpperCase();
    } else{
        return text.toLowerCase();
    }
}

console.log("1.2 - caps_nocaps");
console.log(caps_nocaps("HeLLo WOrlD", true));
console.log(caps_nocaps("HeLLo WOrlD", false));

// 1.3 - day
function day(text){
    let txt;
    switch (text) {
        case "Monday":
            txt = "Sunday";
            break;
        case "Tuesday":
            txt = "Monday";
            break;
        case "Wednesday":
            txt = "Tuesday";
            break;
        case "Thursday":
            txt = "Wednesday";
            break;
        case "Friday":
            txt = "Thursday";
            break;
        case "Saturday":
            txt = "Friday";
            break;
        case "Sunday":
            txt = "Saturday";
            break;
        default:
            txt = "no."
        }
    return txt;
}

console.log("1.3 - day")
console.log(day("Monday"));

// 1.4
function sameLetter(text){
    let lastLetter = text.length -1;
    if(text.charAt(0) === text.charAt(lastLetter)){
        return "yes?"
    } else{
        return "no?"
    }
}
console.log("1.4 - sameLetter")
console.log(sameLetter("testing it"))

// 1.5 - isInList
function isInList(text, list){
    if(list.includes(text)){
        return true
    } else{
        return false
    }
}

console.log("1.5 - isInList")
console.log(isInList("text", ["text", "no", "yes"]))

// 1.6 - combine
function combine(list){
    let firstWord = list.shift();
    let lastWord = list.pop();
    return firstWord + lastWord;
}
console.log("1.6 - combine")
console.log(combine(["home", "no", "yes", "work"]));

// 1.7 - sametext
function sameText(txt1, txt2){
    if(txt1.toLowerCase() === txt2.toLowerCase()){
        return "They are the same"
    } else {
        return "they are not the same"
    }
}
console.log("1.7 - sameText")
console.log(sameText("this is a text", "This is a text"))

// 1.8 -including
function including(text){
    if(text.includes("JavaScript")){
        return text + ": contains JavaScript"
    } else{
        return "no."
    }
}

console.log("1.8")
console.log(including("Does this text contain JavaScript or not?"))