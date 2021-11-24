import React from "react";
import styles from "../styles/Common.module.css";
import Link from "next/link";
import { Avatar, Badge } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

function ListCard({ course, withImage, slug, isPublic }) {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
      <Row className={styles.ListCard}>
        <Space direction="vertical">
          <Avatar
            shape="square"
            src={
              course.image && course.image
                ? course.image.Location
                : "https://cdn.discordapp.com/attachments/820608670810243133/913059106061946930/orionthemes-placeholder-image.png"
            }
          />
          <div className="media-body pl-2">
            <div className="row">
              <div className="col-8">
                <Badge count={course.paid ? course.price : "Free"}>
                  <Link href={slug} className="pointer">
                    <a>
                      <h5 className="mt-2 text-primary courseName">
                        {course.name}
                      </h5>
                    </a>
                  </Link>
                </Badge>
                <p style={{ marginTop: "-10px" }}>
                  {course.lessons.length} Lessons
                </p>
                {isPublic !== "true" && course.lessons.length < 5 ? (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-danger"
                  >
                    5 lessons are required to publish
                  </p>
                ) : isPublic !== "true" && course.published ? (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-success"
                  >
                    Your course is live in the marketplace
                  </p>
                ) : isPublic !== "true" ? (
                  <p
                    style={{ marginTop: "-15px", fontSize: "10px" }}
                    className="text-success"
                  >
                    Your course is ready to be published
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="mt-3 col-4 float-right pr-4 text-center">
                {course.published ? (
                  <div>
                    <CheckCircleOutlined className="h5 pointer text-success" />
                    <br />
                    <small className="text-muted">Published</small>
                  </div>
                ) : (
                  <div>
                    <CloseCircleOutlined className="h5 pointer text-warning" />
                    <br />
                    <small className="text-muted">Unpublished</small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link href={slug}>
            <Row justify="end" className="pointer">
              <DoubleRightOutlined className={styles.btnNext} />
            </Row>
          </Link>
        </Space>
      </Row>
    </Col>
  );
}

export default ListCard;
