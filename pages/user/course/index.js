import axios from "axios";
import Link from "next/link";
import { Row } from "antd";
import ListCard from "../../../components/ListCard";

const StudentIndex = ({ courses, router }) => {
  return (
    <div className="container">
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
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    `https://fastlearn-api.herokuapp.com/api/courses`
  );
  // console.log("DATA LENGTH =====> ", data.length);
  return {
    props: {
      courses: data,
    },
  };
}

export default StudentIndex;
