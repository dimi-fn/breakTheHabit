# Habit Tracker

Contributors: [OksAde](https://github.com/OksAde), [dimi-fn](https://github.com/dimi-fn), [warak3inab](https://github.com/warak3inab), [ArvinJhurry](https://github.com/ArvinJhurry)  

Contents 
==========================
* [Project Description](#project-description)
* [Process](#process)
* [Functionalities](#functionalities)
  * [Website Functionality](#website-functionality)
  * [Technical Requirements](#technical-requirements)
* [Installation & Usage](#installation--usage)
  * [Server](#server)
    * [Api Endpoints](#api-endpoints)
    * [Run the Server](#run-the-server)
    * [Stop the Server](#stop-the-server)
  * [Database](#database)
  * [Client](#client)
  * [Deployment](#deployment)
* [Technologies](#technologies)
* [Wins & Challenges](#wins--challenges)
* [Licence](#licence)

--------

# Project Description

This project is about building a habit tracker where users can post their habits and track their progress in achieving their habit goals.

--------

# Process

* [Used excalidraw.com for the initial website design ](https://github.com/dimi-fn/breakTheHabit/blob/main/client/img/excalidraw.png), [layout](https://github.com/dimi-fn/breakTheHabit/blob/main/client/img/layout.png)
* [Used kanban board via GitHub to record and track the project tasks](https://github.com/dimi-fn/breakTheHabit/projects/1)
* [Used /app.dbdesigner.net/ for drawing the db schema](https://github.com/dimi-fn/breakTheHabit/blob/main/client/img/schema.PNG)

-----

# Functionalities

## Website Functionality

* Users are able to login and register
* Users are able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose the frequency at which they want to track the habit 
* Users are able to track a habit and see their progress as long as they provide updates about their habit current state

## Technical Requirements

* Data is persisted on database
* Aim was: Minimum 60% test coverage with an aim of 80% 
    * result: 58% test coverage on the server (client test was not implemented)

--------

# Installation & Usage

## Server

### Api Endpoints

------

**Where** | **Method** | **What** |
---------------|---------------|------|
http://localhost:3000/auth/register |  `POST` | registers user |
http://localhost:3000/auth/login |  `POST` | user log in |
http://localhost:3000/users |  `GET` | gets all users |
http://localhost:3000/users/:id |  `GET` | gets user by user id |
http://localhost:3000/users  |  `POST` | creates user route |
http://localhost:3000/habits |  `GET` | gets all habits |
http://localhost:3000/habits/:id |  `GET` | gets habit by habit id |
http://localhost:3000/habits/user/:id |  `GET` | gets all habits per user id |
http://localhost:3000/habits |  `POST` | creates habit route |
http://localhost:3000/habits/:id |  `DELETE` | creates delete habit route |

------

### Run the Server

* Use the project files by cloning (with `git clone`) or by downloading the repo files
* Open a terminal, navigate to the root project directory and run `bash _scripts/startDevContainer.sh` to:
    * run the docker container which will install all npm packages and dependencies, will seed the database, and will run the server using nodemon
    * start the api and database services that will run and seed the PostgreSQL database
    * serve the server on port 3000 (http://localhost:3000)
* Similarly, run `bash _scripts/startTest.sh` to run the tests      

### Stop the server

* In order to just stop the server:
    * In the same terminal type `ctrl+c`, or
    * Open another terminal, navigate to the root project directory and run `bash _scripts/stopContainer.sh`
* In order to both stop the server and teardown by removing all running services in containers as well as removing volumes, run `bash _scripts/tearDown.sh`    


## Database

<p align="center">
  <img src="https://github.com/dimi-fn/breakTheHabit/blob/main/client/static/css/schema.PNG" alt="">
</p>         

To enter the PostgreSQL database:
* First have the docker running based on the commands of the 'server' section
* Open another terminal, navigate to the root project, and run:
    
        docker exec -it habit_tracker_dev_db psql -U habit_tracker habit

* You can execute any sql query based on PostgreSQL    


## Client

* Once server is running, open index.html file on browser by:
    * Navigating to http://localhost:8080 through the browser search bar, or
    * Using live server with VS Code: Right click on index.html in the client folder and select *Open with Live Server* (you might need to have installed the respective live server VS Code extention)        

## Deployment  

* Server is currently supported at `https://trackyourhabits.herokuapp.com/<api-endpoint>` but it is not working because the connection with the PostgreSQL has not been successful
* Client on Netlify can be found [here](https://track-your-habits.netlify.app/) although any interaction with the server will not work
* Therefore, navigate to the [installation](#installation--usage) section in order to run the client successfully having first run the server

--------

# Technologies

* GitHub
* Express.js, Node.js
* HTML, CSS, JavaScript
* Docker
* PostgreSQL

--------

# Wins & Challenges

## Wins

## Challenges

* Client test was not implemented
* Interacting with backend via frontend, and making use of the available routes and models in the API for client
* Deployment for server, db, and client together
  
-------

# MIT Licence

* [MIT Licence](https://github.com/dimi-fn/breakTheHabit/blob/main/LICENCE)
