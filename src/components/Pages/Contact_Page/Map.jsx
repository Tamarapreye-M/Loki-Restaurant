import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
	return (
		<div className="google-map">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap",
				}}
				defaultCenter={location}
				defaultZoom={zoomLevel}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
	);
};

export default Map;
