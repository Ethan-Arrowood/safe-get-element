"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeGetElement = void 0;
function assertElement(element, tagName) {
    if (element.tagName === tagName.toUpperCase()) {
        return true;
    }
    else {
        throw new Error("Element " + element + " is not " + tagName);
    }
}
function safeGetElement(id, assertType) {
    var element = document.getElementById(id);
    if (element === null) {
        throw new Error("Cannot find element with id: " + id);
    }
    return assertType !== undefined && assertElement(element, assertType)
        ? element
        : element;
}
exports.safeGetElement = safeGetElement;
