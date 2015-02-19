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
        // "article"
        var article = document.createElement("article");
        article.setAttribute("class", "panel panel-primary");
        document.querySelector("section").appendChild(article);

        // ".panel-heading"
        var divPanelHeading = document.createElement("div");
        divPanelHeading.setAttribute("class", "panel-heading");
        article.appendChild(divPanelHeading);

        // ".panel-heading time".
        var spanTime = document.createElement("span");
        spanTime.innerHTML = message.toShortTimeString();
        spanTime.setAttribute("class", "pointer glyphicon glyphicon-time");
        spanTime.addEventListener("click", function (e) {
            e.preventDefault();
            alert(message.getDate().toLocaleString());
        });
        divPanelHeading.appendChild(spanTime);

        // ".panel-heading button close".
        var buttonClose = document.createElement("button");
        buttonClose.setAttribute("class", "close");
        buttonClose.setAttribute("aria-label", "Close");
        buttonClose.addEventListener("click", function (e) {
            e.preventDefault();
            if (confirm("Ta bort meddelandet?")) {
                MessageBoard.removeMessage(MessageBoard.messages.indexOf(message));
            }
        });
        divPanelHeading.appendChild(buttonClose);

        var spanClose = document.createElement("span");
        spanClose.innerHTML = "&times;";
        spanClose.setAttribute("aria-hidden", "true");
        buttonClose.appendChild(spanClose);

        // ".panel-body"
        var divPanelBody = document.createElement("div");
        divPanelBody.innerHTML = message.toHtmlString();
        divPanelBody.setAttribute("class", "panel-body");
        article.appendChild(divPanelBody);
    }
};
