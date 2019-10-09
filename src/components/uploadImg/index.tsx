import React from 'react'
import { Icon } from 'antd'
import './index.less'

export interface UploadImgProps {
    limit: number,
    multiple: boolean,
    imgList: Array<string>
}
 
export interface UploadImgState {
    
}
 
class UploadImg extends React.Component<UploadImgProps, UploadImgState> {
    constructor(props:UploadImgProps) {
        super(props)

        this.state = {
            currentCount: 0
        }

        this.uploadImg = this.uploadImg.bind(this)
    }

    // 上传图片
    uploadImg(e:any) {

    }

    render() { 
        return (
            <div className='img-upload__wrapper'>
                <div className='preview-img__wrapper'>
                    <img src="" alt="" className='preview-img__item'/>
                </div>
                <label className='add-img__btn' htmlFor="img-upload__input" onClick={this.uploadImg}>
                    <Icon type="plus"  className='add-icon'/>

                    <input type="file" id="img-upload__input"/>
                </label>
            </div>
        );
    }
}
 
export default UploadImg;