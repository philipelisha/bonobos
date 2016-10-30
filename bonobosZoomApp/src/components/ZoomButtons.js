import React from 'react';
import "./ZoomButtons.css";
import zoomIn from "./zoom-in.svg"
import zoomOut from "./zoom-out.svg"

export const ZoomButtons = ({zoomed, toggleZoom}) => {
	return (
		<div className="zoomable_image---icons">
			<a class={zoomInClass}>
				<div>
					
				</div>
			</a>
			<a class={zoomOutClass}>
				<div>
					
				</div>				
			</a>
		</div>
	);
}