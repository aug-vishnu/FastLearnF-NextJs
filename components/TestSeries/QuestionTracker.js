import { Row } from "antd";
import React from "react";
import QuestionState from "./QuestionState";

function QuestionTracker() {
  return (
    <Row justify="start" align="middle">
      <QuestionState questionNumber="2" state="1" className="notviewed" />{" "}
      <QuestionState questionNumber="2" state="1" className="notviewed" />{" "}
      <QuestionState questionNumber="2" state="2" className="correct" />{" "}
      <QuestionState questionNumber="2" state="3" className="correct" />{" "}
      <QuestionState questionNumber="2" state="4" className="correct" />{" "}
      <QuestionState questionNumber="2" state="1" className="notviewed" />{" "}
      <QuestionState questionNumber="2" state="1" className="notviewed" />{" "}
      <QuestionState questionNumber="2" state="1" className="incorrect" />{" "}
      <QuestionState questionNumber="2" state="2" className="incorrect" />{" "}
      <QuestionState questionNumber="2" state="3" className="incorrect" />{" "}
      <QuestionState questionNumber="2" state="4" className="notviewed" />{" "}
      <QuestionState questionNumber="2" state="1" className="markedlater" />{" "}
      <QuestionState questionNumber="2" state="1" className="markedlater" />{" "}
      <QuestionState questionNumber="2" state="1" className="markedlater" />{" "}
      <QuestionState questionNumber="2" state="1" className="notviewed" />{" "}
    </Row>
  );
}

export default QuestionTracker;
