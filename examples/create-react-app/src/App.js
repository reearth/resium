
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";

export default function App() {
  return (
    <Viewer full>
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.WHITE }}
        description="hoge"
      />
    </Viewer>
  );
}
