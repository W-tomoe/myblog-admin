import * as React from "react";
import { Input, Button, Upload, Icon, Modal } from "antd";
import { BlockPicker } from "react-color";
import ColorPic from "../components/ColorPic";
import { API_BASE_URL } from '../config/constants'
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


function getBase64(file:File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

interface CreateArticleProps {}
interface CreateArticleState {
  text: string,
  editorState: any,
  fileList: any,
  previewImage: string,
  previewVisible: boolean,
  uploadLimit: number
}

interface fileContent {

}

class CreateArticle extends React.Component<CreateArticleProps, CreateArticleState> {
  constructor(props: CreateArticleProps) {
    super(props);

    this.state = {
      text: "",
      editorState: EditorState.createEmpty(),
      fileList: [],
      previewImage: '',
      previewVisible: false,
      uploadLimit: 1
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.handlePreview = this.handlePreview.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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
  }

  // 富文本上传图片
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

  // 预览封面图片
  async handlePreview(file:any)  {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }
  
    this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
    });
  }

  // 封面上传改变
  handleChange(e:any) {
    this.setState({
        fileList:e.fileList
    })
  }

  // 取消图片预览
  handleCancel() {
    this.setState({
        previewVisible: false
    })
  }

  render() {
    const toolbar = {
      blockType: {
        inDropdown: true,
       
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },
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

    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">上传封面</div>
        </div>
    );

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
            onEditorStateChange={this.onEditorStateChange}/>
        </div>

        <Upload
          className='m-t-20'
          action={API_BASE_URL + '/uploadFile/uploadFile'}
          listType="picture-card"
          fileList={this.state.fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}>
            {this.state.fileList.length >= 8 ? null : uploadButton}
        </Upload>

        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>

        <Button
          type="primary"
          size="large"
          className="m-t-20 shirnk"
          onClick={this.formSubmit}>
          提交
        </Button>
      </div>
    );
  }
}
export default CreateArticle;
