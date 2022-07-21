# Interview Scheduler

# ![Interview Scheduler](https://github.com/ukflava/scheduler/blob/master/public/images/ScedulerLogo.png)

<table>
<tr>
<td>
 Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. We combine a concise API with a WebSocket server to build a realtime experience.
</td>
</tr>
</table>

<ul>
<li>Interviews can be booked between Monday and Friday.</li>
<li>A user can switch between weekdays.</li>
<li>A user can book an interview in an empty appointment slot.</li>
<li>Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.</li>
<li>A user can cancel an existing interview.</li>
<li>A user can edit the details of an existing interview.</li>
<li>The list of days informs the user how many slots are available for each day.</li>
<li>The expected day updates the number of spots available when an interview is booked or canceled.</li>
<li>A user is presented with a confirmation when they attempt to cancel an interview.</li>
<li>A user is shown an error if an interview cannot be saved or deleted.</li>
<li>A user is shown a status indicator while asynchronous operations are in progress.</li>
<li>When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).</li>
<li>The application makes API requests to load and persist data. We do not lose data after a browser refresh.</li>
</ul>

## Final Product Live
![Interactive Screenshots](https://github.com/ukflava/scheduler/blob/master/public/images/Animation.gif)


## Setup

1. Clone project to your local machine

2. Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Database Setup
1. Clone repository onto your local device.
```sh
https://github.com/lighthouse-labs/scheduler-api
```
2. Install dependencies using the `npm install` command.
3. Follow Readme Instructions



## Built with 

- [React](https://reactjs.org/) 
- [Webpack, Babel](https://reactjs.org/) 
- [Axios](https://reactjs.org/) 
- [Storybook](https://reactjs.org/) 

## Tested with 
- [Testing Library](https://testing-library.com/) 
- [Jest](https://jestjs.io/en/) 
- [Cypress](https://www.cypress.io/)


## Dependencies (current version)

    "axios": "^0.27.2",
    "classnames": "^2.2.6",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.4.4"



