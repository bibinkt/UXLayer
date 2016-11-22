# UXLayer -> API gateway -> Microservices

This initiative is basically to demonstrate the end to end application architecture including microservices,
API gateway and a powerfull frontend layer.

To configure & run it locally: follow the below steps

<h2>Install Node V6.9.1</h2>
1.	go to https://nodejs.org/en/download
2.	Select LTS [current release] to install the dependencies.
3.	Select your OS and click on installer

<h2>Install JAVA 1.8</h2>

<h2>Install Cassandra[NOSQL] V3.9.0</h2>
1.	go to https://academy.datastax.com/planet-cassandra/cassandra
2.	Click on installer based on your OS type

<h2>Setup Cassandra[NOSQL] . Execute below script</h2>
1.	get the DB script from https://academy.datastax.com/planet-cassandra/cassandra and execute in your local DB

<h2>For Running UX layer</h2>
1.	Clone the repo using git clone https://github.com/bibinkt/ProductService.git
2.	Run "npm install" to install the dependencies.
3.	Run "node server.js" to start the local web server
4.  If your Gateway & microservice server has not configured then plz point this application login flow to inbuild Fake server.
5.  To point to the fake response server , uncomment line number 62 & 130 from actions/AppActions.js

<h2>For Running API gateway</h2>
1.https://github.com/bibinkt/nodeAPIGateway/blob/master/README.md

<h2>For Running Microservices</h2>
 1. Go to https://github.com/bibinkt/ProductService/blob/master/ReadMe.md

<h2>If you are biginner in React & Redux then strongly recomand you to go thrugh below tutorial</h2>

1. NodeJS -> https://www.youtube.com/watch?v=-u-j7uqU7sI
2. ReactJS -> https://www.youtube.com/watch?v=-AbaV3nrw6E
3. Redux -> https://www.youtube.com/watch?v=DiLVAXlVYR0
4. ES6 [ECMAScript] -> https://www.youtube.com/watch?v=ZJZfIw3P8No

