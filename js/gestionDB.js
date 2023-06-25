import "./createSchoolList.js";
import "./getContactBySchool.js";


// Create DB
window.DB = new PouchDB('myDb');

// create event
let event = new Event('dbCreated');

// Request to get data from server

DB.allDocs({ include_docs: false, sort:name }).then(function (result) {
    if (result.total_rows === 0) {
        console.log('La base de données est vide.');
        fetch(window.location.origin + window.location.pathname + 'getContactsData.php')
            .then(function (response) {
                    return response.json();
                }
            ).then(function (data) {

            // Insert data into DB
            DB.bulkDocs(data).then(function () {

                // Create index of DB
                DB.createIndex({
                    index: {
                        fields: ['title']
                    }
                });

                // Dispatch the event.
                document.dispatchEvent(event);

            }).catch(function (err) {
                console.error(err);
            });

        }).catch(function (err) {
            console.error(err)
        });
    } else {
        console.log('La base de données contient des documents.');
        // Dispatch the event.
        document.dispatchEvent(event);
    }
}).catch(function (error) {

    console.error('Erreur lors de la récupération des documents :', error);
});




