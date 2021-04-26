import React from 'react';
import {Post_Collection} from './../api/collections.js';


export default class AddTopics extends React.Component{

  processForm(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = '';
      Post_Collection.insert({
        topic: newTopic,
        likes: 0,
        dislikes: 0,
      });

    };
  }

  render(){
    return (
      <div className='single-block-item-style'>
        <form className='form' onSubmit={this.processForm.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>
      </div>
    );
  }
};
