import React,{Component} from 'react';
import {createPortal} from 'react-dom';

class ModalContainer extends Component{
	render(){
		// return createPortal(Que voy renderizar, donde lo hare)
		return createPortal(
			this.props.children,
			document.getElementById('modal-containers')
			)
	}
}
export default ModalContainer;