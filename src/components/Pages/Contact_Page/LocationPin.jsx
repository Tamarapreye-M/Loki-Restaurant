import React from "react";
import { Icon } from "@iconify/react";

import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => {
	return (
		<div className="">
			<Icon icon={locationIcon} className="pin-icon" />
			<p className="">{text}</p>
		</div>
	);
};

export default LocationPin;
