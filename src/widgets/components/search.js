import React from 'react';
import'./search.css';


// function Search(props){

// }

const Search = (props) =>(
	<form 
	className="search"
	onSubmit={props.handleSubmit}
	>
		<input 
		ref={props.setRef}
		type="text" 
		placeholder="Busta tu video favorito"
		className="search-input"
		name="search"
		onChange={props.handleChange}
		value={props.value}
		 />
	
	</form>

)

export default Search