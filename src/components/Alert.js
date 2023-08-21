import React from 'react'

function Alert(props) {
    const capitalise=(word) =>
    {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.substring(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalise(props.alert.type)}</strong>:{props.alert.mssg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert

