import React from 'react';
import { ZoomContainer } from "../containers/ZoomContainer";
import { PhotoContainer } from "../containers/PhotoContainer";

export const Container = () => {
	return (
		<div className="ui container">
			<ZoomContainer />
			<PhotoContainer />
		</div>
	);
}