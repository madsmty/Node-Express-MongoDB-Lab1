

#MongoDB Data Access With ExpressJS Lab I

## Overview
In this lab, you will learn to setup an ExpressJs server and connect to a MongoDB database.

## Prerequisites

1. Download and install NodeJS and NPM: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
2. Download and install MongoDB Community version: https://www.mongodb.com/products/self-managed/community-edition
3. Download and install MongoDB Compass: https://www.mongodb.com/products/tools/compass
4. Download and install Git from this link: https://git-scm.com/downloads

## Build Instructions
1. Fork this Git repository locally
2. Open the repository in Spring Tool Suite by going to File/Open Projects From File System
3. Navigate to the com.example.demo.exercise package. You'll see the Rectangle, Triangle, and Circle classes. Model them based on this diagram and overview:

## Tasks / Instuctions
Declare the Shape abstract class with the specified properties and methods.
Declare the Drawable interface and ensure the Shape class implements it.
Create concrete classes (Rectangle, Triangle, and Circle) that extend the Shape class. Provide specific implementations for calculating area, perimeter, and drawing the respective shapes (this can be just a text print, e.g. "Drawing a red circle"), it will require overriding.
Overload Rectangle and Triangle constructors, in the case all sides are equal in length you only need to provide one value for all their sides.
Override the toString() method from the Object class in each of the concrete classes.
To complete the area and perimeter calculating methods, you may find useful the built-in Java class called Math, it contains methods for performing basic numeric operations. Search for the following: Math.PI, Math.pow() and Math.sqrt().

Diagram
alt text


### Example [Optional]

## Testing and Validation requisites
Go to the com.example.demo package in the test packages, open the ObjectOrientedIntroduction2ApplicationTests class, and then go to Run/Run As/JUnit Test.
Coverage should be 100%

## Acceptance Criteria
Please provide a screenshot

## Helpful ResourcesO  **AComodar las ligas con los puntos de abajo
Object-Oriented Programming Concepts (Oracle): https://docs.oracle.com/javase/tutorial/java/concepts/

What is Object Orientation? (Pluralsight): https://app.pluralsight.com/ilx/video-courses/86714d19-8b08-404a-b24e-7fcff53fa426/af09bc2c-9029-42e9-8192-c12ebf543666/048dcc2a-2560-41a0-9884-8c96f5de009b

Working with Classes and Interfaces in Java 11 (Pluralsight): https://app.pluralsight.com/library/courses/working-classes-interfaces-java/table-of-contents

Math Class in Java (Oracle): https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html

[Optional]
### Official Language/Framework/Library Documentation 
### Main concepts (Databases, Object Oriented Programming, Classes, Polymorphism, etc)
### Blog articles, samples
### Public repositories
### Video tutorials
 
