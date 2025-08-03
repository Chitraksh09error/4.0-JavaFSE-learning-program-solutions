import React from "react";

function CourseItem({ course }) {
  return (
    <div className="item-container">
      <h3>{course.name}</h3>
      <p>{course.date}</p>
    </div>
  );
}

function Course({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Course;
