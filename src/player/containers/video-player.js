import React,{Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar  from '../components/progress-bar';
import FormattedTime from'../funciones/utilidades.js';
import Spinner from '../components/spinner';
import Volume from '../components/volumen';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component{
 state = {
    pause: true,
	duration:0,
	currentTime:0,
	time:'',
	durationFloat:0,
	timeFloat:0,
	progress:0,
}
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
   
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetaData = event =>{
  	this.video=event.target;
  	this.setState({
  		duration:FormattedTime(this.video.duration),
  		durationFloat:this.video.duration
  	});
  }
  handleTimeUpdate = event =>{
  	console.log(this.video.currentTime)
  	this.setState({
  		currentTime:FormattedTime(this.video.currentTime),
  		timeFloat:this.video.currentTime
  	})
  }
  handleProgressChange = event =>{
	this.video.currentTime = event.target.value
  }
    handleSeekking = event =>{
  		this.setState({
  			loading:true
  		})
  }
    handleSeeked = event =>{
  		this.setState({
  			loading:false
  		})
  }
      handleVolumeChange = event =>{
  		this.video.volume = event.target.value;
  }
  handleFullScreenClick = event =>{
  	if (!document.webkitIsFullScreen) {
  		this.player.webkitRequestFullscreen()
  	}else{
  		document.webkitExitFullscreen();
  	}
  }
  setRef = element =>{
  	this.player =  element
  }
	render(){
		return(
			<VideoPlayerLayout setRef={this.setRef}>
			<Title
				title={this.props.title}
			/>
			<VideoPlayerControls>		
				<PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
				<Timer 
					duration = {this.state.duration}
					currentTime={this.state.currentTime}
				/>
				<ProgressBar 
					duration = {this.state.duration}
					value= {this.state.timeFloat}
					max={this.state.durationFloat}
					handleProgressChange={this.handleProgressChange}
				/>
			<Volume
				handleVolumeChange={this.handleVolumeChange}
			 />
			 <FullScreen
			 	handleFullScreenClick = {this.handleFullScreenClick}
			 />
			</VideoPlayerControls>
			<Spinner
				active={this.state.loading}
			/>
			<Video 
				autoplay={this.props.autoplay}
				pause={this.state.pause}
				handleLoadedMetaData={this.handleLoadedMetaData}
				handleTimeUpdate={this.handleTimeUpdate}
				handleSeekking = {this.handleSeekking}
				handleSeeked = {this.handleSeeked}
				src={this.props.src}
			/>
			
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;