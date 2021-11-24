import { Button, Row, Space } from "antd";
import React from "react";
import Link from "next/link";

function TutorAtnBtn() {
  return (
    <Row justify="end">
      <Space>
        <Button href="/instructor" type="primary">
          My Courses
        </Button>{" "}
        <Button href="/instructor/course/create" type="primary">
          Create Course
        </Button>{" "}
      </Space>
    </Row>
  );
}

export default TutorAtnBtn;
