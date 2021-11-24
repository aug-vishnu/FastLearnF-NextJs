import { useEffect, useState } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import Link from "next/link";

import ListCard from "../../components/ListCard";
import { Row } from "antd";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    // console.log(data);
    setCourses(data);
  };

  return (
    <InstructorRoute>
      <h1 className="text-center square p-3 mt-2 left-bottom-radius">
        List of courses
      </h1>

      {!courses.length && (
        <Link href="/instructor/course/create">
          <a className="btn btn-primary float-right mt-2">Create course</a>
        </Link>
      )}
      <Row justify="start">
        {courses &&
          courses.map((course) => (
            <ListCard
              course={course}
              slug={`/instructor/course/view/${course.slug}`}
            />
          ))}
      </Row>
    </InstructorRoute>
  );
};

export default InstructorIndex;
