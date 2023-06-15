import React from 'react';
import './Show.css';


const Show = (props) => {
    const classes = props.className;
    return <div className={classes}>{props.children}</div>;
  };

export default Show;