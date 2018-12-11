import React from 'react';
// Funcion que sirve para crear el formato '00'segundos 
function leftPad(number){
	const pad = '00';
	return pad.substring(0,pad.length - number.length) + number; 
}
// Funcion que sirve para convertir segundos a minutos
function formattedTime(secs){
	const minutes = parseInt(secs / 60, 10);
	const seconds = parseInt(secs % 60, 10);
	return ${minutes}:${leftPad(seconds.toString())}`
}
export default formattedTime;