import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space } from "antd";
import React, { useState } from "react";
import styles from "../../styles/Courses.module.css";

function TestDetailAtnBtn({ isEnroll }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Row justify="space-between" className={styles.CourseDetailAtnBtn}>
      <Col>
        <h1>Test series Name</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se</p>
      </Col>
      <Space>
        {isEnroll ? (
          <>
            <Button onClick={showModal} type="primary" className="btnGrad">
              Enroll Course
            </Button>
          </>
        ) : (
          <>
            <Button icon={<SettingOutlined />} type="dashed"></Button>{" "}
            <Button onClick={showModal} type="primary">
              Add Question
            </Button>
          </>
        )}
      </Space>
      <Modal
        title="Create Question"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <form>
          <label htmlFor="">Question Type</label>
          <select
            className="form-control mb-4"
            aria-label="Select Question Type"
          >
            <option selected>Select Question Type</option>
            <option value="1">MCQs</option>
            <option value="2">MCQ with image question</option>
            <option value="3">Brief answer</option>
          </select>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <label htmlFor="">Question</label>
              <input
                type="text"
                className="form-control mb-4 p-4"
                placeholder="Enter Question"
                required
              />
            </Col>
            <Col span={12}>
              <label htmlFor="">Question as Image</label>
              <input
                type="file"
                className="form-control mb-4 pt-2"
                placeholder="Upload Question as Image"
                required
              />
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <label htmlFor="">Option One</label>
              <input
                type="text"
                className="form-control mb-4 p-4"
                placeholder="Enter Option One"
                required
              />
            </Col>
            <Col span={12}>
              <label htmlFor="">Option Two</label>
              <input
                type="text"
                className="form-control mb-4 p-4"
                placeholder="Enter Option Two"
                required
              />
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <label htmlFor="">Option Three</label>
              <input
                type="text"
                className="form-control mb-4 p-4"
                placeholder="Enter Option Three"
                required
              />
            </Col>
            <Col span={12}>
              <label htmlFor="">Option Four</label>
              <input
                type="text"
                className="form-control mb-4 p-4"
                placeholder="Enter Option Four"
                required
              />
            </Col>
          </Row>
          <label htmlFor="">Course Type</label>
          <select className="form-control mb-4" aria-label="Select Course Type">
            <option selected>Select Course Type</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
            <option value="4">Option Four</option>
          </select>
          <label htmlFor="">Answer Description</label>
          <textarea
            className="form-control mb-4 p-4"
            placeholder="Enter Answer Description"
            name="answer"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </form>
      </Modal>
    </Row>
  );
}

export default TestDetailAtnBtn;
