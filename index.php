<?php
/**
 * Created by Narigane
 * Date: 24/06/2023
 * Description: PouchDB presentation project index
 */
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Présentation de pouchDB</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="//cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.js"></script>
    <script src="//cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.find.js"></script>
    <script src="js/gestionDB.js" async type="module"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<section class="container mt-5">
    <h1>Présentation de pouchDB</h1>
    <p>PouchDB est une base de données NoSQL qui fonctionne dans le navigateur web. Elle permet de stocker des données
        en local dans le navigateur et de les synchroniser avec une base de données distante.</p>

    <h2>Exemple d'utilisation :</h2>
    <p>On va créer une base de données de contact et les afficher au click sur le bouton des écoles.</p>

    <div>
        <div class="row" id="school-liste">
            <div class="form-group mb-3 col-6">
                <label for="school-select" class="text-danger mt-1" id="info">Le sélecteur s'active quand tout est fin
                    prêt</label>
                <select class="form-select" name="school" id="school-select" disabled>
                    <option value="0">Choisissez une école</option>
                </select>
            </div>
            <div class="col-6" id="school-nb-result">

            </div>

        </div>
        <div class="col-auto" id="contact-result">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">École</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Département</th>
                    <th scope="col">Pays</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody id="contact-result-tbody">
                    <tr>
                        <td colspan="8" class="text-center">Choisissez une école</td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>


</section>

</body>
</html>