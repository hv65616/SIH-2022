# Wizard-At Your Service

## Introduction

In a landscape with numerous Government, State, Private, and Deemed-to-be universities, there is a pressing need for a 
comprehensive system or portal that transparently displays university affiliations, authentic recognition status, and 
available programs. This platform proactively identify and highlight fake universities, ensuring the integrity
 of the educational ecosystem and empowering stakeholders to make informed decisions.

The primary objectives of this project are:

1. **Automated Data Submission:** HEIs (Higher Education Institutions) and universities can effortlessly submit their 
updated Gazette notifications, EoAs (Extension of Approval), and approval letters, along with details about the current
 intake capacity for approved courses and programs.

2. **Stakeholder Access:** Stakeholders, including students and parents, can access crucial information about universities and
 HEIs. This includes approval status, available courses, intake capacity, and admission procedures.

## Features

- **Affiliation Transparency:** Easily access information about the affiliation status of universities.
  
- **Recognition Verification:** Verify the authentic recognition status of higher education institutions.

- **Program Insights:** Discover the array of courses and programs offered by universities.

- **Admission Procedures:** Understand the admission processes and requirements for each institution.

- **Anti-Fraud Measures:** Stay informed about fake universities through periodic updates and queries.

## Technology Stack

- **Front-End Development:** HTML, CSS and Javascript have been employed to create an intuitive and visually appealing user interface, enhancing the overall user experience.

- **Back-End Infrastructure:** Node.js, Express.js, MongoDB-Compass, RESTful-API's, Authentication form the robust backbone of this system, ensuring data reliability and system efficiency.

## Get-Started

To start the project you simply need to clone the github repo using the following command.

```bash
  git clone https://github.com/hv65616/SIH-2022.git
```
After cloning navigate into the backend folder of the project and run the following command this will install all the node modules and the dependencies used in the project into you project environment
```bash
    npm init
```
Now run the following command that will host the application in localhost:3000
```bash
    nodemon app
```
Now you have your project running and all the changes made inside project will be directly incorporated in real-time

Note:- Make sure that your system must have MongoDB-Compass installed otherwise you will not be able to use the database and the data stored in the database. After installing MongoDB-Compass create a new project and past the following URI as the connection string
```bash
    mongodb://localhost:27017/signup
```

## How to Use

1. **Submit Data (HEIs/Universities):** Higher education institutions and universities can easily submit their updated
 Gazette information, EoAs, and approval letters, along with current intake capacity for their approved courses and programs.

2. **Access Information (Stakeholders):** Stakeholders, including students, parents, and academic advisors, can navigate 
the platform to gain insights into university approval status, available courses, intake capacity, and admission procedures.

## Roadmap

- Future updates may include real-time notifications for stakeholders about changes in approval status, intake capacity, 
and admission procedures.

- Integration with relevant government databases to ensure the most accurate and up-to-date information.

## Contributing

Contributions to this project are welcome! Whether you want to report issues, suggest improvements, or contribute code, please 
feel free to join our mission to enhance educational transparency.


Thank you for choosing Wizard-At Your Service. Let's work together to make informed educational decisions a reality!

