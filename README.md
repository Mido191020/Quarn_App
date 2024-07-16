# Quran_App

## Project Overview

The **Quran_App** is a project aimed at providing a seamless and respectful digital experience for exploring the holy book of Islam. Whether you're a scholar, student, or simply seeking spiritual guidance, our app offers the tools you need for your journey.

## Features

### Completed Tasks

1. **Set Up Basic Routes**:
    - Created routes for accessing different parts of the Quran, including Surahs, Juz, and specific Ayahs.
    
2. **Create Basic Controllers**:
    - Implemented controllers to handle requests and responses for each route, ensuring data is correctly fetched and displayed.
    
3. **Develop Simple UI**:
    - Designed a user-friendly interface with navigation links to different sections of the Quran.
    - Implemented a basic layout for the homepage with links to Quran API, Juz page, Surahs page, and Ayah page.

### Module Schema

We have organized the project into modules to ensure scalability and maintainability. Below is an outline of the module schema:

1. **Routes Module**:
    - Contains route definitions for different endpoints (e.g., `/quran`, `/juz`, `/surahs`, `/ayah`).

2. **Controllers Module**:
    - Contains controller functions that handle business logic for each route.

3. **Views Module**:
    - Contains Pug templates for rendering HTML pages.
    - Includes a layout template and specific page templates for each section of the app.

4. **Public Module**:
    - Contains static assets such as CSS, JavaScript, and images.

### Directory Structure

The directory structure for the project is as follows:

```
Quran_App/
├── bin/
│   └── ... (bin scripts)
├── controllers/
│   ├── quranController.js
│   ├── juzController.js
│   ├── surahsController.js
│   ├── ayahController.js
│   └── ... (other controllers)
├── models/
│   └── ... (models)
├── node_modules/
│   └── ... (node modules)
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── ... (other public assets)
├── routes/
│   ├── index.js
│   ├── quranRoutes.js
│   ├── juzRoutes.js
│   ├── surahsRoutes.js
│   ├── ayahRoutes.js
│   └── ... (other routes)
├── src/
│   └── ... (source files)
├── views/
│   ├── layout.pug
│   ├── index.pug
│   └── ... (other views)
├── .gitignore
├── app.js
├── combined.log
├── config.env
├── convertCsvToJson.js
├── db.js
├── error.log
├── importData.js
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── The Quran Dataset.json

```

### How to Run

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Mido191020/Quran_App.git
    cd Quran_App
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm start
    ```

4. **Access the app**:
    Open your web browser and go to `http://localhost:3000`.

### Future Plans

- Enhance the UI/UX with more interactive elements.
- Add user authentication for personalized features.
- Implement a search functionality to quickly find specific verses or topics.
- Provide multiple translations and interpretations.

## Contributing

We welcome contributions to the project. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Thank you for using the **Quran_App**! We hope it aids you in your spiritual journey.
