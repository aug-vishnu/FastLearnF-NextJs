import { Button, Col, Image, Row, Space, Statistic } from "antd";
import React from "react";

function StudentCta() {
  return (
    <div>
      <Row justify="end">
        <Space>
          <Button href="/user/course/" type="primary">
            Explore Courses
          </Button>{" "}
          <Button href="/user/" type="primary">
            My Courses
          </Button>{" "}
        </Space>
      </Row>
      <Row className="my-5 topperCta" justify="center">
        <Col span={24}>
          <Image
            className="p-2 pointer"
            preview={false}
            src="https://media.discordapp.net/attachments/913336114713100328/938838816784011274/unknown.png"
          />
        </Col>
        {/* <Col span={16} className="px-5 pb-2">
          {" "}
          <h2 className="my-2 mt-4">
            Explore courses just built for your exams{" "}
          </h2>
          <p className="my-2 text-primary pb-2">
            On-demand Courses built for you by your favorite Tutors{" "}
          </p>
        </Col> */}
      </Row>
    </div>
  );
}

export default StudentCta;
