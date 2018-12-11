import React from 'react';

const VideoPlayerLayout = (props) =>(
	<div 
		className="videoPLayer"
		ref={props.setRef}
	>
	{props.children}
	</div>

)

export default VideoPlayerLayout;