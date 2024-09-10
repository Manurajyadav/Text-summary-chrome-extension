const btn = document.getElementById("summarise");

btn.addEventListener("click", function() {
    btn.disabled = true;
    btn.innerHTML = "Summarising...";

    // Get the highlighted or full text from the active tab
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: getSelectedText  // A function to retrieve highlighted or full text
        }, (results) => {
            const text = results[0].result;

            // Send the text to the Flask backend for summarization
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://127.0.0.1:5000/summary?text=" + encodeURIComponent(text), true);
            xhr.onload = function() {
                var summary = xhr.responseText;
                const output = document.getElementById("output");
                output.innerHTML = summary;
                btn.disabled = false;
                btn.innerHTML = "Summarise";
            };
            xhr.send();
        });
    });
});

// Function to get selected text or full text from the active tab
function getSelectedText() {
    let selectedText = window.getSelection().toString();
    if (!selectedText) {
        // If no text is selected, get the whole body text
        selectedText = document.body.innerText;
    }
    return selectedText;
}
