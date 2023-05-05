/*
 * Course: CST8285, Section 301 
 * Professor: Hala Owan
 * Sutdent Name: Fei Lan
 * Due Date: Feb 25, 2023
 * Description: The JavaScript file for Assignment 1.
 */

/**
 * function to display the course based on the search input value
 */
function searchCourse() {
    //get search input from the document
    const searchInput = document.getElementById("search-input");
    //get text from search input
    const text = searchInput.value;
    //get courses from document
    const courses = document.getElementsByClassName("course");

    //for loop through every course
    for (let i = 0; i < courses.length; i++) {
        //get course name 
        let courseName = courses[i].getElementsByTagName("h3")[0].innerText;

        //check course name if it includes the text of the search bar
        if (courseName.toUpperCase().includes(text.toUpperCase())) {
            courses[i].style.display = "";//display if it is true

        } else {
            courses[i].style.display = "none";// hidden if it is false
        }
    }
}

/**
 * function to display the courses based on the course level
 * @param {*} courseLevel the course level
 */
function filterCourse(courseLevel) {
    //get the courses
    const courses = document.getElementsByClassName("course");

    //Loop through each course
    for (let i = 0; i < courses.length; i++) {

        //For All Levels, display all courses
        if (courseLevel === "All Levels") {
            courses[i].style.display = "";
            continue;
        }

        //Get the ul list of the current course
        let ULList = courses[i].getElementsByTagName("ul")[0];
        //Get the second list item for the level inside the ul list
        let secondListItem = ULList.getElementsByTagName("li")[1];
        //Get the text of that list item
        let textofThatListItem = secondListItem.innerText;

        //Compare the list item with the parameter
        if (textofThatListItem === courseLevel) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }
    }
}

/**
 * function to display courses based on the course sorting order
 * @param {*} order the sorting order option
 */
function sortCourse(order) {

    //Get the courses elements
    let courses = document.getElementsByClassName("course");
    //Get the content element
    let content = document.getElementById("content");

    //Declaring an array to store the sorted items
    let sortedCourses;

    //Copying the array of courses and sort it using a function
    sortedCourses = Array.from(courses).sort(function (course1, course2) {
        //Get the ul list first, then second list item, then the text
        course1Level = course1.getElementsByTagName("ul")[0].getElementsByTagName("li")[1].innerText;
        course2Level = course2.getElementsByTagName("ul")[0].getElementsByTagName("li")[1].innerText;

        if (order === "ascending") {
            return (course1Level < course2Level) ? -1 : (course1Level > course2Level) ? 1 : 0;
        } else {//descending
            return (course1Level < course2Level) ? 1 : (course1Level > course2Level) ? -1 : 0;
        }
    })

    //Add the sorted courses back to the content element
    for (let course of sortedCourses) {
        content.appendChild(course);
    }
}
