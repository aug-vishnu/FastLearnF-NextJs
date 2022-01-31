import { Select, Button, Avatar, Badge } from "antd";
import React, { useState, useEffect, useRef } from "react";

const { Option } = Select;

const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
  preview,
  uploadButtonText,
  handleImageRemove = (f) => f,
  editPage = false,
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
  const children = [];
  for (let i = 9.99; i <= 100.99; i++) {
    children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
  }
  return editorLoaded ? (
    <>
      {values && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Course Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Course Description</label>
            <CKEditor
              editor={ClassicEditor}
              data={values.description}
              onChange={(event, editor) => {
                setValues({ ...values, description: editor.getData() });
              }}
            ></CKEditor>
            {/* <textarea
              name="description"
              cols="7"
              rows="7"
              value={values.description}
              className="form-control"
              onChange={handleChange}
            ></textarea> */}
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="">Course Type</label>

                <Select
                  style={{ width: "100%" }}
                  size="large"
                  value={values.paid}
                  onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>
              </div>
            </div>
            <label htmlFor=""></label>
            {values.paid && (
              <div className="form-group mt-4">
                <Select
                  defaultValue="$9.99"
                  style={{ widht: "100%" }}
                  onChange={(v) => setValues({ ...values, price: v })}
                  tokenSeparators={[,]}
                  size="large"
                >
                  {children}
                </Select>
              </div>
            )}
          </div>
          {/* 
          <div className="form-group">
            <label htmlFor="">Course Category</label>

            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Category"
              value={values.category}
              onChange={handleChange}
            />
          </div> */}

          {/* <label htmlFor="">Course Cover</label>
          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label className="btn btn-outline-secondary py-3 btn-block text-left">
                  {uploadButtonText}
                  <input
                    type="file"
                    name="image"
                    onChange={handleImage}
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>

            {preview && (
              <Badge count="X" onClick={handleImageRemove} className="pointer">
                <Avatar width={200} src={preview} />
              </Badge>
            )}

            {editPage && values.image && (
              <Avatar width={200} src={values.image.Location} />
            )}
          </div> */}

          <div className="row">
            <div className="col">
              <Button
                onClick={handleSubmit}
                disabled={values.loading || values.uploading}
                className="btn btn-primary btnGrad py-3 my-3"
                loading={values.loading}
                type="primary"
                size="large"
                block
              >
                {values.loading ? "Saving..." : "Create Course & Continue"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  ) : (
    <></>
  );
};

export default CourseCreateForm;
