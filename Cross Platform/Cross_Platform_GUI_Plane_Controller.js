﻿#pragma strict

var x : float = 0.0f;
var y : float = 0.0f;
var width : float = 1.0f;
var height : float = 1.0f;


var cam : GameObject;

var enable : boolean;
var isLocal : boolean = true;

var zoome : float = 1.0f;

function Update()
{
	if( !cam || !enable ){
		return;
	}
	
	var rect : Rect;
	var h : float;
	var w : float;
	rect = cam.GetComponent( Aspect_Ratio_Controller ).rect;
	h = cam.GetComponent( Aspect_Ratio_Controller ).height;
	w = cam.GetComponent( Aspect_Ratio_Controller ).width;
	transform.position.x = x * rect.width * Screen.width / 2.0f;
	transform.position.y = y * rect.height * Screen.height / 2.0f;
	if( isLocal ){
		transform.localScale.x = width * rect.width * Screen.width * zoome;
		transform.localScale.y = height * rect.height * Screen.height * zoome;
	}
	else{
		transform.localScale.x = width * zoome;
		transform.localScale.y = height * zoome;
	}
}

@script AddComponentMenu( "Colorful-Pico Lib/Cross-Platform/Cross-Platform GUI Plane Controller" )