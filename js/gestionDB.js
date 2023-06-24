window.DB = new PouchDB('myDb');


console.log('DB', DB)
console.log(window.location.origin + window.location.pathname + 'getContactsData.php')

const btn_getContacts = document.getElementById('getContact');
const btn_getContactBySchool = document.getElementById('getContactBySchool');

// Request to get data from server

fetch(window.location.origin + window.location.pathname + 'getContactsData.php')
    .then(function (response) {
            return response.json();
        }
    ).then(function (data) {
    console.log(data)
    // data.forEach(function (contact) {
    //     DB.put(contact)
    // })

    // create event
    let event = new Event('dbCreated');

    // Dispatch the event.
    document.dispatchEvent(event);

}).catch(function (err) {
    console.error(err)
});

// Listen to event
document.addEventListener('dbCreated', function () {
    console.log('dbCreated event fired')

    // Enable button
    btn_getContacts.disabled = false;
    btn_getContactBySchool.disabled = false;

    btn_getContacts.addEventListener('click', function () {
        console.log('btn_getContacts clicked')
    });

});
