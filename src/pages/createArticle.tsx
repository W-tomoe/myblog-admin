import * as React from "react";
import { Input, Button } from "antd";
import { BlockPicker } from "react-color";
import ColorPic from "../components/ColorPic";
// 富文本编辑器
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML
} from "draft-js";

import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export interface CreateArticleProps {}
export interface CreateArticleState {
  text: string;
  editorState: any;
}

class CreateArticle extends React.Component<
  CreateArticleProps,
  CreateArticleState
> {
  constructor(props: CreateArticleProps) {
    super(props);

    this.state = {
      text: "",
      editorState: EditorState.createEmpty()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onEditorStateChange(editorState: any) {
    this.setState({
      editorState
    });
  }

  // 提交文章
  formSubmit() {
    const { editorState } = this.state;
    let templateContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(templateContent, "templateContent");
  }

  // 上传图片
  uploadImageCallBack(file: File) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  render() {
    const toolbar = {
      // colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
      blockType: {
        inDropdown: true,
        options: [
          "Normal",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          //"Blockquote",
          "Code"
        ],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },
      /* colorPicker: {
        
        component: ColorPic
      }, */
      colorPicker: {
        className: undefined,
        component: ColorPic,
        popupClassName: undefined,
      },
      image: {
        uploadCallback: this.uploadImageCallBack,
        alt: { present: true, mandatory: true }
      }
    };

    return (
      <div className="content-main flex column grow">
        <div className="m-b-20">
          <Input placeholder="请填写文章标题" size="large" />
        </div>
        <div>
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="contract-editor-wrapper"
            editorClassName="contract-editor"
            toolbarClassName="contract-toolbar"
            toolbar={toolbar}
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <Button
          type="primary"
          size="large"
          className="m-t-20 shirnk"
          onClick={this.formSubmit}
        >
          提交
        </Button>
      </div>
    );
  }
}

export default CreateArticle;
