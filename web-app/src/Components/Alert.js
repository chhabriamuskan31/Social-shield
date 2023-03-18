import React from 'react'

function Alert(Props) {
  return (
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{Props.warning}</strong> You are been warned for using toxic/vulgar words. Please maintan the decorrum otherwise you will be banned
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}

export default Alert