import React from 'react';
import "./Zoom.css";
import { ZoomContainer } from "../containers/ZoomContainer";

export const PhotoWrapper = ({screenHeight, screenWidth, zoomed, dragActive, dragPosition, toggleDrag, toggleZoom}) => {
	const dragedPosition = "matrix(3, 0, 0, 3, " + dragPosition[0] + ", " + dragPosition[1] + ")";
	const wrapperStyle = {
		    width: screenWidth + "px",
		    height: screenHeight + "px",
		    overflow: "hidden",
		    position: "relative"
	}
	const imgWrapperStyle = {
		    width: screenHeight + "px",
		    height: screenHeight + "px",
		    transform: zoomed ? dragedPosition : "matrix(1, 0, 0, 1, 0, 0)",
		    backfaceVisibility: "hidden",
		    transformOrigin: "50% 50% 0px",
		    transition: zoomed ? "none" : "transform 350ms ease-in-out"
	}
	const imgWrapperClass = dragActive ? ".zoomable_image--zoomInCursor" : ".zoomable_image--grabCursor";
	const imgStyle = {
		touchAction: "pan-y",
		userSelect: "none"
	}
	return (
		<div style={wrapperStyle} className="ui container zoomable_image--component">
			<div style={imgWrapperStyle} className={imgWrapperClass}>
				<img 
					className="zoomable_image" 
					width={screenHeight} 
					height={screenHeight} 
					style={imgStyle} 
					role="presentation"
					src="https://bonobos-prod-s3.imgix.net/products/12465/original/PANT_WashedChinos_TheKhakis_hero1.jpg?h=7000&w=7000" />
			</div>
			<ZoomContainer />
		</div>
	);
}
