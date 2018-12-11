import React, {Component} from 'react';
import Media from './media.js';
// import Play from '../../icons/components/play';
// import Pause from '../../icons/components/pause';
// import Volumen from '../../icons/components/volumen';

function Playlist(props) {
	return(
			<div className="playlist">
				{
					props.playlist.map((item)=>{
						return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
					})
				}
				
			</div>

	)
}

export default Playlist;