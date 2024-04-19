# IP Info Fetcher

This is a simple JavaScript application that fetches and displays information about an IP address using the IP Geolocation & IPWHOIS API.

## Setup

Get an API key from RapidAPI.

Replace '3f8a50f8ffmshc2e4fbe247ea892p162f61jsnff0c6ecdd3b3' in the OPTIONS object with your API key.

Load the HTML file in a browser.

## Usage

Enter an IP address in the input field.
Click the 'Submit' button.
The IP information will be displayed in the results section.

## Code Overview

OPTIONS: An object containing the API key and other necessary headers.

fetchIpInfo: An asynchronous function that fetches IP information from the API.

$form, $input, $submit, $results: Variables storing references to the form, input field, submit button, and results section respectively.

Event listener on the form's 'submit' event: Prevents the page from refreshing, fetches IP information, and displays it in the results section.

## Technologies Used

JavaScript
Fetch API
HTML

## License
https://codepen.io/license/pen/abxRxZd

