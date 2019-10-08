import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface CreateArticleProps {}

export interface CreateArticleState {
  text: string;
}

class CreateArticle extends React.Component<
  CreateArticleProps,
  CreateArticleState
> {
  constructor(props: CreateArticleProps) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({ text: value });
  }

  render() {
    const toolbarOptions = {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"] // remove formatting button
      ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', "code-block",
        'list', 'bullet', 'indent',
        'link', 'image',
        "code-block",
        "clean"
    ]

    return (
      <div className="content-main">
        <ReactQuill
          value={this.state.text}
          theme="snow"
          modules={toolbarOptions}
          formats={formats}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CreateArticle;
