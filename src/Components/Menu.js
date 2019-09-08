import React from 'react';

function Menu(props) {
  return (
    <div className="flex-row flex-justify-content">
      <button>HEM</button>
      <button>SCHEMA</button>
      <button>OSA</button>
    </div>
  );
}

export default React.memo(Menu);
