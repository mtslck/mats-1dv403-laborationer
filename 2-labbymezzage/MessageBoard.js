"use strict";

var MessageBoard = {
    messages: [],

    addMessage: function(message) {
        MessageBoard.messages.push(message);
        MessageBoard.renderMessage(message);
        MessageBoard.refreshMessageCounter();
    },

    refreshMessageCounter: function() {
        document.querySelector("section header span").innerHTML = MessageBoard.messages.length.toString();
    },

    removeMessage: function(index) {
        MessageBoard.messages.splice(index, 1);

        var article = document.querySelectorAll("section article")[index];
        article.parentNode.removeChild(article);
        MessageBoard.refreshMessageCounter();
    },

    renderMessage: function(message) {
        // Text.
        var article = document.createElement("article");
        article.innerHTML = message.toHtmlString();
        document.querySelector("section").appendChild(article);

        // Ta bort.
        var divDelete = document.createElement("div");
        divDelete.innerHTML = "X";
        divDelete.onclick = function() {
            MessageBoard.removeMessage(MessageBoard.messages.indexOf(message));
        };
        article.insertBefore(divDelete, article.firstChild);

        // Tid.
        var divTime = document.createElement("div");
        divTime.innerHTML = message.toShortTimeString();
        article.appendChild(divTime);
    }
};
