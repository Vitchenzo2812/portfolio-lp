import React from 'react';

const CenterDecorator = (Story: React.ComponentType) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Story />
  </div>
);

export default CenterDecorator;