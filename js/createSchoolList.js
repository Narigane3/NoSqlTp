// Make a list of school from DB and create à option for each school
document.addEventListener('dbCreated', function () {
    console.log('dbCreated event fired')

    let school = {};
    let event = new Event('schoolListCreated');

    /// Get all school from DB
    DB.allDocs({
        include_docs: true,
    }).then(function (result) {

        let option = document.createElement('option');
        result.rows.forEach(function (row) {

            // if the title is not on the list, add it
            if (!school[row.doc.title]) {
                school[row.doc.title] = row.doc.title;

                // Create option for select
                option = document.createElement('option');
                option.value = row.doc.title;
                option.innerHTML = row.doc.title;
                document.getElementById('school-select').appendChild(option);


            }

        });

        // Dispatch the event.
        document.dispatchEvent(event);

    }).catch(function (err) {
        console.error(err);
    });

});

document.addEventListener('schoolListCreated', function () {

    // enable the select
    document.getElementById('school-select').disabled = false;

    let infoP = document.getElementById('info');

    // change the info text
    infoP.innerHTML = 'Choisissez une école :';
    infoP.classList.remove('text-danger');
    infoP.classList.add('text-success');

});