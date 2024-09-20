# Formik and Yup Form Validation

This project is a simple form built with React, Formik, and Yup for form handling and validation. It demonstrates basic user input validation including fields like name, email, password, and terms agreement.

## Features

- Form handling using **Formik**.
- Validation schema with **Yup**.
- Custom input validation for name, email, password, and password confirmation.
- User must accept the terms and conditions before submitting.
- Styled with basic **CSS** for a clean user interface.

## Project Structure

`
.
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
└── README.md
`

Technologies Used
React for building the user interface.
Formik for form handling.
Yup for form validation schema.
CSS for styling.
Installation and Setup
Clone the repository:


git clone https://github.com/sriram1224/Formik_Yup.git
Navigate to the project folder:


cd Formik_Yup
Install the dependencies:


npm install
Run the app:


npm start
Open your browser and navigate to http://localhost:3000 to view the app.

Usage
Fill out the form with valid details:

Name: Required.
Email: Must match regex@gmail.com.
Password: Must be rishiMe@199.
Confirm Password: Must match the password.
Terms and Conditions: Must be checked.
The submit button will be enabled when all fields are valid.

Deployment
To deploy the app:

Ensure you have committed your changes:


git add .
git commit -m "your commit message"
Push the code to GitHub:


git push -u origin main
The app is now available in your GitHub repository: Formik_Yup.







