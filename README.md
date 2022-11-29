
# Project - Cat Couture

https://cat-couture-static-bdx0.onrender.com/

![img](./wireframes/screen-shot-1.png)
![img](./wireframes/screen-shot-2.png)

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
