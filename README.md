# Digi-X Engineering Internship Assessment

## Section 1:
You are tasked to build an online restaurant reservation platform.
1. Choose a front-end language/framework of your choice

- Svelte/React

2. Choose a back-end language/framework of your choice

- Django

3. Choose a database management system of your choice

- Relational - PostgreSQL

### Explanation
For front-end wise I chose Svelte or React which it ultimately depends on the client's requirements. If the complexity of the project is lesser and has less functional requirements I'd typically go for Svelte and otherwise React. The reasoning behind this is simple, React has an overwhelming advantage over Svelte in terms of community but development-wise I think Svelte is more intuitive and cleaner to write (especially the stores), its also faster so thats a plus. Otherwise, they are both component-based and the concepts are similar, so it all comes down to preference in this part. To put it simply, large-scaled projects = React, small-scaled projects = Svelte.

For back-end wise, I chose Django cause of multiple reasons. Firstly, User Authentication is easy to setup, hashing and permissions can be managed within, which means authenticating users into the online platform can be done relatively quickly and fairly secure. Its good for developing microservice APIs, since the scenario is an online restaurant reservation platform, its good to break the functional components (payment, authentication, reservation, etc) into microservices so the documentation is cleaner and more straightforward afterwards. Else than that, it has a CMS, its fast, its secure, and pretty nice to use.

DMBS wise I'd go for relational databases because the flexibility of a NoSQL database is not really needed here, I guess. Everything about the data is pretty consistent from the reservation to the users' information to be stored within a table.

## Section 2:
1. What is Github?

- In my understanding, Github is a platform for collaboration between developers and serves as a version control system (which uses git), you can create repositories or view other developer's public repositories for mutliple purposes. There are other platforms that uses git for version control as well such as Gitlab.

2. How does Github help developers?

- In my own experience, Github helps developers to share code/resources (open source) and help each other learn and progress in the developing game. Else than that, developers can also perform their CI/CD using Github Action and Github Projects helps sorting out tasks and timeline of the project through a Kanban. Github also helps with documentation and recording individual's contribution to the project through commits and pull requests. Lastly, your personal public repositories can also be forked and tested, where issues can be raised to help you improve your code base. 

## Section 3:

For this section, refer to "Assessments/2021/upload-extract-display/index.html", just open the index.html file in the browser and you should be able to upload zip files and extract the images within! Thanks for your precious time, if any issue please raise one :D
