"use strict";

var MessageBoard = {
    messages: [],

    addMessage: function(message) {
        MessageBoard.messages.push(message);
    },

    refreshMessageCounter: function(container) {
        container.innerHTML = MessageBoard.messages.length.toString();
    },

    renderLastMessage: function(container) {
        MessageBoard.renderMessage(container, MessageBoard.messages.slice(-1)[0]);
    },

    renderMessage: function(container, message) {
        // Text.
        var article = document.createElement("article");
        article.innerHTML = message.toHtmlString();
        container.appendChild(article);

        // Tid.
        var div = document.createElement("div");
        div.innerHTML = message.toShortTimeString();
        article.appendChild(div);
    },

    renderMessages: function(container) {
        // Ta bort alla article-element i containern.
        var articles = container.querySelectorAll("article");
        for (var i = 0; i < articles.length; i = i + 1) {
            container.removeChild(articles[i]);
        }

        // Lägger till alla meddelanden till containern.
        MessageBoard.messages.forEach(function(m) {
            MessageBoard.renderMessage(container, m);
        });
    }
};
