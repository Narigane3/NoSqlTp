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
    <script src="//cdn.jsdelivr.net/npm/pouchdb@8.0.1/dist/pouchdb.min.js"></script>
    <script src="js/gestionDB.js" async></script>
</head>
<body>
<section>
    <h1>Présentation de pouchDB</h1>
    <p>PouchDB est une base de données NoSQL qui fonctionne dans le navigateur web. Elle permet de stocker des données
        en local dans le navigateur et de les synchroniser avec une base de données distante.</p>

    <h2>Exemple d'utilisation :</h2>
    <p>On va créer une base de données de contact et les afficher dans une liste.</p>
    <button id="getContact" disabled>Voir les contact</button>
    <button id="getContactBySchool" disabled>Voir les contacts par école</button>
</section>

<section id="display-result">

</section>

</body>
</html>