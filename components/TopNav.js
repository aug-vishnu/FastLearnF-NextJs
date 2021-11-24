import { useState, useEffect, useContext } from "react";
import { Col, Image, Menu, Row } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <Row justify="space-between" align="middle" className="TopNav">
      <Col span="2">
        <Link href="/">
          <Image
            className="logo ml-3 p-2 pointer"
            preview={false}
            width={200}
            src="https://cdn.discordapp.com/attachments/820608670810243133/903002139293523968/unknown.png"
          />
        </Link>
      </Col>
      <Col span="8">
        {user !== null && (
          <Menu mode="horizontal" selectedKeys={[current]}>
            {/* <Item
              key="/"
              onClick={(e) => setCurrent(e.key)}
              icon={<AppstoreOutlined />}
            >
              <Link href="/">
                <a>Overview</a>
              </Link>
            </Item>
            <Item
              key="/courses"
              onClick={(e) => setCurrent(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/courses">
                <a>Courses</a>
              </Link>
            </Item>
            <Item
              key="/assignments"
              onClick={(e) => setCurrent(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/assignments">
                <a>Assignments</a>
              </Link>
            </Item> */}
          </Menu>
        )}
      </Col>{" "}
      <Menu mode="horizontal" selectedKeys={[current]}>
        {user === null && (
          <>
            <Item
              key="/login"
              onClick={(e) => setCurrent(e.key)}
              icon={<LoginOutlined />}
            >
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Item>

            <Item
              key="/register"
              onClick={(e) => setCurrent(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/register">
                <a>Register</a>
              </Link>
            </Item>
          </>
        )}
        {user !== null && (
          <>
            <SubMenu
              icon={<CoffeeOutlined />}
              title={user && user.name}
              className="float-right"
            >
              <ItemGroup>
                <Item key="/user">
                  <Link href="/user">
                    <a>Dashboard</a>
                  </Link>
                </Item>
                <Item onClick={logout}>Logout</Item>
              </ItemGroup>
            </SubMenu>
          </>
        )}
      </Menu>
    </Row>
  );
};

export default TopNav;
