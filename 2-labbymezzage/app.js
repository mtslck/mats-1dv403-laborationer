"use strict";

window.onload = function() {
    var submit = document.querySelector("input[type=submit]");
    var textarea = document.querySelector("textarea");

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        MessageBoard.addMessage(new Message(textarea.value, new Date()));
    });

    textarea.addEventListener("keypress", function(e) {
        var key = e.which || e.keyCode;
        if (key === 13 && !e.shiftKey) {
            e.preventDefault();
            submit.click();
        }
    });
};