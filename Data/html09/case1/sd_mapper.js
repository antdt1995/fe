"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: An D Truong
   Date:   2023-06-06

*/

var thisTime = new Date();
var timeStr=thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour=thisTime.getHours();
var thisMonth=thisTime.getMonth();

var mapNum = (thisMonth *2 + thisHour) % 24; 

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById("planisphere").insertAdjacentHTML( "afterbegin",imgStr);