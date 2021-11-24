import { LikeOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "antd";
import React from "react";

function TutorCta() {
  return (
    <Row gutter={[20, 20]} className="my-5" justify="space-between">
      <Col className="wrapper" md={{ span: 12 }} lg={{ span: 4 }}>
        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
      </Col>
      <Col className="wrapper" md={{ span: 12 }} lg={{ span: 4 }}>
        <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Col>
      <Col className="wrapper" md={{ span: 12 }} lg={{ span: 4 }}>
        <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Col>
      <Col className="wrapper" md={{ span: 12 }} lg={{ span: 4 }}>
        <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Col>
      <Col className="wrapper" md={{ span: 12 }} lg={{ span: 4 }}>
        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
      </Col>
    </Row>
  );
}

export default TutorCta;
