chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes('youtube.com')) {
    // Check the filter state and apply it to the YouTube page
    chrome.storage.sync.get(['filterEnabled'], (result) => {
      if (result.filterEnabled) {
        // Inject content script or any filtering logic
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['contentscript.js']
        });
      }
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.type === 'performSearch') {
    const topic = request.topic;
    console.log('Performing search:', request.topic);



  
    chrome.tabs.create({ url: "https://www.youtube.com" }, (tab) => {
      const newTabId = tab.id;
    
      // Inject the content script with the query as an argument
      chrome.scripting.executeScript({
        target: { tabId: newTabId },
        files: ["contentscript2.js"],
        
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Script injection failed:", chrome.runtime.lastError.message);
        } else {
          console.log("Content script injected with query:", topic);
        }
      });
    });

  }
});