// (async () => {
//     console.log("Hello Seatgeek.....");
//     setTimeout(() => {
//         chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//             if (message == 'get-seatgeek-cookie') {
//                 console.log('cookie', document.cookie);
//                 sendResponse(document.cookie);
//             }
//         });
//     }, 3000);

// })();