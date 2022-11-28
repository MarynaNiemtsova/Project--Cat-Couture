[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9181040&assignment_repo_type=AssignmentRepo)
# 03 Project - Cat Couture

**Contents:**

- [03 Project - Cat Couture](#03-project---cat-couture)
  - [Assessment details](#assessment-details)
  - [Scenario](#scenario)
  - [Brief](#brief)
    - [Architecture Diagram](#architecture-diagram)
  - [Getting Started](#getting-started)
  - [Instructions](#instructions)
    - [Part A - Planning](#part-a---planning)
    - [Part B - Tests](#part-b---tests)
    - [Part C - Development Process](#part-c---development-process)
    - [Part D - User Experience](#part-d---user-experience)
    - [Part E - Database Diagram](#part-e---database-diagram)
    - [Part F - Fix Warnings](#part-f---fix-warnings)
    - [Part G - Pagination](#part-g---pagination)
    - [Part H - Content Access](#part-h---content-access)
    - [Part I - OpenAPI](#part-i---openapi)
    - [Part J - Deploy The App](#part-j---deploy-the-app)
    - [Part K - Code Quality](#part-k---code-quality)

---

## Assessment details

- [Level 5 Learning Outcomes](./docs/learning-outcomes-l5.md)
- [Level 6 Learning Outcomes](./docs/learning-outcomes-l6.md)

---

## Scenario

Your tech lead has become tied up dealing with last minute issues on another project, and has asked you to step in and complete a piece of work for one of your loyal clients, “Cat Couture”.

Cat Couture is an online shop that specializes in the latest cat fashion. The client has asked for:

- A pagination feature, so that their customers can better view and link to the increasing variety of costumes that the shop now stocks
- An area of the site where their administrator can to log in and:
  - See the number of cat costumes in each product category that the shop sells
  - See the number of different products that are on promotion

Your tech lead has also warned you about some existing technical debt that you will need to fix.

---

## Brief

Implement the requested functionalities for stakeholders of the Cat Couture website, using the new full stack skills and development best practices you have learned.

### Architecture Diagram

![img](./diagrams/brief/cat-couture-architecture-diagram.png)

---

## Getting Started

**To run the app:**

```zsh
docker-compose up --build
```

**To run the server-side tests:**

```zsh
docker-compose -f docker-compose.test.yml up --build
```

<sup>Note: You will notices that some of the tests will fail. This is intentional.</sup>

**To run the client-side tests:**

```zsh
cd client
npm install
npm test
```

---

## Instructions

### Part A - Planning

<details>
  <summary>Instructions</summary>

Read through this project and get an idea of work that you will need to implement.

To plan, organize and prioritize your work you will use GitHub Issues and a GitHub Project board. You do not need to implement each project part in the sequential order of Parts B-K. You will need to break down your work into small, manageable pieces. 

You may end up with several GitHub Issues that make up one project part (eg. breaking down the Pagination section into several issues), and issues which contain work from a combination of the different project parts (eg. one issue containing both testing requirements and implementation of functionality).

For test cases in your GitHub Issues for the implementation sections - remember a test case isn't necessarily limited to a unit/integration test. For example a test case could be manually checking the browser for design responsiveness or checking your deployed url html/css through the w3c validators. 

**Acceptance criteria**

1. Each piece of work required (with the exception of the development process section) is captured in a [GitHub Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues).
2. A [GitHub Project board](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) is used to visualize your work AND is connected to your project repository.
3. A maximum of one GitHub issue is _In Progress_ at any given time. 
4. Each GitHub Issue contains an acceptance criteria. The implementation sections of the project contain test cases 
5. The acceptance criteria/test cases for any GitHub issues involving Pagination need to use the GIVEN, WHEN, THEN format.

</details>

---

### Part B - Tests

<details>
  <summary>Instructions</summary>

Your tech lead has already added some tests in anticipation of the new functionality being implemented. Check that these tests pass once your work on the shop has been completed. You are also allowed to modify the existing tests as long as they are meaningful changes. 

To improve the maintainability of the application, implement the todo Unit Tests and Integration Tests.
Remember this section can be broken up and combined with various other GitHub issues.  

**Acceptance criteria**

1. All client-side todo automated tests are meaningful, correctly implemented and pass.
2. All client-side pre-existing automated tests are meaningful, correctly implemented and pass.
3. All server-side todo automated tests are meaningful, correctly implemented and pass.
4. All server-side pre-existing automated tests are meaningful, correctly implemented and pass.
</details>

---

### Part C - Development Process

<details>
  <summary>Instructions</summary>

To avoid any waste for your workplace and technical debt for the client, it is important that you adhere to good development practices whilst working on the costume shop.

**Acceptance criteria**

1. [Meaningful and frequent commit messages](https://reflectoring.io/meaningful-commit-messages/), demonstrating progression of development.
2. A separate branch is used for each GitHub Issue you work on.
3. Pull requests are created for each GitHub Issue and merged into the `main` branch.
4. All [pull requests include a description](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/) explaining the changes made and have the tech lead and teaching assistant(s) added as [reviewers](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
5. Pull requests have comments added to ask for help/feedback, if needed. A clear description of any issues is provided. If help/feedback is needed then the teaching team has been mentioned with the @ symbol. 
6. You should acknowledge all feedback given on pull requests and action the feedback given appropriately. 
7. The project is submitted correctly in GitHub with code merged to the `main` branch before the deadline. The project is turned in on Google Classroom.
8. All completed GitHub Issues have been closed. Any unfinished or in progress issues remain open. 

**NOTE** for AC6  If you do not request/receive help/feedback you will not lose marks here. If you implement changes based on feedback received that is considered acknowledging feedback given.

</details>

---

### Part D - User Experience

<details>
  <summary>Instructions</summary>

To improve the user experience design wireframes for:

1. The product page, taking into account the layout required for pagination and `on promotion` products.
2. The dashboard page where the admin can:
   - See the number of different products in each product category.
   - See the number of different products that are on sale.
3. Use your wireframes when you implement and style the app.

**Acceptance criteria**

1. Wireframes are created. Screenshots or images of the wireframes are added to the [wireframes folder](./wireframes/wireframes.md). The wireframes consider different breakpoints for responsive design for mobile and desktop sizes.
2. The products on the product page are visually laid out in a grid-like arrangement.
3. On the product page the products on promotion "stand out" from the non-discounted products.
4. The web application is 
  using CSS and is responsive.
5. The design layout matches the wireframes, including responsive design.
6. There are no violations of [design principles](https://www.youtube.com/watch?v=a5KYlHNKQB8).
7. The HTML generated from the React app is [valid](https://validator.w3.org/#validate_by_input) and [semantically correct](https://html.com/semantic-markup/).
8. The CSS is [valid](https://jigsaw.w3.org/css-validator/#validate_by_input). Class names are meaningful. No unused CSS rules or properties are left in the project.

</details>

---

### Part E - Database Diagram

<details>
  <summary>Instructions</summary>

To improve the developer experience and maintainability of the shop, create an Entity-Relationship Diagram which accurately reflects the database schema.

**Acceptance criteria**

1. A database diagram is created. A screenshot or an image of the diagram is added to the [diagrams folder](./diagrams/database_diagram.md]).
2. The database diagram accurately reflects the database schema.

</details>

---

### Part F - Fix Warnings

<details>
  <summary>Instructions</summary>
  
Unfortunately, there appear to be some warnings showing up in the terminal and browser console when the app is run. Raise a bug in GitHub to address the problems. Prioritise and fix it accordingly.

**Acceptance criteria**

1. Bugs addressing each of the warnings in the terminal and the browser console are raised via GitHub Issues.
2. Each bug issue contains a detailed description of the problems that are occurring.
3. Each bug issue contains acceptance criteria of how it will be known when the problems are fixed.
4. The problems have been fixed and the bug GitHub Issues have been closed.

</details>

---

### Part G - Pagination

<details>
  <summary>Instructions</summary>
  
Implement pagination. Fortunately, your tech lead had already made a start on the pagination and completed some code.

**User Story**

- **As a** cat fashion enthusiast
- **I want** to see only some of the cat costumes first and use pagination to navigate through the rest of the cat costumes
- **So that** I am able to easily browse through the list of cat costumes

**Acceptance criteria**

- GIVEN that the cat costume shop has products,
  1. WHEN a user goes to the main products page, THEN the pagination control will be displayed.
  2. WHEN a user navigates to the first page of the products page, THEN the previous/back button of the pagination control will be disabled.
  3. WHEN a user goes to the main product page, THEN the current page will be highlighted in the pagination control.
  4. WHEN the user navigates to the second page of the main product page, THEN the previous/back button of the pagination control will be enabled.
  5. WHEN the user navigates to the last page of the main product page, THEN next button of the pagination control will be disabled.
  6. WHEN the user navigates to the next page of the main product page, THEN the previously displayed 10 products will not be displayed.
- GIVEN that the GET /products route exists,
  1. WHEN the client sends a request for a specific number or page of products which are valid as per the API spec, THEN return status 200, a correct list of products and information about pagination.
  2. WHEN the client sends a request for a specific number or page of products which are not valid as per the API spec, THEN return status 400 and an appropriate error message.

</details>

---

### Part H - Content Access

<details>
  <summary>Instructions</summary>
  
Make sure that only a logged in user who has `read:reports` permission can access the Dashboard page reports. Fortunately, your tech lead had already made a start on the dashboard page and completed some code.

**User Story**

- **As a** shop administrator
- **I want** to view information about my products
- **So that** I can manage my business

**Acceptance criteria**

1. Users who are not logged in are not able to see the Dashboard page.
2. Users who have the `read:reports` permission are able to see the reports in the Dashboard page.
3. Users who do not have the `read:reports` permission are not able to access the reports through the `/reports` endpoint or see the reports when they visit the Dashboard page.

</details>

---

### Part I - OpenAPI

<details>
  <summary>Instructions</summary>
  
To improve the developer experience and maintainability of the API, update the [OpenAPI spec](./server/apispec.yaml) file to match the requested functionality of the API.

**Acceptance criteria**

1. The OpenAPI definition file contains all information about the requested functionality of the `/products` endpoint. The OpenAPI definition file includes all information about the pagination query parameters and the content of the 200 successful response.
2. The OpenAPI definition file contains all information about the requested functionality of the `/reports` endpoint. The OpenAPI definition file includes all information about the content of the 200 successful response. The OpenAPI definition file includes all information about the 401 and 403 client error responses and the 500 server error response.
3. The OpenAPI spec file includes the URL information of the production API server.
4. There are no validation problems.

</details>

---

### Part J - Deploy The App

<details>
  <summary>Instructions</summary>
  
**User Story**

- **As a** cat fashion enthusiast
- **I want** to access the web page
- **So that** I can see what cat costumes I am able to purchase

**Acceptance criteria**

1. GIVEN that the application is deployed, WHEN the user types the web app URL in the browser, THEN the web app is loaded.
2. The deployed application works as it should, with the same behaviour as the development application.
3. The public URL to your deployed app has been added into [url-of-my-app.txt](./url-of-my-app.txt).

</details>

---

### Part K - Code Quality

<details>
  <summary>Instructions</summary>

Your Tech lead has stressed the importance of the quality and maintainability of the code in your project due to the vast number of clients that your business looks after. There is no time available for you to go back later and clean things up.

**Acceptance criteria**

1. Code uses the repository design pattern so that it is easy to maintain and reuse.
2. All code is formatted using Prettier.
3. Code is logical and easy to read and understand.
4. Function and variable names are meaningful, useful, and consistent.
5. Comments are added, if needed, following the rule of "Code Tells You How, Comments Tell You Why".
6. There is little to no repetition in logic.
7. No warnings, errors, bugs or syntax problems.
8. No unused code is left in the project.

</details>

---
