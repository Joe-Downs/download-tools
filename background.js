chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
	"id": "imageContextMenu",
	"title": "This is an image",
	"contexts": ["image"]
    });
});
