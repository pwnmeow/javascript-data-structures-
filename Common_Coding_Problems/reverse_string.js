const str = "hi i am sheeraz";

function reveasy(str){
    let stringToReverse = str.split("");
    let rev = stringToReverse.reverse()
    let results = rev.join("");
    console.log(results)
}

reveasy(str)



function revCompact(str){
    let results = str.split("").stringToReverse.reverse().rev.join("");
    console.log(results)
}

revCompact(str)

function revMedium(str){
    var newSting = "";
    for (i = str.length -1; i >=0 ; i--){
        newSting += str[i];
    }
    console.log(newSting)
}

revMedium(str);

//Recurrsion Meathode to be added