<p align="center">

&nbsp; <h1 align="center">Campus Companion</h1>

&nbsp; <p align="center">A unified full-stack platform to simplify and enhance campus management for students, faculty, and administrators.</p>

</p>



---



\## Overview



Campus Companion is a full-stack application designed to streamline campus operations.

It centralizes communication, attendance tracking, event management, and academic updates in one platform.

Built with modern technologies, it offers real-time synchronization, secure access, and a clean, responsive interface.



---



\## Features



\- User Authentication: Secure sign-in and role-based access for students, faculty, and admins.

\- Attendance Management: Real-time attendance tracking and updates.

\- Event Management: Creation, registration, and display of campus events.

\- Announcements: Faculty can post official notices visible to specific departments or globally.

\- Feedback \& Queries: Anonymous feedback and query submission for improved engagement.

\- Dashboard Analytics: Visual summary of attendance, performance, and participation.

\- Responsive Design: Optimized for desktop, tablet, and mobile devices.



---



\## Tech Stack



\### Backend

\- Java 21 with Spring Boot

\- Maven for dependency management

\- MySQL for persistent storage

\- Spring Security with JWT Authentication

\- RESTful APIs for frontend communication



\### Frontend

\- React.js for component-based UI

\- Tailwind CSS for modern styling

\- Axios for API integration



\### Development Tools

\- Git and GitHub for version control

\- Postman for API testing

\- Render / Railway / Netlify for deployment



---



\## Folder Structure



Campus-Companion/

│

├── backend/

│   ├── src/

│   ├── pom.xml

│   ├── target/ (ignored)

│   └── campus-companion/

│

├── frontend/

│   ├── src/

│   ├── public/

│   ├── package.json

│   └── node\_modules/ (ignored)

│

└── README.md



---



\## Installation and Setup



\### Prerequisites

\- Node.js (v18 or higher)

\- Java 21

\- MySQL Server

\- Maven



\### Steps



1\. Clone the Repository

&nbsp;  git clone https://github.com/sidhuthisside/Campus-Companion.git

&nbsp;  cd Campus-Companion



2\. Backend Setup

&nbsp;  cd backend

&nbsp;  mvn clean install

&nbsp;  mvn spring-boot:run

&nbsp;  The backend will start at http://localhost:8080.



3\. Frontend Setup

&nbsp;  cd frontend

&nbsp;  npm install

&nbsp;  npm start

&nbsp;  The frontend will start at http://localhost:3000.



4\. Database Configuration

&nbsp;  Update the following properties in

&nbsp;  backend/src/main/resources/application.properties:



&nbsp;  spring.datasource.url=jdbc:mysql://localhost:3306/campus\_db

&nbsp;  spring.datasource.username=root

&nbsp;  spring.datasource.password=your\_password



---



\## API Endpoints (Sample)



| Method | Endpoint | Description |

|--------|-----------|-------------|

| POST | /api/auth/login | Login user |

| POST | /api/auth/register | Register new user |

| GET | /api/events | Fetch all events |

| POST | /api/attendance/mark | Mark attendance |

| GET | /api/announcements | Fetch all announcements |



---



\## Screenshots



Add screenshots of the login page, dashboard, or event management page here for visual context.



---



\## Future Enhancements



\- Integration with cloud-based notifications

\- AI-powered student engagement insights

\- Role-specific analytics dashboards

\- Automated attendance using face recognition



---



\## License



This project is licensed under the MIT License.



---



<p align="center">

&nbsp; Developed and maintained by <strong><a href="https://github.com/sidhuthisside" target="\_blank">Sidhant Mattoo</a></strong>

</p>



