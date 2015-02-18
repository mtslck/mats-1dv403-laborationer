"use strict";

window.onload = function() {
    //MessageBoard.messages.push(new Message("#1", new Date()));
    //MessageBoard.messages.push(new Message("#2", new Date()));
    //MessageBoard.messages.push(new Message("#3", new Date()));
    //MessageBoard.messages.push(new Message("#4", new Date()));
    //
    //alert(MessageBoard.messages[0].getDate().toISOString().slice(11, 16));

    var messageText = document.querySelector("textarea");
    var messageContainer = document.querySelector("section");
    var submit = document.querySelector("input[type=submit]");
    var counter = document.querySelector("section header span");

    submit.addEventListener("click", function(e) {
        e.preventDefault();

        MessageBoard.addMessage(new Message(messageText.value, new Date()));
        MessageBoard.renderLastMessage(messageContainer);
        MessageBoard.refreshMessageCounter(counter);
    });
};