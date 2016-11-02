import React from 'react';
import "./ZoomButtons.css";
import { ZoomIn } from "./ZoomIn"
import { ZoomOut } from "./ZoomOut"

export const ZoomButtons = ({zoomed, toggleZoom}) => {
	const zoomInClass =  zoomed ? "zoomable_image---icon zoomable_image---disabledLink" : "zoomable_image---icon";
	const zoomOutClass = zoomed ? "zoomable_image---icon" : "zoomable_image---icon zoomable_image---disabledLink";
	return (
		<div className="zoomable_image---icons">
			<a className={zoomInClass} onClick={!zoomed ? toggleZoom : null}>
				<ZoomIn />
			</a>
			<a className={zoomOutClass} onClick={zoomed ? toggleZoom : null}>
				<ZoomOut />
			</a>
		</div>
	);
}