# AngularJS Render Info Table Application

## Requirements

Create a simple web application that meets the following requirements:

The app should have a single page
It should be build using HTML/CSS/JS only.
Use the following frameworks:
  Zurb Foundation (http://foundation.zurb.com/)
  Angular.js (https://angularjs.org/)
  any other framework / library of your choosing

Create a usersController (Angular controller) that (when the page loads) makes a request to the following Users JSON-REST API:
Users API: http://jsonplaceholder.typicode.com/users (GET request)
When the response is received, render a table that shows the following fields:
  ID
  Name
  Username
  Email
The table should have headers (as specified above)

You should use Zurb’s grid and tables

When a user clicks on a row, a reveal modal should pop up and show the specific user’s full details including:
  address (extra points for placing the address on a google map)
  phone
  website
  company

the page should be mobile friendly:
on mobile devices (small screen resolution) hide the Username and Email fields: use these visibility classes

