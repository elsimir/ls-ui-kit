import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  require('../stories/Button.js');
  require('../stories/Input.js');
  require('../stories/Notification.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
