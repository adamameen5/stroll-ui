# Stroll Technical Assessment - Frontend

This repository contains the frontend React application for the Stroll Technical Assessment, developed by Adam Ameen.

## Setup and Running the Development Server

Follow these steps to set up and run the frontend development server:

1. **Download and Extract**  
   - Download the zip file of this repository.  
   - Extract the folder to your desired location.

2. **Open the Project**  
   - Open the extracted folder in Visual Studio Code.

3. **Install Dependencies**  
   - Open a terminal in Visual Studio Code and run the following command to install all necessary libraries and packages:  
     ```bash
     npm install
     ```
   - If the above command fails, try:  
     ```bash
     npm install --legacy-peer-deps
     ```

4. **Set Up the Backend API**  
   - This frontend requires the backend API to function. Clone and set up the backend project from the following repository:  
     [Stroll Backend Repository](https://github.com/adamameen5/stroll-backend)  
   - Follow the instructions in the backend repository's README file to set it up.  
   - Ensure the `API_BASE_URL` is correctly configured in the frontend project after setting up the backend.

5. **Start the Frontend Server**  
   - Once the backend is set up and the `API_BASE_URL` is configured, start the frontend development server by running:  
     ```bash
     npm start
     ```

## Notes
- Ensure the backend server is running before starting the frontend server.
- If you encounter any issues, double-check the backend setup and the `API_BASE_URL` configuration.

For any questions or issues, feel free to contact Adam Ameen.

## ⌚ What could have been done with a bit more time 

1. I would add form validations for a field like email.
2. Show user friendly error messages.
3. Show a success toast message after adding creating a Patient record or Prescription record.
4. Show the records in a table using pagination, adding search criteria and sorting.
5. Add a drop down to select the patient instead of entering the name manually.
6. Polish the look a little bit and all loading animations.

I think these small changes would make the front end look nicer and easier to use in users point of view.
