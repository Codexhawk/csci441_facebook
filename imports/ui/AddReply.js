import React from 'react';
import {Reply_Collection} from './../api/collections.js';
import PropTypes from 'prop-types';

//let postID = {this.props.postID};

export default class AddReply extends React.Component{

  processForm(event){
    event.preventDefault()
    let newReply = event.target.formInputNameAttribute.value;
    if (newReply){
      event.target.formInputNameAttribute.value = '';
      Reply_Collection.insert({
        reply: newReply,
        //post_id: postID,
        likes: 0,
        dislikes: 0,
      });

    };
  }

  render(){
    return (
      <div className='single-block-item-style'>
        <form className='form' onSubmit={this.processForm.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Reply'/>
          <button>Add Reply</button>
        </form>
      </div>
    );
  }
};
