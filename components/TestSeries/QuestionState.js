import { Col } from "antd";
import React from "react";
import styles from "../../styles/TestSeries.module.css";

function QuestionState(props) {
  return (
    <Col className={`${styles.QuestionState} ${props.className} `} span={3}>
      {props.questionNumber}
    </Col>
  );
}

export default QuestionState;
