---
id: version-1.0.0-doc2
title: How to run and build
original_id: doc2
---

## Prepare your component

1. Write your React Component

```js
import React from "react";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

export default class Cesium extends React.PureComponent {

  render() {
    return (
      <Viewer full>
        <Entity
          name="tokyo"
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          point={{ pixelSize: 10 }}>
          test
        </Entity>
      </Viewer>
    );
  }

}
```

2. Run

```bash
$ yarn start # or npm start
# You can see on http://localhost:3000
```


