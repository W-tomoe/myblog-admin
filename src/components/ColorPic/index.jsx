import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';
import './index.less'


class ColorPic extends React.Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onExpandEvent: PropTypes.func,
    onChange: PropTypes.func,
    currentState: PropTypes.object,
  };

  constructor(props) {
      super(props)

      this.onHandleColorChange = this.onHandleColorChange.bind(this)
  }

  stopPropagation(event){
    event.stopPropagation();
  };

  onHandleColorChange(color){
    console.log(color,'color')
    const { onChange } = this.props;
    onChange('color', color.hex);
  }

  renderModal = () => {
    const { color } = this.props.currentState;
    return (
      <div
        onClick={this.stopPropagation}
        className="color-model"
      >
        <BlockPicker color={color} onChange={this.onHandleColorChange} />
      </div>
    );
  };

  render() {
    const { expanded, onExpandEvent } = this.props;
    return (
      <div
        className="color-wrapper"
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-label="rdw-color-picker"
      >
        <div
          onClick={onExpandEvent}
          className='icon-wrapper'
        >
          <img
            src={require("../../assets/images/color_pick.png")}
            alt=""
            style={{width:'15px'}}
          />
        </div>
        {expanded ? this.renderModal() : undefined}
      </div>
    );
  }
}

export default ColorPic