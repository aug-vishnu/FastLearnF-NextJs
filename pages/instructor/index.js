import { useEffect, useState } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import Link from "next/link";

import ListCard from "../../components/ListCard";
import { Button, Empty, Row } from "antd";

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
      <Row justify="space-between" align="middle" className="mb-5">
        <h2 className="text-center mt-3 ml-2 left-bottom-radius">
          List of your courses ( {courses.length} )
        </h2>

        <Link href="/instructor/course/create">
          <a className="btn btn-primary float-right mt-2">Create course</a>
        </Link>
      </Row>
      {!courses.length && (
        <Empty className="pt-5" description="Upload your first course" />
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
