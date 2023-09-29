let all_buttons = document.querySelectorAll(".button_a");
let the_EX = document.getElementsByClassName("the_EX")[0];
let delet_AC = document.getElementsByClassName("the_main_button2_1")[0];
let delet_backspace = document.getElementsByClassName("the_main_button2_2")[0];
let theFinelOutPut = document.getElementsByClassName("out_put")[0];
all_buttons.forEach((ele) => {
    ele.addEventListener("click", () => {
        the_EX.append(ele.textContent)
        delet_AC.addEventListener("click",() =>{
            the_EX.textContent = null;
            theFinelOutPut.textContent = null;
        })
    })
});
delet_backspace.addEventListener("click",() => {
    the_EX.textContent = the_EX.textContent.slice(0,the_EX.textContent.length - 1);
})
// Oprator
let Oprator = document.querySelectorAll(".Oprator");
let Equal = document.getElementsByClassName("equal")[0];
Equal.addEventListener("click" , () =>{
        let TheFirstPart = parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("+")));
        let TheSecondPart = parseFloat(the_EX.textContent.slice(the_EX.textContent.indexOf("+") + 1,the_EX.textContent.length))
        // console.log(`the First part is ${TheFirstPart} the second part is ${TheSecondPart}`)
        // console.log(the_EX.textContent.includes("+"))
        if (the_EX.textContent.includes("+")){
            theFinelOutPut.textContent = TheFirstPart + TheSecondPart;
        }else if (the_EX.textContent.includes("-")){    
            theFinelOutPut.textContent = parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("-"))) - parseFloat(the_EX.textContent.slice(the_EX.textContent.indexOf("-") + 1,the_EX.textContent.length));
        }else if (the_EX.textContent.includes("/")){



            theFinelOutPut.textContent = parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("/"))) / parseFloat(the_EX.textContent.slice(the_EX.textContent.indexOf("/")   + 1,the_EX.textContent.length))  ;
        
        
        
        
        }else if (the_EX.textContent.includes("*")){
            theFinelOutPut.textContent = parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("*"))) * parseFloat(the_EX.textContent.slice(the_EX.textContent.indexOf("*") + 1,the_EX.textContent.length));
        }else if (the_EX.textContent.includes("%")){
            theFinelOutPut.textContent = parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("%"))) % parseFloat(the_EX.textContent.slice(the_EX.textContent.lastIndexOf("%") + 1,the_EX.textContent.length));
            console.log(parseFloat(the_EX.textContent.slice(0,the_EX.textContent.indexOf("%"))))
            console.log(parseFloat(the_EX.textContent.slice(the_EX.textContent.lastIndexOf("%") + 1,the_EX.textContent.length)))
        }else {
            theFinelOutPut.textContent = "ERR (: 27sn   "
        }
    })
// window.localStorage.clear();
