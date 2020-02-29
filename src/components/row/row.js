import React from 'react';

import './row.css';

export default function Row(props) {

  return (
      <div className="row mb2">
          <div className="col-md-6">
              { props.left }
          </div>
          <div className="col-md-6">
              { props.right }
          </div>
      </div>
  )
}
