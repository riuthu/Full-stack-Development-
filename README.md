# Full-stack-Development-

1. Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The customer side was built as a traditional Express application using handlebar templates, the server assembles HTML pages and sends them to the browser, so every interaction triggers a full page reload. The administrator side, by contrast, is an Angular single page application that loads once and then renders and updates itself in the browser, exchanging only JSON with the API. 

2. Why did the backend use a NoSQL MongoDB database?

MongoDB stores data as BSON documents that behave like a JSON object, which map directly onto the JavaScript object used everywhere else in a MEAN stack, so there is no object relational translation layer to maintain. And the entire MEAN stack speaks JSON, and the data flows from the database to the browser in essentially the same shape the whole way through.

3. How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is independent data format, whereas JavaScript is a full programming language; JSON's syntax is borrowed from JavaScript object literals but it carries only data and requires keys to be double quoted strings. Angular frontend sends and receives JSON over HTTP, the Express API serializes trip and user data to JSON, and MongoDB stores documents in a JSON like form, BSON. That shared format is what lets the frontend and backend communicate without either side needing to know the other's implementation language.

4. Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Several stages involved refactoring, the static HTML site was converted into handlebars templates driven by JSON data; the data service was later refactored to call the live RESTful API instead of static files and in the security module. Reusable UI components were very critical to the Angular build, the trip card component is written once and rendered for every trip through *ngFor, and the add and edit forms share the same structure. The benefits are less duplicated code, consistent look and behavior, easier maintenance, and faster development.

5. Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In a full stack application the HTTP methods map to CRUD operations; GET, POST, PUT, DELETE, and each must be tested separately because they practice different logic and return different status codes. Endpoints are the specific API routes those methods act on, such as /api/trips, /api/login etc; I tested each in Postman to confirm it returned the correct data and status. Security adds another layer, protected endpoints require a valid JSON Web Token, so testing has to cover the auth flow itself logging in to obtain a token, sending it as a bearer header on protected requests, and confirming that requests without a token are rejected with a 401. A secured endpoint therefore cannot be tested in isolation; you have to authenticate, which reflects how a real client behaves.

6. How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course strengthened my ability to work across the full stack rather. I learned to build a complete MEAN application, modeling data with MongoDB and Mongoose, building RESTful endpoints in Express and Node, and creating a component based Angular SPA and to secure it with JWT based authentication. As a QA Analyst who already tests REST APIs and JSON payloads, understanding how these systems are built end to end makes me a stronger tester and a more versatile engineer, because I can speak to both how an application is constructed and how it should be validated. These skills full stack development, API design and testing, and application security are directly marketable for the roles I'm pursuing.
