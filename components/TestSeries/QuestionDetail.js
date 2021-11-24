import { Col, Image, Radio, Row } from "antd";
import React from "react";

function QuestionDetail() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Question 1</h2>
      <Image
        className="pointer"
        preview={false}
        src="https://media.discordapp.net/attachments/820608670810243133/906913440378019892/unknown.png"
      />
      <Radio.Group onChange={onChange} value={value}>
        <Row gutter={24} justify="space-between">
          <Col span={12}>
            <Radio value={1}>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio value={2}>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio value={3}>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio value={4}>Radio</Radio>
          </Col>
        </Row>
      </Radio.Group>
    </div>
  );
}

export default QuestionDetail;
