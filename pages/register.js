import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Col, Row, Tabs } from "antd";

const Register = () => {
  const [name, setName] = useState("Alok");
  const [email, setEmail] = useState("alok.node@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const { TabPane } = Tabs;

  const loginUser = async (e) => {
    router.push("/login");
  };
  const handleSubmitInstructor = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register-instructor`,
        {
          name,
          email,
          password,
        }
      );
      // console.log("REGISTER RESPONSE", data);
      loginUser();
      toast("Registration successful. Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };
  const handleSubmitStudent = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register-student`,
        {
          name,
          email,
          password,
        }
      );
      loginUser();
      console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };
  return (
    <>
      <Row justify="center" align="middle" className="singleForm">
        <Col span="7">
          <Tabs
            defaultActiveKey="1"
            type="card"
            size="large"
            className="mb-4"
            centered
          >
            <TabPane tab="Student Signup" key="1">
              <form onSubmit={handleSubmitStudent}>
                <input
                  type="text"
                  className="form-control mb-4 p-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-4 p-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-4 p-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />

                <button
                  type="submit"
                  className="btn btnGrad btn-block btn-primary"
                  disabled={!name || !email || !password || loading}
                >
                  {loading ? <SyncOutlined spin /> : "Submit"}
                </button>
              </form>
            </TabPane>
            <TabPane tab="Instructor Signup" key="2">
              <form onSubmit={handleSubmitInstructor}>
                <input
                  type="text"
                  className="form-control mb-4 p-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-4 p-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-4 p-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />

                <button
                  type="submit"
                  className="btn btnGrad btn-block btn-primary"
                  disabled={!name || !email || !password || loading}
                >
                  {loading ? <SyncOutlined spin /> : "Submit"}
                </button>
              </form>
            </TabPane>
          </Tabs>

          <p className="text-center p-3">
            Already registered?{" "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </Col>
      </Row>
    </>
  );
};
export default Register;
