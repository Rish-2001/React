import React from 'react'
// import PropTypes from 'prop-types'
function Alert(props) {
  const capatlize=(word)=>{
    const Lower=word.toLowerCase();
    return Lower.charAt(0).toUpperCase() + Lower.slice(1);
  }
  return (
   
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capatlize(props.alert.type)}</strong>:{props.alert.msg}
  
</div>
   
  )
}

export default Alert
