import React from 'react';

export const ZoomButtons = ({zoomed, toggleZoom}) => {
	return (
		<div className="ui container">
			{zoomed}
		</div>
	);
}