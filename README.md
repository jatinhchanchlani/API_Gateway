API_Gateway
===========
I have implemented the server code for a generic gateway that can be used as a proxy to make HTTP calls to any REST API
----------------------------------------------------------------------------------------------------------------

###Desgin Approach

Have chosen Node.js to implement the project. Have used the following libraries:
* Express
* http-proxy

The API Gateway accepts any HTTP request i.e GET/POST/PUT/DELETE from the client, and then acts as a proxy and forwards the request to the target API.
Every request to the gateway expects a URL parameter named **url** which will have the value of the target URL.

###Note 
Authorization requirements to access standard API's like Twitter, Facebook have not been handled by the gateway as it will be a better option for the client to do it and not having the server to deal with it.

###Running the Application

Navigate to the root folder in the command prompt and type

npm start

The server starts on port 4000

###Usage and Testing the Application
I have used some existing REST services to test the application
* GET request

  54.69.156.195:4000/?url=http://54.69.156.195:8080/digiwallet/v2/users/DWS_USR-10001
  
  The **url** parameter should have the value of the target API (which will be sent by the client)

* POST request

  54.69.156.195:4000/?url=http://54.69.156.195:8080/digiwallet/v2/users
  { "email_id":"user5@gmail.com", "password": "user5", "name":"Jatin" }

* PUT request

  54.69.156.195:4000/?url=http://54.69.156.195:8080/digiwallet/v2/users/DWS_USR-10001
  { "email_id":"namechanged@gmail.com", "password": "pswdchan", "name":"Jatin" }

* DELETE request

  54.69.156.195:4000/?url=http://54.69.156.195:8080/digiwallet/v2/users/DWS_USR-10001/bankaccounts/DWS_ACC-10002

###
I have deployed the application on 54.69.156.195:4000 on my EC2 instance for testing purpose
