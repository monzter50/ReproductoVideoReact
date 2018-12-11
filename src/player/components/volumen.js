import React from 'react';
import VolumeIcon from '../../icons/components/volumen';
import'./volumen.css';

function Volume(props){
	return(
		<button className="volumen">
		<VolumeIcon
			color="white"
			size={25}
		/>
		<div className="volumen-range">
			<input 
			type="range"
			min={0}
			max={1}
			step={.05}
			onChange={props.handleVolumeChange}
			/>
		</div>
		</button>
		)
}
export default Volume;