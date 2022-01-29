import { useContext } from "react";
import { Button, Modal, Card, Tooltip, Avatar, Row } from "antd";
import {
  SyncOutlined,
  EditOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
  RightCircleOutlined,
  CommentOutlined,
  PlusCircleFilled,
  EditFilled,
  DeleteFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
// import ReactMarkdown from 'react-markdown/react-markdown.min';
import { Context } from "../../context";
import CodeBlock from "../../components/marked/CodeBlock";
import MarkdownCheetsheet from "../../components/modal/MarkdownCheatsheet";
import Link from "next/link";

const { Meta } = Card;

const QaCreateRead = ({
  visible,
  setVisible,
  values,
  setValues,
  handleCreatePost,
  clickedLessonQa = [],
  handleQaDelete = (f) => f,
  handleQaEdit = (f) => f,
  handleAddAnswer = (f) => f,
  handleEditAnswer = (f) => f,
  handleDeleteAnswer = (f) => f,
  markdownCheetsheetModal,
  setMarkdownCheetsheetModal = (f) => f,
  markQaAsResolved = (f) => f,
  markQaAsNotResolved = (f) => f,
}) => {
  // state
  const {
    state: { user },
  } = useContext(Context);

  return (
    <>
      {/* <hr style={{ borderTop: "3px dashed #f6f6f6" }} /> */}

      {/* modal with form to create post */}
      <Modal
        title="Ask a question"
        width={720}
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <div
          onClick={() => setMarkdownCheetsheetModal(!markdownCheetsheetModal)}
          className="text-center mb-4 pointer"
        >
          <b>Learn</b> to <i>write</i> in <code>markdown</code>
        </div>
        <MarkdownCheetsheet
          markdownCheetsheetModal={markdownCheetsheetModal}
          setMarkdownCheetsheetModal={setMarkdownCheetsheetModal}
        />
        <form onSubmit={handleCreatePost}>
          <input
            type="text"
            className="form-control square"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            placeholder="Title"
            autoFocus
            required
          />

          <textarea
            className="form-control mt-3 mb-1"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
            value={values.description}
            rows="9"
            placeholder="Description"
          ></textarea>

          <Button
            onClick={handleCreatePost}
            className="col mt-2"
            size="large"
            type="primary"
            loading={values.loading}
            shape="round"
            disabled={values.loading || !values.title || !values.description}
          >
            {values.loading ? <SyncOutlined spin /> : "Submit"}
          </Button>
        </form>
      </Modal>

      {/* <pre>{JSON.stringify(clickedLessonQa, null, 4)}</pre> */}

      <div className="row pt-4 px-4">
        {clickedLessonQa.map((q) => (
          <div key={q._id} className="col-md-12 pt-2 pb-4">
            {/* {JSON.stringify(q)} */}

            <div className="p-3 pb-0">
              <hr />
              <div className="d-flex ">
                <Avatar>
                  <span>
                    {q.postedBy && q.postedBy.name && q.postedBy.name[0]}
                  </span>
                </Avatar>{" "}
                <h5 className="pl-2">{q.title}</h5>
                <span className="pt-1 ml-auto">
                  {q.postedBy && user && user._id === q.postedBy._id ? (
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <span className="pl-2 text-small text-muted">
                        By {q.postedBy.name}
                      </span>
                      <span className="pl-2 text-small text-muted">
                        {new Date(q.createdAt).toLocaleDateString()}
                      </span>
                      <Tooltip title="Add answer">
                        <PlusCircleFilled
                          onClick={() => handleAddAnswer(q)}
                          className="pt-2 pl-4 text-success"
                        />
                      </Tooltip>
                      <Tooltip onClick={() => handleQaEdit(q)} title="Edit">
                        <EditFilled className="pl-3 pt-2 text-warning" />
                      </Tooltip>
                      <Tooltip onClick={() => handleQaDelete(q)} title="Delete">
                        <DeleteFilled className="pl-3 pt-2 text-danger" />
                      </Tooltip>
                      <Tooltip
                        onClick={() =>
                          q.resolved
                            ? markQaAsNotResolved(q)
                            : markQaAsResolved(q)
                        }
                        title={q.resolved ? "Mark unresolved" : "Mark resolved"}
                      >
                        {q.resolved ? (
                          <CloseCircleFilled className="px-3 pt-2 text-info" />
                        ) : (
                          <CheckCircleFilled className="px-3 pt-2 text-info" />
                        )}
                      </Tooltip>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <span className="pl-2 text-small text-muted">
                        By {q.postedBy.name}
                      </span>
                      <span className="pl-2 text-small text-muted">
                        {new Date(q.createdAt).toLocaleDateString()}
                      </span>
                      <Tooltip title="Add answer">
                        <PlusCircleOutlined
                          onClick={() => handleAddAnswer(q)}
                          className="pl-3 pt-2 text-success"
                        />
                      </Tooltip>
                      <Tooltip title={q.resolved ? "Resolved" : "Unresolved"}>
                        {q.resolved ? (
                          <CheckCircleFilled
                            style={{ cursor: "help" }}
                            className="pl-3 pt-2 text-info"
                          />
                        ) : (
                          <CloseCircleFilled
                            style={{ cursor: "help" }}
                            className="px-3 pt-2 text-info"
                          />
                        )}
                      </Tooltip>
                    </div>
                  )}
                </span>
              </div>
              <p className="pl-5">Description : {q.description}</p>
              <hr />

              <h5 className="text-bold text-muted ml-5">
                {q.answers && q.answers.length + " answers"}
              </h5>
              {/* <ReactMarkdown
                source={q.description}
                renderers={{ code: CodeBlock }}
                className="single-post"
              /> */}
            </div>

            {/* answers / comments */}
            {q.answers &&
              q.answers.map((a) => (
                <div className="">
                  <div className="d-flex pb-2 ml-5 pl-5 justify-content-between">
                    <span>
                      <CommentOutlined /> {a.content} -{" "}
                      <span className="text-muted text-small text-right align-content-start">
                        {`By ${a.postedBy && a.postedBy.name} ${new Date(
                          q.createdAt
                        ).toLocaleDateString()}`}
                      </span>
                    </span>
                    <span>
                      <Tooltip title="Edit answer">
                        <EditOutlined
                          className="pl-3"
                          onClick={() => handleEditAnswer(a)}
                        />
                      </Tooltip>

                      <Tooltip title="Delete answer">
                        <DeleteOutlined
                          className="pl-3"
                          onClick={() => handleDeleteAnswer(a)}
                        />
                      </Tooltip>
                    </span>
                  </div>
                  {/* <Meta
                    avatar={<CommentOutlined />}
                    title={

                      // <ReactMarkdown
                      //   source={a.content}
                      //   renderers={{ code: CodeBlock }}
                      //   className="single-post"
                      // />
                    }
                  /> */}
                </div>
              ))}
          </div>
        ))}

        {!visible && (
          <div className="d-flex justify-content-end pt-4">
            <Button
              onClick={() => setVisible(true)}
              className="btnGrad text-center "
              type="primary"
              icon={<QuestionCircleOutlined />}
              block
            >
              Post A Question
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default QaCreateRead;
