// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';
import {useState} from 'react'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // const [carSelected, setCarSelected] = useState("Koenigsegg.glb")



  const location = new Location([0, -2, -10]);
  r360.renderToLocation(
      r360.createRoot('ConnectedModels', {}),
      location
  );


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('ConnectedPanel', {}),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('autoshop_01.jpg'));
}

window.React360 = {init};
