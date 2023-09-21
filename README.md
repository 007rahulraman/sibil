# Project Setup

1. After download the project folder
2. Open the project directory and Open terminal
3. run - npm run install
4. After all the packages are installed
5. Then run - npm run start , to start a local server on your machine
6. after the command has finished executing, You primary browser should automatically open with a new tab.
7. Make sure to enable cors on the web browser while running the project in localhost.
8. Enable chrome extension "Allow CORS" from the chrome extension library.
9. If step 6 doesn't work , the you can manually open your choice of browser and hit localhost:3000/ url.

## Running Server-Side Rendering

1. Open project directory
2. Open terminal
3. run - npm run build
4. run - npm run ssr
5. Once step 4 is completed you should be a message which says "App is launched"
6. The server will be live a localhost:3001/
7. The app should work as expected.

## Libraries used

1. jotai for state management
2. TailwindCSS for adding styles/responsiveness
3. axios for making api call
4. react-image-carousel for showing the multiple images of a product

## Some exception

1. Some images are not available on the server, So some images might be seen as broken.
2. This will show file not find error in the console.
