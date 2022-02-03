import React from "react";
import { Col, Image, Row, Space, Table } from "antd";
import StudentCta from "./StudentCta";
import CourseCard from "../cards/CourseCard";
import Footer from "../Footer";
import { Empty } from "antd";
import ListCard from "../ListCard";

function StudentDashboard({ courses }) {
  return (
    <div>
      <StudentCta></StudentCta>
      <Row gutter={24} className="mt-4">
        {/* <Col span={8}>
          {" "}
          <h3 className="mb-4">Recent students</h3>
          <Table columns={columns} dataSource={data} />
        </Col> */}
        <Col span={24}>
          {" "}
          <h3 className="mb-4">Trending Courses ({courses.length}) </h3>
          {!courses.length && (
            <Empty
              className="pt-5"
              description="You haven't enrolled course Yet"
            />
          )}
          <Row justify="center">
            {courses &&
              courses.map((course) => (
                <ListCard
                  isPublic="true"
                  course={course}
                  slug={`/course/${course.slug}`}
                />
              ))}
          </Row>
          <Row className="my-5 topperCta" justify="center">
            <Col span={12}>
              <Image
                className="p-2 pointer"
                preview={false}
                src="https://media.discordapp.net/attachments/913336114713100328/938845013381611582/unknown.png"
              />
            </Col>
            <Col span={12}>
              <Image
                className="p-2 pointer"
                preview={false}
                src="https://media.discordapp.net/attachments/913336114713100328/938845013666844722/unknown.png"
              />
            </Col>
          </Row>
          <div className="row pt-2">
            {courses.map((course) => (
              <div key={course._id} className="col-md-12">
                <CourseCard
                  key={course._id}
                  course={course}
                  slug={`/course/${course.slug}`}
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

export default StudentDashboard;
