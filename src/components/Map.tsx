//@ts-nocheck
"use client";
import { useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

let DefaultIcon = new L.icon({
  iconUrl: "/assets/icons/marker.svg",
  shadowUrl: null,
  iconAnchor: null,
  popupAnchor: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(38, 51),
});

const Map = () => {
  const center = { lat: -6.31599, lng: 107.006781 };
  const ZOOM_LEVEL = 20;
  const mapRef = useRef();
  return (
    <div className="w-full h-80 bg-gray-100">
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
      >
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[center.lat, center.lng]} icon={DefaultIcon} />
        </MapContainer>
      </Link>
    </div>
  );
};

export default Map;
