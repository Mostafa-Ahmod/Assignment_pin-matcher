// Pin Generate Section 

    document.getElementById("generate-btn").addEventListener('click', function () {
        let resultGen = document.getElementById("result-gen").value;
        let number = Math.random() * 10000;
        let roundNum = Math.round(number);
         document.getElementById("result-gen").value = roundNum;
     });
    


// key board section

    let numbers = document.getElementsByClassName('number');
     for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener('click', function () {
       let output = document.getElementById('result').value;
       output = output + this.id;
       document.getElementById('result').value = output;
     });
}


// submit button handler
document.getElementById("submit-btn").addEventListener('click', function () {
    if (document.getElementById("result-gen").value ===  document.getElementById('result').value) {
        document.getElementById("pinMatched").style.display = 'block';
    }
    else {
        document.getElementById("dontMatch").style.display = 'block';
    }
});



//Extra....
// allClear and backspaceHandler 
document.getElementById('clear').addEventListener('click',function () {
    document.getElementById('result').value = "";
}); 
document.getElementById('backspace').addEventListener('click',function () {
    let output = document.getElementById('result').value.toString();
    output = output.substr(0,output.length -1);
    document.getElementById('result').value = output;
}); 
