# StudentsHandwriting

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.17.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# ✍️ Students Handwriting Generator (MVP)

## 🚀 Overview

Web application that converts typed text into handwritten-style PDF pages using user-uploaded handwriting samples.

## 🔑 Features

- JWT Authentication (Signup/Login)
- Credit-based system
- Handwriting sample upload
- Text → Handwritten PDF generation
- Razorpay payment integration
- Admin panel (users, credits, transactions)

## 🧱 Tech Stack

- Frontend: Angular 17 + Material UI
- Backend: Node.js, Express
- Database: MongoDB
- Payments: Razorpay
- PDF: PDFKit

## 🔁 Application Flow

1. User signs up (gets free credits)
2. Uploads handwriting sample
3. Types text & selects pages
4. Credits checked & deducted
5. Handwritten PDF generated
6. Low credits → Buy via Razorpay
7. Admin monitors all activity

## 🤖 AI Status

AI handwriting engine integration in progress.
Current version uses mock engine for demo & testing.

## ⏳ Future Work

- AI handwriting ML model
- Email verification
- User analytics
- Mobile responsive UI

## ▶️ Run Project

```bash
npm install
npm run dev
```
