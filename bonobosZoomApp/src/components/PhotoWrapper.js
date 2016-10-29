import React from 'react';

export const PhotoWrapper = ({imgDimentions, zoomed, dragActive, dragPosition, toggleDrag, toggleZoom}) => {
	const dragedPosition = "matrix(3, 0, 0, 3, " + dragPosition[0] + ", " + dragPosition[1] + ")";
	const imgStyle = {
		    width: imgDimentions[0] + "px",
		    height: imgDimentions[1] + "px",
		    transform: zoomed ? dragedPosition : "matrix(1, 0, 0, 1, 0, 0)",
		    backfaceVisibility: "hidden",
		    transformOrigin: 50% 50% 0px,
		    transition: zoomed ? "none" : "transform 350ms ease-in-out"
	}
	return (
		<div className="ui container">
			<img style={imgStyle} src="https://bonobos-prod-s3.imgix.net/products/12465/original/PANT_WashedChinos_TheKhakis_hero1.jpg?h=7000&w=7000" />
		</div>
	);
}
