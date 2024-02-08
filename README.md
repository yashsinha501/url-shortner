# Urily - URL Shortener

Urily is a web-based URL shortening platform that allows you to shorten and manage your links with ease. With a simple user interface and powerful features, Urily is perfect for marketers, bloggers, and anyone who wants to share links more effectively.

## Features
- Shorten your URLs with a 64-bit hash string of 7 characters.
- Save your URLs for later use.
- Delete or edit your URLs anytime.
- Generate QR codes for your shortened links.
- View analytics such as the number of clicks and the browser type.

## Tech Stacks
MongoDB, JavaScript, Node.js, Express.js, React.js, Redux, RESTful APIs, Chart.js, HTML, CSS

## How it works
When a user shortens a URL, a 64-bit hash string of 7 characters is generated randomly. The system then checks if the generated hash is already present in the database. If it is not unique, the process is repeated until a unique hash is generated. The long URL and the hash are then saved in the database. When a user clicks on the shortened URL, they are redirected to the original URL.


## Installation
To run the application, you'll need to have Node.js and MongoDB installed on your machine. Follow the steps below to get started:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run npm install to install the necessary dependencies.
3. Start the server by running npm start.
