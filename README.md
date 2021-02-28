# ngtask
## it's the Node Js API using express framework.

# Statement:
> Users can add tasks that they have to complete during the day and once the task is complete,
they can mark them as complete and store other key details such as the date of completion.
They can only delete a task if the task is not yet completed and mark them as deleted. 
List all the tasks for that day in chronological order and additionally give them an option to go through their past tasks(history) 
with inputs start & end date(time-range) & allow them to export the listed data to CSV/excel.

### List of all restfull endpoints
1. [post]http://localhost:3000/api/register                   --- to register user in task app
2. [post]http://localhost:3000/api/signin                     --- to sigin user with email id and password and return login token
3. [post] http://localhost:3000/api/task/                     --- to create task
4. [put]http://localhost:3000/api/task/makecompleted/:task-id ---to marke task completed.
5. [put]http://localhost:3000/api/task/makedeleted/:task-id   ---to marke task deleted, however task has not removed from the database.
6. [delete]http://localhost:3000/api/task/remove/:task-id     --- to remove the task completed from the database.
7. [get]http://localhost:3000/api/task/all/                   ---  get the list of All the tasks of particular user
8. [post] http://localhost:3000/api/task/history              --- get the list of All task has marked completed and can set filter with startdate and end date.
9. [get]http://localhost:3000/api/task/download               --- download the csv file of all the list task



### list of All the npm repository 
    - "bcrypt": "^5.0.1", -- To encrypt and decrypt user password we use bcrypt
    - "csv-writer": "^1.6.0", ---To generate csv file
    - "express": "^4.17.1",  ---Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications API
    - "joi": "^17.3.0", ---Joi is the library that help to validating the incoming json object like it username key should string and min length should be 5 and maximum length should be 7.
    - "jsonwebtoken": "^8.5.1", --To generate and validate token we use Json Web Token
    - "lodash": "^4.17.21", 
    - "mongoose": "^5.11.14"--- Mongoose is designed to work with mongo database. It provide almost all use full set of feature with them we can work on mongo db efficiently while developing API.
    - "winston": "^3.3.3"  ---Winston is designed to be a simple and universal logging library with support for multiple transports
