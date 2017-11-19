// Get current tab, from dev docs
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

// save password
function savePassword(password) {
  var items = {};
  items['password'] = password;
  chrome.storage.local.set(items);
}

// event listeners for updating password
document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    newPasswordButton = document.getElementById("newPasswordButton")
    newPasswordButton.addEventListener('click', () => {
      savePassword(document.getElementById("newPaswd").value)
    });
  });
});
