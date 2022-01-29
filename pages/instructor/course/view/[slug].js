import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Avatar, Col, Menu, Row, List, Empty, Tooltip } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
// import ReactMarkdown from 'react-markdown/react-markdown.min';
import CourseDetailAtnBtn from "../../../../components/Course/CourseDetailAtnBtn";
import ConceptAddBtn from "../../../../components/Course/ConceptAddBtn";
const { SubMenu } = Menu;
import React from "react";

const { Item } = List;

const CourseView = () => {
  const [course, setCourse] = useState({ lessons: [] });
  const [visible, setVisible] = useState(false);
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const [students, setStudents] = useState(0);
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // markdown cheetsheet modal

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // console.log(slug);
    if (slug) fetchCourse();
  }, [slug]);

  useEffect(() => {
    course && studentCount();
  }, [course]);

  const fetchCourse = async () => {
    let { data } = await axios.get(`/api/course/${slug}`);
    console.log(data);
    setCourse(data);
  };

  const studentCount = async () => {
    const { data } = await axios.post(`/api/instructor/student-count`, {
      courseId: course._id,
    });
    // console.log("STUDENT COUNT => ", data.length);
    setStudents(data.length);
  };

  return (
    <InstructorRoute>
      {course && (
        <div className="container pt-1">
          <CourseDetailAtnBtn
            course={course}
            students={students}
            setCourse={setCourse}
          />
          <hr className="my-5" />
          {/* <hr />
          <div className="row">
            <div className="col">
              <ReactMarkdown source={course.description} />
            </div>
          </div> */}
          <div className="row pb-5">
            <div className="col lesson-list">
              <Row justify="space-between" align="middle" className="mb-5">
                <h4>
                  {course && course.lessons && course.lessons.length} Lessons
                </h4>
                <Tooltip title="Edit this lesson">
                  <a
                    className="btn btn-dark"
                    onClick={() =>
                      router.push(`/instructor/course/edit/${course.slug}`)
                    }
                  >
                    Edit Lessons
                  </a>
                </Tooltip>
              </Row>

              {/* <List
                itemLayout="horizontal"
                dataSource={course && course.lessons}
                renderItem={(item, index) => (
                  <Item>
                    <Item.Meta
                      avatar={<Avatar>{index + 1}</Avatar>}
                      title={item.title}
                    />
                  </Item>
                )}
              /> */}
              {!course.lessons.length && (
                <Empty className="pt-5" description="Upload your lessons" />
              )}
              <List
                itemLayout="horizontal"
                dataSource={course.lessons}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar>{index + 1}</Avatar>}
                      title={
                        <Tooltip title="Edit this lesson">
                          <a
                            onClick={() =>
                              router.push(
                                `/instructor/course/edit/${course.slug}`
                              )
                            }
                          >
                            {item.title}
                          </a>
                        </Tooltip>
                      }
                      description={item.content}
                    />
                  </List.Item>
                )}
              />
              {/* {course.lessons.map((lesson) => (
                <Menu
                  mode="inline"
                  openKeys={openKeys}
                  style={{ backgroundColor: "#f5faff" }}
                  onOpenChange={onOpenChange}
                >
                  <SubMenu
                    style={{ margin: "1rem 0" }}
                    key="sub1"
                    icon={<MailOutlined />}
                    title={lesson.title}
                  >
                    <Menu.Item key={lesson._id}>{lesson.content}</Menu.Item>
                  </SubMenu>
                </Menu>
              ))} */}
            </div>
          </div>
        </div>
      )}
    </InstructorRoute>
  );
};

export default CourseView;
