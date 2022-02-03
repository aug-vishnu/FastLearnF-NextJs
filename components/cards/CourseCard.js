import { Card, Badge, Tooltip } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
import styles from "../../styles/Common.module.css";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CourseCard = ({ course, slug }) => {
  // destructure
  // const { name, instructor, price, image, slug, paid, categories } = course;
  return (
    <a href={slug}>
      <a>
        <Col>
          <Row className={styles.CourseCard} justify="space-between">
            <Space direction="vertical">
              <Tooltip title={course.name}>
                <div className="media-body pl-2">
                  <div className="row">
                    {/* <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              /> */}
                    <div className="col">
                      <Badge count={course.paid ? course.price : "Free"}>
                        <a href={slug} className="pointer">
                          <a>
                            <h5 className="my-2 text-primary">{course.name}</h5>
                          </a>
                        </a>
                      </Badge>
                      <p style={{ marginTop: "-10px", width: "200px" }}>
                        {course.lessons.length} Lessons -{" "}
                        <span
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          By {course.instructor.name}
                        </span>
                      </p>
                      {/* {course.lessons.length < 5 ? (
                      <p
                        style={{ marginTop: "-15px", fontSize: "10px" }}
                        className="text-danger"
                      >
                        5 lessons are required to publish
                      </p>
                    ) : course.published ? (
                      <p
                        style={{ marginTop: "-15px", fontSize: "10px" }}
                        className="text-success"
                      >
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p
                        style={{ marginTop: "-15px", fontSize: "10px" }}
                        className="text-success"
                      >
                        Your course is ready to be published
                      </p>
                    )} */}
                    </div>
                  </div>
                </div>
              </Tooltip>
            </Space>
            <Space>
              <div className="float-right pr-4 text-center">
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
              <a href={slug} className="titleGrad">
                <Row justify="end" className="pointer">
                  <DoubleRightOutlined className={styles.btnNext} />
                </Row>
              </a>
            </Space>
          </Row>
        </Col>
      </a>
    </a>
  );
};

export default CourseCard;
