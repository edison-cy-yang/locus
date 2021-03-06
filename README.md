# Locus

## Getting Started

1. Create the `configKeys.js` by using `configKeysExample.js` as a reference: `cp configKeysExample.js configKeys.js `
   For the environment variables, you will need:
   - Amazon S3 bucket name, folder (keyPrefix), region, access key and secret key
   - API_URL address is in the form of 'http://localhost:8080/api/'
   - ROOT_URL points to 'http://localhost:8080/'
2. Install Expo with `npm install -g expo-cli`
3. Install dependencies: `npm i`
4. Run the server: `npm start`
5. Note that this app needs to be run with the backend server. You can find the API repository [here](https://github.com/AliceMathews/locus-api)

## Screenshots
![The home page with a list of categories](https://github.com/AliceMathews/locus/blob/readme/assets/screenshots/home.PNG)

![Photo upload page with tags produced by image recognition API](https://github.com/AliceMathews/locus/blob/readme/assets/screenshots/image_upload.PNG)

![Photo detail page with Google Maps and camera settings](https://github.com/AliceMathews/locus/blob/readme/assets/screenshots/photo_detail.PNG)

![Chat room for each photo](https://github.com/AliceMathews/locus/blob/readme/assets/screenshots/chat.PNG)
