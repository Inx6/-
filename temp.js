// ==UserScript==
// @name         易班本科评估
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  长沙师范专属
// @author       You
// @match        https://www.yooc.me/group/4550323/exam/349804/detail
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yooc.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     // console.log(ConsoleManager)
     ConsoleManager=null
     for(var i = 1; i < 1000; i++) {
      // console.log(ConsoleManager)
      clearInterval(i);
    }
    window.onload = function(){
        let exam = document.querySelector(".exam-detial-container");
        // console.log(exam.children);

        for(let i=0; i<= exam.children.length; i++){
    if(i >0 && i < 44){
        // console.log(exam.children[i].children[2].innerText);
        for(let e=0; e<exam.children[i].children[5].children.length; e++){
            let xhr = new XMLHttpRequest();
                xhr.open("GET","http://127.0.0.1:801/?qus="+exam.children[i].children[2].innerText, true);
                xhr.send();
                xhr.onreadystatechange=function(){
                    // 在监听xhr的请求状态 readyState为4代表请求成功，status为200代表响应成功
                    if (xhr.readyState===4) {
                        // 打印数据
                        let ans = JSON.parse(xhr.responseText);
                        let answer = ans.answer.split("、");
                        // console.log(answer);
                        // 寻找答案
                        for(let r=0; r<answer.length; r++){
                            // console.log(typeof answer[r]);
                            // console.log(typeof exam.children[2].children[5].children[e].innerText);
                            let strs = exam.children[i].children[5].children[e].innerText;
                            if(strs.indexOf(answer[r]) != -1){
                                // console.log(exam.children[2].children[5].children[e].children[0]);
                                setInterval(()=>{
                                    exam.children[i].children[5].children[e].children[0].click();
                                },2000)
                            }
                        }
                    }

                };

                // console.log(exam.children[2].children[5].children.length);
        };
    }
}

    }
})();
