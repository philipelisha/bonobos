import React from 'react';
import "./ZoomButtons.css";
import { ZoomIn } from "./ZoomIn"
import { ZoomOut } from "./ZoomOut"

export const ZoomButtons = ({zoomed, setZoomTrue, setZoomFalse}) => {
	const zoomInClass =  zoomed ? "zoomable_image---icon zoomable_image---disabledLink" : "zoomable_image---icon";
	const zoomOutClass = zoomed ? "zoomable_image---icon" : "zoomable_image---icon zoomable_image---disabledLink";
	return (
		<div className="zoomable_image---icons">
			<a className={zoomInClass} onClick={!zoomed ? setZoomTrue : null}>
				<ZoomIn />
			</a>
			<a className={zoomOutClass} onClick={zoomed ? setZoomFalse : null}>
				<ZoomOut />
			</a>
		</div>
	);
}