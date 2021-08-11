# Pizza Online App

## Table of contents
* [Overview](#overview)
* [Technologies](#technologies)
* [Setup](#setup)

## Overview
This is create-react-app based repository contains code for pizza online app

## Technologies
Project created with:
* React 17 (Component based UI View library)
* Redux (State management library)
* Redux-Saga (Middleware for asynchronous effect)
* Material UI (UI component library)


## Setup
To run the project locally:

### Prerequisites to Run the Project
* Node 10+

### Steps to run the application locally
* Clone the repo.
* Navigate to directory with package.json in terminal and run- ```npm install```
* run using- ```npm start```


## Code Structure

| Directory             | Description                                                    |
| ----------------- | ------------------------------------------------------------------ |
| src/actions | contains action type and actions |
| src/apis | contains HTTP and WS conntions |
| src/components | contains container and presentational components |
| src/reducers | index.js acts as a combine reducer |
| src/sagas | root saga registers different component based sagas |

### How to build?
Navigate to directory with package.json in terminal and run- ```npm run build```


