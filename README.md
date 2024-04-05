# 👥🤝 Project - Jointure Platform

![Jointure Logo](./public/img/jointure-logo.png)

Jointure is a platform that automates collaborations between brands from various sectors, facilitating seamless interactions and partnerships. This README provides an overview of the project's structure, technologies used, features, installation instructions, and contribution details.

## 📌 Requirements
- Visual Studio Code
- Node.js installed on the computer

## 🚀 Technologies Used:

- Frontend:
  - Node.Js -> ^20.0.0
  - Next.js -> 14.1.4
  - React.js -> v. 18.0.0
  - Tailwind CSS -> 3.3.0
  - Material-UI (MUI) -> 5.15.11
  - Axios -> 1.6.8
  - Jest -> 29.7.0
  - Cypress -> 13.7.2
- Backend:
  - PHP -> ^8.0
  - Laravel -> ^10.0.0
  - PHPUnit -> ^7.1

## 📁 Frontend File Structure:

- **.next:** Auto-generated files by Next.js during the build process.
- **/node_modules:** Dependencies managed by npm.
- **public/:** Static files accessible directly from the browser.
- **src/:**
  - **/app:**
    - **/admin:**
      - **/login:** Login related components and pages.
      - **/register:** Register related components and pages.
      - **/marketplace:** Components and pages related to the marketplace.
      - **/newcollab:** Components and pages related to creating a new collaboration.
      - **/inbox:** Components and pages related to the user's inbox.
    - **/components:** Reusable UI components used across the application.
      - **/MUI:** Material-UI components.
    - **/services:** Axios API integration and other services.
  - **/pages:** Main application pages.

## 📚 Features:

- **Marketplace:** Display collaborations from various users.
- **User Authentication:** Login and registration functionalities.
- **Create Collaboration:** Users can create and publish collaboration posts.
- **Inbox:** View incoming and pending collaboration proposals.
- **Search Functionality:** Search collaborations by name.
- **Responsive Design:** Optimized for desktop and mobile devices.

## ⚙️ Installation
This repository is the Frontend where the visual part of the website is located. To install it on your computer, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/octocodevs/jointure-frontend.git
    ```
2. Put in the terminal within the project
    ```bash
    cd jointure-frontend
    ```
    ```bash
    npm install
    ```
3. To open and see the website in the terminal you have to enter
    ```bash
    npm run dev
    ```

> [!IMPORTANT]
>
> ## 🚨 Backend Repository
This Frontend repository can be used with any Backend. Here is the link to our Backend repository if you want to use it with this Frontend:

🔗 [Backend link ](https://github.com/octocodevs/jointure-backend) 🔗


## 🧪 Running Tests

To run tests, run the following command

   ```bash
   npm test
   ```

## Demo

![Login view](./public/img/login.png)
![Marketplace view](./public/img/marketplace.png)
![Profile view](./public/img/profile.png)


## 👩‍💻 Developers

**Front-end Team:**

Stephanie Céspedes - [Linkedin profile](https://www.linkedin.com/in/stephanie-cespedes/)

Grecia Landazuri - [Linkedin profile](https://www.linkedin.com/in/grecialh/)

Carolina Dela - [Linkedin profile](https://www.linkedin.com/in/carolina-delfa-silvestre/)

Vicki Robertson - [Linkedin profile](https://www.linkedin.com/in/vickirobertson/)

Gabriela Irimia  - [Linkedin profile](https://www.linkedin.com/in/gabriela-irimia/)

**Back-end Team:**

Zohra Bellamine - [Linkedin profile](https://www.linkedin.com/in/z-bellamine/)

Melissa Casola - [Linkedin profile](https://www.linkedin.com/in/melissa-casola/)

Laura Artaza -[Linkedin profile](https://www.linkedin.com/in/laura-artaza/)
