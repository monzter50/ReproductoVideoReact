import React, {PureComponent} from 'react';//Crear componentes
import PropType from 'prop-types';
import './media.css';


class Media extends PureComponent{
	state ={
			author:'Jesus Gonzalez'
		} 
	// constructor(props){
	// 	super(props)
	// 	this.state ={
	// 		author:props.author
	// 	} 
	// }
	handleClick =(event) =>{
		this.props.openModal(this.props);
	}
	render(){
		const styles = {
			container:{
				fontSize: 18,
				backgroundColor:'grey',
				padding:'2em',
				cursor:'pointer',
				width:260,
				border:'1px solid black'
			}
		}
		return(
			<div className="media" onClick={this.handleClick}>
				<div className="media-cover">
				 	<img src={this.props.cover} 
				 	width={260}
       	 			height={160}
            		className="media-image"/>
					<h2 className="media-title">{this.props.title}</h2>
					<p className="media-author">{this.props.author}</p>
				
				</div>
			</div>
		
			)
	}
}
Media.propTypes={
	cover:PropType.string,
	title:PropType.string,
	author:PropType.string,
	type:PropType.oneOf(['video','audio']),
} 
export default Media;