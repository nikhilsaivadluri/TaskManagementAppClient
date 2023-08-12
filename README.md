# Getting Started with Task Management Client

Welcome to the Task Management Client application. This guide will walk you through the steps to run the app on your local machine.

## Installation

1. First, make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. Clone this repository to your local machine using the following command:
   ```sh
   git clone https://github.com/nikhilsaivadluri/TaskManagementAppClient.git
3. Go to TaskManagementAppClient folder
   ```sh
   cd TaskManagementAppClient
4. Install Node modules using below command
   ```sh
   npm install
5. Make sure TaskManagement Server running, by default server will be running in localhost:3000
6. If backend server not running on localhost:3000, then change BASE_API_URL to server url in /src/Config/constants.js
7. Run and Start Client 
   ```sh
   npm start
8. Created one user to access the task details, below are credentials
   ```sh
   UserName: admin@testUser.com
   Password: admin@2023
