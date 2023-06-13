import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCTxLBeGdesNP9l_W6b_veCd3tjVBPs98g",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -6.256810291691697, lng: 106.6184880939775 }), []);

  return (
    <GoogleMap zoom={19} center={center} mapContainerClassName="w-full h-96 sm:h-[500px]">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
