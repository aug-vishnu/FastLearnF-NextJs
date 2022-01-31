import { Button, Progress, Select, Switch } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import ReactPlayer from "react-player";
import MarkdownCheetsheet from "../modal/MarkdownCheatsheet";
import React, { useState, useEffect, useRef } from "react";

const UpdateLessonForm = ({
  current,
  setCurrent,
  handleUpdateLesson,
  uploading,
  uploadVideoButtonText,
  handleVideo,
  progress,
  markdownCheetsheetModal,
  setMarkdownCheetsheetModal = (f) => f,
}) => {
  // console.log(current);
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      // CKEditor: require("@ckeditor/ckeditor5-react"), // depricated in v3
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  return editorLoaded ? (
    <div className="">
      <form onSubmit={handleUpdateLesson}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setCurrent({ ...current, title: e.target.value })}
          value={current.title}
          placeholder="Title"
          autoFocus
          required
        />

        {/* <div
          onClick={() => setMarkdownCheetsheetModal(!markdownCheetsheetModal)}
          className="text-center pt-2 pb-3 pointer"
          style={{ height: "10px" }}
        >
          <b>Learn</b> to <i>write</i> in <code>markdown</code>
        </div>
        <MarkdownCheetsheet
          markdownCheetsheetModal={markdownCheetsheetModal}
          setMarkdownCheetsheetModal={setMarkdownCheetsheetModal}
        /> */}
        <CKEditor
          editor={ClassicEditor}
          data={current.content}
          onChange={(event, editor) => {
            setCurrent({ ...current, content: editor.getData() });
          }}
        ></CKEditor>
        <div className="form-row pt-3">
          <div className="col">
            <div className="form-group">
              <label htmlFor="">Course Type</label>

              <Select
                style={{ width: "100%" }}
                size="large"
                value={current.type}
                onChange={(e) => setCurrent({ ...current, type: e })}
              >
                <Option value={"Content"}>Only Content</Option>
                <Option value={"Video"}>Youtube Video</Option>
                <Option value={"Form"}>Google Form</Option>
              </Select>
            </div>
          </div>
        </div>
        {current.type == "Video" && (
          <>
            <label htmlFor="">YouTube Link</label>
            <input
              type="text"
              className="form-control square"
              onChange={(e) => setCurrent({ ...current, url: e.target.value })}
              values={current.url}
              placeholder="Paste the Video URL"
              autoFocus
              required
            />
          </>
        )}
        {current.type == "Form" && (
          <>
            <label htmlFor="">Google Forms</label>
            <input
              type="text"
              className="form-control square"
              onChange={(e) => setCurrent({ ...current, url: e.target.value })}
              values={current.url}
              placeholder="Paste the Form URL"
              autoFocus
              required
            />
          </>
        )}
        {/* <textarea
          className="form-control mt-3"
          onChange={(e) => setCurrent({ ...current, content: e.target.value })}
          value={current.content}
          placeholder="Description"
          rows="4"
        ></textarea> */}

        {/* <div>
          {!uploading && current.video && current.video.Location && (
            <div className="pt-2 d-flex justify-content-center">
              {current.video.Location}
              <ReactPlayer
                url={current.video.Location}
                width="410px"
                height="240px"
                controls
              />
            </div>
          )}
          <label className="btn btn-dark btn-block text-left mt-3">
            {uploadVideoButtonText}
            <input onChange={handleVideo} type="file" accept="video/*" hidden />
          </label>
        </div> */}

        {/* {progress > 0 && (
          <Progress
            className="d-flex justify-content-center pt-2"
            percent={progress}
            steps={10}
          />
        )}
        <div className="d-flex justify-content-between">
          <span className="pt-3 badge">Preview</span>
          <Switch
            className="float-right mt-2"
            disabled={uploading}
            checked={current.free_preview}
            // onChange={(v) => setFree_preview(v)}
            name="free_preview"
            onChange={(v) => setCurrent({ ...current, free_preview: v })}
          />
        </div> */}

        <Button
          onClick={handleUpdateLesson}
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploading}
          disabled={uploading}
        >
          Save
        </Button>
      </form>
    </div>
  ) : (
    <div>Editor loading</div>
  );
};

export default UpdateLessonForm;
