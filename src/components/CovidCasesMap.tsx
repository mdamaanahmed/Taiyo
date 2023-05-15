import React from "react";
import { useQuery } from "react-query";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  TileLayerProps,
  MapContainerProps,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface LatLngLiteralAttributes extends MapContainerProps {
  center?: any;
  zoom: number;
  scrollWheelZoom: boolean;
}

interface TileLayerPropsAttributes extends TileLayerProps {
  attribution?: string;
}

interface LatLngTupleAttributes extends LatLngTuple {
  position?: any;
}

const position: LatLngTupleAttributes = [51.505, -0.09];
const mapData: LatLngLiteralAttributes = {
  center: position,
  zoom: 13,
  scrollWheelZoom: false,
};

const tileLayerProps: TileLayerPropsAttributes = {
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const CovidCasesMap: any = () => {
  const { isLoading, data, error } = useQuery(
    "countriesData",
    async () =>
      await (await fetch("https://disease.sh/v3/covid-19/countries")).json()
  );

  return (
    <>
      {!error ? (
        isLoading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : (
          <MapContainer {...mapData}>
            <TileLayer {...tileLayerProps} />
            <Marker position={position}>
              <Popup>
                Hey, you can read me. Hope you will be happy to see me.
              </Popup>
            </Marker>
          </MapContainer>
        )
      ) : (
        <div className="text-center text-red-600">Something went wrong.</div>
      )}
    </>
  );
};

export default CovidCasesMap;
