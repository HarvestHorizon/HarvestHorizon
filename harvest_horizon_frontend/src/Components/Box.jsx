import React from 'react';
import PropTypes from 'prop-types';

import '../Styles/Box.css' ;

const Box=({title,description,backgroundColor}) => {
    return (
        <div  className='box'
          style ={{
            backgroundColor :backgroundColor ,
           
          }}
        >
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    );
};

Box.propTypes ={
    title :PropTypes.string.isRequired ,
    description : PropTypes.string.isRequired ,
    backgroundColor :PropTypes.string.isRequired ,
} ;

export default Box ;
 