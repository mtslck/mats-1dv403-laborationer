"use strict";

// Konstruktor.
function Message(text, date) {

    // text och date är instansvariabler och privata.

    // Priviligierade metoder, som är publika, krävs för
    // åtkomst av de privata instansvariablerna.

    this.getDate = function() {
        // Klona Date-objektet för att undvika "privacy leak".
        return new Date(date);
    };

    this.setDate = function(param) {
        // Klona Date-objektet för att undvika "privacy leak".
        date = new Date(param);
    };

    this.getText = function() {
        return text;
    };

    this.setText = function(param) {
        text = param;
    };
}

// Publika metoder som läggs till prototypen delas av alla objekt instansierade av konstruktorn.

Message.prototype.toString = function() {
    return this.getText() + " (" + this.toShortTimeString() + ")";
};

Message.prototype.toHtmlString = function() {
    var result = "<p>" + this.getText() + "</p>";
    return result.replace(/\r\n/g, "</p><p>").replace(/\n/g, "</p><p>");
};

Message.prototype.toShortTimeString = function() {
    return this.getDate().toISOString().slice(11, 16);
};