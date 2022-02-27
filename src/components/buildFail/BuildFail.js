import React from 'react'

import BuildFailImg from './build-fail.png';

export default function BuildFail() {
  return (
    <div className="m-4">
      <img src={BuildFailImg} alt="It fails to build" />
    </div>
  )
}
