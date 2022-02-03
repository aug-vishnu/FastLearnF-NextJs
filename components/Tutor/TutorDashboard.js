import React from "react";
import { Col, Image, Row, Space, Table } from "antd";
import { columns, data } from "../../context/dummy";
import CourseCard from "../../components/cards/CourseCard";
import TutorAtnBtn from "./TutorAtnBtn";
import TutorCta from "./TutorCta";
import Footer from "../Footer";
import { Empty } from "antd";

function TutorDashboard({ courses }) {
  return (
    <div>
      {/* <TutorCta></TutorCta> */}
      <Row gutter={24} className="mt-4">
        {/* <Col span={8}>
          {" "}
          <h3 className="mb-4">Recent students</h3>
          <Table columns={columns} dataSource={data} />
        </Col> */}
        <Col span={24}>
          {" "}
          <Row justify="space-between" className="py-4">
            {courses.length != 0 && (
              <h3 className="mb-4">
                Your Published Courses ( {courses.length} )
              </h3>
            )}
            <TutorAtnBtn></TutorAtnBtn>
          </Row>
          {!courses.length && (
            <Empty className="pt-5" description="Upload your first course" />
          )}
          <div className="row pt-2">
            {courses.map((course) => (
              <div key={course._id} className="col-md-12">
                <CourseCard
                  key={course._id}
                  course={course}
                  slug={`/instructor/course/view/${course.slug}`}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Footer>
        <Image
          className="logo ml-3 p-2 pointer"
          preview={false}
          width={300}
          src="https://cdn.discordapp.com/attachments/820608670810243133/903002139293523968/unknown.png"
        />
      </Footer>
    </div>
  );
}

export default TutorDashboard;
