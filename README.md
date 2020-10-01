## Project Details

### `Survey Tool`

Create a service that generates surveys based on user input, which are distributable via
randomly generated links and results are aggregated and visually displayed.

Solution focuses on full stack.

There isn't any special reason behind this challenge choice.I was going to complete Contact List challenge too but didn't
get much time due to some reasons. Will complete same if you want me to do and give time.

### `Survey Frontend`

Survey frontend is build using React JS.
canvasjs-react-charts package is used to display survey analysis in pie chart.
 
### `Survey Frontend`

Survey backend is build using Node JS.
Express framework and mongoose ORM is used in order to build the apis.

### `Survey Working flow`

1. When survey loads login page will get displayed
2. User can signup and login
3. After login, userid will be saved in local storage and survey form will get displayed in front of user.
4. After submitting survey(feedback) form,feedback will store in DB associated with corresponding user. user can see survey analysis on dashboard.
5. Dashboard will show feedback analysis in pie chart form. Also total no of users attended the survey and total no of users not attended the survey.

### `Left out things`
1. I could use redux.
2. Forget password functionality is not added.
3. Wanted to add JWT authentication for the user.
4. Could show user its own feeedback on dashboard analysis page.

I have code particulary proud of but i'm not supposed to share the organizations codebase with anyone.So couldn't share the links.

### `Public profile`
https://www.linkedin.com/in/bhairavi-yadav <br />
Also can check my profile and resume on naukri.com

### `Deployment details`
Survey frontend and backend both are hosted on Heroku.<br />
https://survey-react-frontend.herokuapp.com/