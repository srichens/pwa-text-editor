# Progressive Web Application Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

## Bootcamp Week 19 Challenge
This week's challenge was to refactor starter code to build a single-page text editor that runs in the browser, meets PWA criteria, includes data persistence for redundancy, and also functions offline. The requirements included the following:

1. Use IndexedDB to store and get data.
2. Bundle the JavaScript files using webpack.
3. Generate a manifest file from the webpack.
4. Use workbox to create a service worker that caches assets.
5. Ensure the application works offline and can be installed as a PWA.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Process Highlights](#process-highlights)
4. [License](#license)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Installation
This app is deployed on Heroku, so it can be used solely in the browser. But if running from the command line, it requires Node.js, npm, Express.js, and idb.

## Usage
1. From the command line, run npm i and then npm start to create the dist files, and then open the indicated port in the browser.
2. When in the application on the browser through Heroku or the cli command, click on the body of the text editor to type notes.
3. Click off the text editor body and refresh the page - your notes will persist.
4. Open the console, go to the Application tab, and click into IndexedDB under storage, go into the jate database and refresh the database to see the text that was just entered.
5. The text will also be saved in local storage.
6. To see the application working offline, from the console, click the Network tab and select offline from the dropdown menu. The entered text will persist and more can be added and will be saved.
7. The application can also be downloaded by clicking the install button in the upper lefthand corner.


[*LINK TO DEPOLOYED PWA TEXT EDITOR APPLICATION*](https://pwa-text-editor74.herokuapp.com/)
![Screenshot 2023-04-26 at 5 25 17 PM](https://user-images.githubusercontent.com/117301473/234716097-868fdfee-5181-474f-a906-3968a4ac44e4.png)

## Process Highlights

1. One of the most difficult parts of this challenge was that the data persistence was so good, it was easy to think changes or fixes that I made didn't actually happen or work. 
2. A specific challenge was that after compiling all the code that I thought would have basically completed the app, the JATE header was not showing up. I could see on the editor.js file that there's a setValue function that would load either the database data, the local storage data, or the header, but there was a error saying that setValue wasn't a function because it's a split method and could only work with a string (the error was "e.split is not a function"). I worked with my tutor on that and found that I was returning the full "result" from the database, which was an object, rather than just the the value, or content as I named it. So the error went away when I returned result.content instead. 
3. Another thing that wasn't working was the data was not persisting offline. That's because, as I understood it working with my tutor, I needed to assign the content an id of 1 so that it would always overwrite previous versions and only have one version to draw on. 
4. My tutor also helped with the favicon showing up - just for fun, since it didn't seem to be a requirement.
5. In the end, this assignment started off seeming pretty boilerplate, but then had some interesting problems that made it more engaging.

## License
This product is licensed under MIT.

## Contributing
If you would like to contribute to this application, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

## Questions
If you have any questions, please contact me at sarahgrichens@gmail.com or view my projects at https://github.com/srichens.