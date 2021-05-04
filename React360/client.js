// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const TestLocation = new Location([1,1,1]);
  const location = new Location([0, -2, -10]);
  r360.renderToLocation(
      r360.createRoot('Model', {}),
      location
  );
  r360.renderToLocation(
    r360.createRoot('Test', { /* initial props */ }),
    TestLocation
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Panel', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('autoshop_01.jpg'));
}

window.React360 = {init};
