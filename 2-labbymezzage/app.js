"use strict";

window.onload = function() {
    var message = new Message("Hej hopp!", new Date());
    alert(message);
    alert(message.toTextHtmlString());
    message.setText("Hej då!");
    alert(message);
};