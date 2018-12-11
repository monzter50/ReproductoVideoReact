import React,{Component} from 'react';
import './video.css';

class Video extends Component{
	togglePlay() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  setRef = element => {
    this.video = element;
  }	
  render(){
    const {
      handleLoadedMetaData,
      handleTimeUpdate,
      handleSeekking,
      handleSeeked,

    } = this.props;

		return(
			<div className="video">
				<video
				controls
				autoPlay={this.props.autoplay}
				 src={this.props.src}
				 ref={this.setRef}
         onLoadedMetadata={handleLoadedMetaData}
         onTimeUpdate={handleTimeUpdate}
         onSeeking = {handleSeekking} 
         onSeeked={handleSeeked}
				 />
			</div>

		)
	}
}
export default Video;