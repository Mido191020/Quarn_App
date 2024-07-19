Here's the updated README with the new features and project structure:

---

# Quran_App

## Project Overview
The Quran_App is a project aimed at providing a seamless and respectful digital experience for exploring the holy book of Islam. Whether you're a scholar, student, or simply seeking spiritual guidance, our app offers the tools you need for your journey.


## Screenshot
![Quran_App Screenshot](https://github.com/Mido191020/Quarn_App/blob/main/Screenshot%202024-07-19%20075652.png)


## Features

### Completed Tasks
- **Set Up Basic Routes:**
  - Created routes for accessing different parts of the Quran, including Surahs, Juz, and specific Ayahs.
- **Create Basic Controllers:**
  - Implemented controllers to handle requests and responses for each route, ensuring data is correctly fetched and displayed.
- **Develop Simple UI:**
  - Designed a user-friendly interface with navigation links to different sections of the Quran.
  - Implemented a basic layout for the homepage with links to Quran API, Juz page, Surahs page, and Ayah page.
- **Bookmark Feature:**
  - Implemented a feature allowing users to bookmark specific Ayahs.
  - Added a simple UI for managing bookmarks.
  - Integrated bookmark functionality into the controllers.

## Module Schema
We have organized the project into modules to ensure scalability and maintainability. Below is an outline of the module schema:

- **Routes Module:**
  - Contains route definitions for different endpoints (e.g., /quran, /juz, /surahs, /ayah).
- **Controllers Module:**
  - Contains controller functions that handle business logic for each route.
- **Views Module:**
  - Contains Pug templates for rendering HTML pages.
  - Includes a layout template and specific page templates for each section of the app.
- **Public Module:**
  - Contains static assets such as CSS, JavaScript, and images.

## Directory Structure
The directory structure for the project is as follows:

```
Quran_App/
├── .gitignore
├── app.js
├── bin/
│   └── www
├── combined.log
├── config.env
├── controllers/
│   ├── AyahController.js
│   ├── bookmarkController.js
│   ├── juzController.js
│   ├── surahController.js
├── convertCsvToJson.js
├── error.log
├── importData.js
├── middlewares/
│   └── logger.js
├── models/
│   ├── ayahModels.js
│   ├── bookmarkModels.js
│   ├── JuzModels.js
│   ├── surahModels.js
├── node_modules/
├── package-lock.json
├── package.json
├── public/
│   ├── images/
│   ├── javascripts/
│   │   └── bookmark.js
│   ├── stylesheets/
│   │   ├── output.css
│   │   └── style.css
├── README.md
├── routes/
│   ├── Ayahs.js
│   ├── Bookmarks.js
│   ├── home.js
│   ├── juz.js
│   ├── Surahs.js
├── src/
│   └── input.css
├── tailwind.config.js
├── The Quran Dataset.json
├── views/
│   ├── ayah.pug
│   ├── error.pug
│   ├── index.pug
│   ├── layout.pug
│   ├── search.pug
│   ├── surahDetail.pug
│   ├── surahList.pug
```

## How to Run

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Mido191020/Quran_App.git
    cd Quran_App
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the server:**
    ```bash
    npm start
    ```
4. **Access the app:**
    Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Future Plans
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

Thank you for using the Quran_App! We hope it aids you in your spiritual journey.

---
