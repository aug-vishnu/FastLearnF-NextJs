import { useState, useEffect } from "react";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Button, Row } from "antd";
import Link from "next/link";
import { SyncOutlined } from "@ant-design/icons";
import CourseCard from "../../components/cards/CourseCard";
import { Empty } from "antd";

const UserIndex = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get(`/api/user-courses`, {
      withCredentials: true,
    });
    // console.log(data);
    setCourses(data);
  };

  return (
    <UserRoute>
      <Row justify="space-between" align="middle" className="mb-5">
        <h2 className="text-center mt-3 ml-2 left-bottom-radius">
          List of your courses ( {courses.length} )
        </h2>

        <Button href="/user/course/" type="primary">
          Browse Courses
        </Button>
      </Row>
      {!courses.length && (
        <Empty className="pt-5" description="No Courses Enrolled" />
      )}
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
