<?php
try {
    // Open the file
    if (!$csvFile = fopen('contacts.csv', 'r')) {
        throw new Exception('Error while opening the file', 500);
    }

    $contacts = [];

    // Skip the first line
    if (!fgetcsv($csvFile)) {
        throw new Exception('Error while reading the file', 500);
    }

    // Parse data from CSV file line by line
    while (($line = fgetcsv($csvFile)) !== FALSE) {
        $contacts[] = [
            'title' => $line[0],
            'name' => $line[1],
            'address' => $line[2],
            'realAddress' => $line[3],
            'department' => $line[4],
            'country' => $line[5],
            'tel' => $line[6],
            'email' => $line[7],
        ];
    }

    // Close the file
    if (!fclose($csvFile)) {
        throw new Exception('Error while closing the file', 500);
    }

    if (empty($contacts)) {
        throw new Exception('No data found', 401);
    }

    // Display the result
    echo json_encode($contacts);

    http_response_code(200);


} catch (Exception $e) {
    http_response_code($e->getCode());
    echo $e->getMessage();
    return false;
}

