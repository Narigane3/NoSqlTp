import "./createSchoolList.js";

// Create DB
window.DB = new PouchDB('myDb');

// create event
let event = new Event('dbCreated');

// Request to get data from server

fetch(window.location.origin + window.location.pathname + 'getContactsData.php')
    .then(function (response) {
            return response.json();
        }
    ).then(function (data) {

    // Insert data into DB
    DB.bulkDocs(data).then(function (result) {
    }).catch(function (err) {
        console.error(err);
    });

    // Dispatch the event.
    document.dispatchEvent(event);

}).catch(function (err) {
    console.error(err)
});

