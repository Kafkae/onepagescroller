import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';
import {TimelineMax, Elastic} from 'gsap';
import '../blocks/fullpage/fullpage.js';
import '../blocks/menu/menu.js';

$(() => {
	svg4everybody();
});




let tl = new TimelineMax

tl	
	.fromTo('.logo', 0.5, {y:-200,opacity: 0}, {y: 0,opacity: 1})
	.fromTo('.burger', 1, {y:-200,opacity: 0}, {y: 0,opacity: 1})




		
