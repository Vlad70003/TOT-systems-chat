let storage = localStorage;

export let floodChat = [];
export let workChat = [];

if (storage.getItem('floodChat') !== null && storage.getItem('floodChat') !== undefined) {
    let floodChatContent = JSON.parse(storage.getItem('floodChat'));
    
    floodChatContent.forEach(element => {
        floodChat.push(element);
    });
}

if(storage.getItem('workChat') !== null && storage.getItem('workChat') !== undefined) {
    let workChatContent = JSON.parse(storage.getItem('workChat'));

    workChatContent.forEach(element => {
        workChat.push(element);
    })
}