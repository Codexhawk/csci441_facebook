import React from 'react';
import {Post_Collection} from './../api/collections.js';
import PropTypes from 'prop-types';

//console.log(this.props.reply_obj.reply);

export default class Reply extends React.Component{

  render(){

    return (
      <>
        <div  className='single-block-item-style'>
          <div className='post'>
            <div>
              <p>{this.props.reply}</p>
            </div>
            <div>
              <h3 className='post__topic'>{this.props.reply}</h3>
              <p className='post__stats'>
              {this.props.likes} Like[s]
              , {this.props.dislikes} Dislike[s] </p> {''}
            </div>
            <div className='post__actions'>
              <button className='button button--square' onClick={() => {
                Post_Collection.update({_id: this.props.key}, {$inc: {likes: 1}})
              }}>Like</button>
              <button className='button button--square' onClick={() => {
                Post_Collection.update({_id: this.props.key}, {$inc: {dislikes: 1}})
              }}>Dislike</button>
              <button className='button button--square' onClick={() => {
                Post_Collection.remove({_id: this.props.key})
              }}>X</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};
