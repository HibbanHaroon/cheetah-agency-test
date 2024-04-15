# Todo-List App

A web application which helps you track your day-to-day tasks and achieve them to accomplish your goals. 

P.S. I got this wonderful opportunity to apply for CheetahAgency and I made it through the interview stage. I have worked on and developed this Todo List App for the skill assessment test. :)
## Features

- A task checklist to track your daily tasks.
- A task checklist which you can minimize, behaves like an Accordion.
- Tasks can be drag and dropped to prioritize your checklist. 
- Tasks are stored, so you don't lose the track of what you want to accomplish.


## Tech Stack

- Frontend : [Next.js](https://nextjs.org/), [Upstash Redis](https://upstash.com/)
- Frontend Packages : [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd), [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
- Backend : [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/atlas)
- API Documentation : [Swaggers](https://swagger.io/)
- API Testing : [Thunder Client VS Code Extension](https://www.thunderclient.com/), [Insomnia](https://insomnia.rest/)
## Approach

### 1. Frontend: 
- I started with setting up the basic environment of the Next.js such as placing the assets in the public directory, adding colors styles in the tailwind.config file. 
- Then, I went in sequentially implementing the Profile Picture Component, Textfield Component, Todo Accordion Component, Task Component. Created components as to segregate the code as much as possible and so that they can be reused easily in future projects.
- Then, I created Context Provider using react's createContext, and useContext. This was essential to manage the state of taskList across different components. 

### 2. Backend
- After finishing up the [initial Frontend version](https://github.com/HibbanHaroon/cheetah-agency-test/releases/tag/frontend), I moved on to developing the Backend using Express and MongoDB.
- Firstly I setup the environment for Express and connected MongoDB with the Express app. Further, I added the TaskSchema to my Backend. 
- Then, I started creating the CRUD Operations on the Database using GET, POST, PUT, and DELETE. Tested these APIs using Insomnia. 
- Then, I configured and modified the structure of the project and use routes and controllers to segregate and improve the code. Then, I started working on the [Swaggers Documentation](https://todo-list-api-baq9.onrender.com/docs) for the API. 
- Modified some issues for the deployment and then [deployed the API](https://todo-list-api-baq9.onrender.com/) on render.

### 3. Integration
- Integrated the CRUD Operation from the Backend in lib/services.js in my Next.js app. 

### 4. Further work on Frontend 
- Added a utility function to [convertDateTime](https://github.com/HibbanHaroon/cheetah-agency-test/blob/main/src/utils/convertDateTime.js) from 2024-04-13T02:10:59.574Z to 13/04/2024, 15:59:57 to render on frontend. 
- Implemented Drag n Drop functionality for dragging Tasks using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd) package. 
- Added Toast Messages for Success and Error messages using [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
- Added Transitions to elements, Added Favicon
- Utilized Redis via Upstash to store order of the task list to render when user reorders the list. I opted to store the order in Redis as it didn't quite fit me storing that in the database plus making a DB request each time user reorders the list didn't sit right with me. 
- Deployed the [Frontend](https://cheetah-agency-test-oi7b8wd7d-hibbanharoons-projects.vercel.app/) on Vercel. 
## Lessons Learned

I learnt a lot while building this project, a few things are below:
- This was the first time I worked on Next.js and believe me it was an amazing experience to learn it, it's not so quite different from React but I really loved it's full-stack potential of creating APIs inside the Next project. I learned a bit about it, but didn't use it as the said requirement of using Express and also to keep frontend and backend separate. Hopefully, I'll use it in my next projects.
- React-Beautiful-DND helped a lot in making the drag and drop functionality to reorder the goals in the list. Took me a lot of time to understand the working of it but I made it work. 
- react-hot-toast to display the error and success messages. 
- Using MongoDB was also my first time, as I had prior experience with NoSQL DBs such as Firebase, so this wasn't so different but still a good learning experience. 
- Using Redis was my first time, I tried using Redis also to cache data before reaching the Database but that slowed my app down, so I didn't commit the code. But, maybe that was me using it incorrectly. However, it did help me a lot in storing the order of the task list there. 

## Demo

NOTE: If you're using this on a fresh day, there might be a 30 seconds initial delay when adding a task, as the Backend is deployed on Render, the server goes to sleep after 30 minutes inactivity.

[![Watch the Demo](https://img.youtube.com/vi/vylDUN3rMcw/maxresdefault.jpg)](https://youtu.be/vylDUN3rMcw)


## Deployed URLs
- [Todo List App](https://cheetah-agency-test.vercel.app/)
- [Backend API](https://todo-list-api-baq9.onrender.com/docs)
## Run Locally

Clone the project

```bash
  git clone https://github.com/HibbanHaroon/cheetah-agency-test.git
```

Go to the project directory

```bash
  cd cheetah-agency-test
```

Install dependencies

```bash
  npm install
```
Create a build

```bash
  npm run build
```

Start the server

```bash
  npm start
```
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary - Default | ![#7c6f5a](https://via.placeholder.com/10/7c6f5a?text=+) #7c6f5a |
| Primary - Dark | ![#968c7b](https://via.placeholder.com/10/968c7b?text=+) #968c7b |
| Primary - Light | ![#beb7ad](https://via.placeholder.com/10/beb7ad?text=+) #beb7ad |
| Secondary | ![#d8d4ce](https://via.placeholder.com/10/d8d4ce?text=+) #d8d4ce |
| Neutral - Default | ![#ded4cb](https://via.placeholder.com/10/ded4cb?text=+) #ded4cb |
| Neutral - Light | ![#ece9e4](https://via.placeholder.com/10/ece9e4?text=+) #ece9e4 |

## Screenshots

![Website UI](https://i.imgur.com/6HEE4zi.png)


## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/docs/)
- [Swaggers Documentation](https://swagger.io/docs/specification/basic-structure/)
- [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd)
- [Heroicons](https://heroicons.com/outline)
- [CRUD APIs in Express App](https://www.youtube.com/watch?v=_7UQPve99r4&ab_channel=freeCodeCamp.org)
- [Understanding state management in Next.js](https://blog.logrocket.com/guide-state-management-next-js/)
- [How to use Redis Caching for Incredible Performance](https://www.youtube.com/watch?v=-5RTyEim384&t=325s&ab_channel=Joshtriedcoding)
