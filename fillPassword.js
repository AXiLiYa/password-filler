/*
Fills stored password on all pages patching the criteria in content script declaration.
*/

// Get password from local storage 
function getSavedPassword(callback) {
    chrome.storage.local.get('password', (items) => {
        callback(chrome.runtime.lastError ? null : items['password']);
    });
}

// Fill password in specific field
function fillPassword(password) {
    document.getElementById("passwordField").value = password;
}

//Get the password and fill it
getSavedPassword((password) => {
    if (password) {
        fillPassword(password)
    }
});