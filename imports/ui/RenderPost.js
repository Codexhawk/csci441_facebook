import React from 'react';
import {Post_Collection} from './../api/collections.js';
import PropTypes from 'prop-types';
import AddReply from './AddReply.js';
import ReplyList from './ReplyList.js';
import {Reply_Collection} from './../api/collections.js';

// const dbReplies = Reply_Collection.find({/*emty so get all posts */},
//                                               {sort: {_id: -1}}).fetch();

export default class RenderPost extends React.Component{

  render(){

    return (
      <>
        <div key={this.props.post_prop_obj._id} className='single-block-item-style'>
          <div className='post'>
            <div>
              <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
              <p className='post__stats'>
              {this.props.post_prop_obj.likes} Like[s]
              , {this.props.post_prop_obj.dislikes} Dislike[s] </p> {''/* single space before button hack */}
            </div>
            <div className='post__actions'>
              <button className='button button--square' onClick={() => {  // anonymous arrow function
                Post_Collection.update({_id: this.props.post_prop_obj._id}, {$inc: {likes: 1}})
              }}>Like</button>
              <button className='button button--square' onClick={() => {
                Post_Collection.update({_id: this.props.post_prop_obj._id}, {$inc: {dislikes: 1}})
              }}>Dislike</button>
              <button className='button button--square' onClick={() => {
                Post_Collection.remove({_id: this.props.post_prop_obj._id})
              }}>X</button>
            </div>


          </div>
          <div className='reply'>
            <AddReply replydb={this.props.reply_obj} postID={this.props.post_prop_obj._id} />
            <ReplyList postID={this.props.post_prop_obj._id} replies={this.props.reply_obj}/>
          </div>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
