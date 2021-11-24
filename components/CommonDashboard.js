import { Col, Image, Row } from "antd";
import React from "react";
import Footer from "./Footer";
import ListCard from "./ListCard";
import CourseCard from "../components/cards/CourseCard";

function CommonDashboard({ courses, isPublic }) {
  return (
    <div className="heroSection">
      <Row justify="space-between" align="middle">
        <Col md={{ span: 24 }} lg={{ span: 12 }}>
          <h1>Explore India’s best courses </h1>
          <h3 className="text-primary text-muted">
            On-demand Courses built for you by your favorite Tutors{" "}
          </h3>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 12 }}>
          <Image
            className=""
            preview={false}
            src="https://cdn.discordapp.com/attachments/820608670810243133/910533637232001044/unknown.png"
          />
        </Col>
      </Row>
      <Row justify="center">
        <h2 className="text-center mt-5 mb-3">Our courses</h2>
      </Row>
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

      <Row justify="center">
        <h2 className="text-center mt-5 pt-3 mb-5">Feature courses</h2>
      </Row>

      {courses &&
        courses.map((course) => (
          <CourseCard course={course} slug={`/course/${course.slug}`} />
        ))}
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

export default CommonDashboard;
