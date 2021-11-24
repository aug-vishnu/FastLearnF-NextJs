import { useState, useEffect } from "react";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Button, Row } from "antd";
import Link from "next/link";
import { SyncOutlined } from "@ant-design/icons";
import CourseCard from "../../components/cards/CourseCard";

const UserIndex = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get(`/api/user-courses`);
    console.log(data);
    setCourses(data);
  };

  return (
    <UserRoute>
      <Row justify="space-between" align="middle" className="mb-5">
        <h2 className="text-center mt-3 ml-2 left-bottom-radius">
          My courses ( {courses.length} )
        </h2>

        {!courses.length && (
          <Button href="/" type="primary">
            Browse Courses
          </Button> // <Link href="/">
          //   <a className="btn btn-primary float-right mt-2">Browse Courses</a>
          // </Link>
        )}
      </Row>

      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      )}
      {courses &&
        courses.map((course) => (
          <div key={course._id} className="col-md-12">
            <CourseCard
              key={course._id}
              course={course}
              slug={`/course/${course.slug}`}
            />
          </div>
        ))}
    </UserRoute>
  );
};

export default UserIndex;
