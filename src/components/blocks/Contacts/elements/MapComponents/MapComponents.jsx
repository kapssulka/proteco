// src/MapComponent.jsx
import React from "react";
import classes from "./MapComponents.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import customIconUrl from "/src/assets/image/map_icon.png";

const MapComponent = () => {
  const position = [42.87814, 74.6127]; // Координаты центра карты

  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [32, 32], // Размер иконки
    iconAnchor: [16, 32], // Точка на иконке, которая будет находиться в точке привязки
    popupAnchor: [0, -32], // Смещение всплывающего окна относительно точки привязки
  });

  return (
    <MapContainer
      className={classes.map}
      center={position}
      zoom={15}
      style={{ height: "100%", width: "519px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className={classes.popUp}>
            Академический театр <br /> оперы и балета
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
