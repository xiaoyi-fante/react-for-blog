import React from 'react'

const inject = obj => Component => props => <Component {...obj} {...props} />;
export default inject