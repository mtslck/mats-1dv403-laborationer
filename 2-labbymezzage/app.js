"use strict";

window.onload = function() {
    var submit = document.querySelector("input[type=submit]");

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        MessageBoard.addMessage(new Message(document.querySelector("textarea").value, new Date()));
    });
};