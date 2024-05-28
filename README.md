
# Scanned.page -

Welcome to Scanned.page, this project is created for showing the landing pages while creating and after created the QR Code in https://online-qr-generator.com.
The Online QR Generator is a easy-to-use tool for creating QR codes With this website, you can generate QR codes for any URL, PDF, Menu, Business, Images, Vcard, List of Links, Video, WIFI, Mp3, App, Coupon and then download or share the code with others.




## Tech Stack

**Client:** React, Redux, TailwindCSS


## Run Locally

Clone the project

```bash
  git clone https://github.com/3waytechnologies/scanned.page.git
```

Go to the project directory

```bash
  cd scanned.page
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## How it is connected with qr-new?

While creating the QR code in qr-new, the live preview is an iframe where we are sending the data to scanned.page via parameters in the URL and showing it as a preview.

This repository also includes components which can be used to create a fully functional landing pages as per user input.

### Logics behind it 
- Assigning 1 unique id for each while creating the QR code in Step 2.
- Storing the user input data to database againist this unique id.
- Rendering the iframe on every user input with src="https://scanned.page/<unique id>"
- There is one api created on qr-new which send the data of user inputs by passing the unique id from the database.
- Rendering the page as per the data recieved from API.

## Deployment

### Auto deployment on Vercel

To deploy this project just Push or Merge the code to main branch 

```bash
  git push origin main
```# scan-page
# scan-page
