let contactResult = document.getElementById('contact-result-tbody');
let nbContactDiv = document.getElementById('school-nb-result');

// Create event on change for get contact by school
document.getElementById('school-select').addEventListener('change', function (e) {

    // Get value of select
    let school = e.target.value;

    console.log(school);

    // request to get contact by school
    DB.find({
        selector: {name: {$eq: school}},
        group: true,
        reduce: true
    }).then(function (result) {

        contactResult.innerHTML = '';

        let nbContact = result.docs.length;

        if (nbContact === 0) {
            contactResult.innerHTML = `<tr>
                        <td colspan="8" class="text-center">Aucun contact pour cette école</td>
                    </tr>`;
        } else {

            let data = {};

            // Display contact by school in table
            result.docs.forEach(function (row) {

                // if the email is not on the list, or if the email is on the list but the title is not the same, add it
                if (!data[row.email] || data[row.email] !== row.title) {
                    data[row.email] = row.title;
                    let tr = document.createElement('tr');

                    let td = document.createElement('td');
                    td.innerHTML = row.title;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.name;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.realAddress;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.department;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.country;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.tel;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    td.innerHTML = row.email;
                    tr.appendChild(td);

                    td = document.createElement('td');
                    tr.appendChild(td)

                    contactResult.appendChild(tr);
                }else {
                    nbContact--;
                }

            });
        }

        nbContactDiv.innerHTML = "Nombre de contact : " + nbContact;

        console.log(result)
    }).catch(function (err) {
        console.log(err);
    });


});