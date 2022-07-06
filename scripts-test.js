

function factorial(){
    var output = document.getElementById("output-el")
var inputEl = document.getElementById("input-el")
    var input = document.getElementById("input-el").value.trim()
    let answer = 1;
    if (input == 0 || input == 1){
      return ;
    }else{
      for(var i = input; i >= 1; i--){
        answer = answer * i;
      }
     output.innerHTML = '<p>'+answer+'</p>';
     inputEl.value = ""
      
    }  
}

function evenOccurences(){
    var inputEvenEl = document.getElementById("input-el-even")
    var outputEvenEl = document.getElementById("output-el-even")
    var final = {}
    if(inputEvenEl.length <= 0){
        outputEvenEl.innerHTML = '<p>""</p>'
    }
    for(var i=0; i<inputEvenEl.length;i++){
        if(!final[inputEvenEl[i]]){
            final[inputEvenEl[i]] = 1
        }else {
            final[inputEvenEl[i]]++
        }
    }
    for(var key in final){
        var counter = final[key]
        if(counter % 2 == 1){
            outputEvenEl.innerHTML = '<p>"false"</p>'
        }
    }
    outputEvenEl.innerHTML = '<p>"true"</p>'
}

function palindrome(){
    var inputElement = document.getElementById("input-el-palindrome").value.trim()
    var outputEl = document.getElementById("output-el-palindrome")
    var reversedInput = inputElement.split("").reverse().join("")
    if(inputElement === reversedInput){
        outputEl.innerHTML = '<p>'+inputElement+' "is a plaindrome"</p>'
    }else {
        outputEl.innerHTML = '<p>'+inputElement+' "is NOT a plaindrome"</p>'

    }
}



