import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
  render(){
    return (
      <div className='wrapper'>
        <div className='titlebar'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
};
