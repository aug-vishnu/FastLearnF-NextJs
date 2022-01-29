import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/Overview.module.css";
import TutorDashboard from "../components/Tutor/TutorDashboard";
import StudentDashboard from "../components/Student/StudentDashboard";
import CommonDashboard from "../components/CommonDashboard";
import { useContext } from "react";
import { Context } from "../context";

const Index = ({ courses, router }) => {
  const head = () => (
    <Head>
      <title>FastLearn </title>
      <meta name="description" content="FastLearn" />
      <link rel="canonical" href={`${process.env.DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`FastLearn | ${process.env.APP_NAME}`}
      />
      <meta
        property="og:description"
        content={`FastLearn ${process.env.APP_NAME}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta property="og:site_name" content={process.env.APP_NAME} />
      <meta property="og:image" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta
        property="og:image:secure_url"
        content={`${process.env.DOMAIN}/default.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />
    </Head>
  );

  const { state, dispatch } = useContext(Context);
  const { user } = state;
  console.log(state);
  const userType = user;

  return (
    <>
      {head()}
      <div className="container">
        <div className={styles.overviewPage}>
          {user !== null && userType["role"].includes("Instructor") && (
            <TutorDashboard courses={courses}></TutorDashboard>
          )}
          {user !== null && !userType["role"].includes("Instructor") && (
            <StudentDashboard courses={courses}></StudentDashboard>
          )}
          {user === null && (
            <CommonDashboard courses={courses}></CommonDashboard>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`/api/courses`);
  // console.log("DATA LENGTH =====> ", data.length);
  return {
    props: {
      courses: data,
    },
  };
}

export default withRouter(Index);
