import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Row } from "antd";
import React, { useState } from "react";

function ConceptAddBtn() {
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
    <div>
      <Row justify="center">
        <Button onClick={showModal} icon={<PlusOutlined />}>
          Add Concept
        </Button>
      </Row>
      <Modal
        title="Add Concept"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <label htmlFor="">Concept Type</label>
          <select
            className="form-control mb-4"
            aria-label="Select Concept Type"
          >
            <option selected>Select Course Type</option>
            <option value="1">Add Video</option>
            <option value="2">Add Theory</option>
            <option value="3">Add Quiz</option>
          </select>
          <label htmlFor="">Concept Name</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Concept Name"
            required
          />
          <label htmlFor="">Concept Description</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Concept Description"
            required
          />
        </form>
      </Modal>
    </div>
  );
}

export default ConceptAddBtn;
