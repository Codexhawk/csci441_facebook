import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import Reply from './Reply.js';
import FlipMove from 'react-flip-move';

export default class ReplyList extends React.Component {
  renderAllReplies(){
    if (this.props.replies.length === 0){
      return (
        <div className ='single-block-item-style'>
          <p className ='single-block-item-style__message'>There are no Replies, please add one</p>
        </div>
      );
    } else {
      return this.props.replies.map((reply) => {
        // console.log(reply);
        // console.log(reply.reply);
        let repKey = reply._id;
        let repRep = reply.reply;
        let repLike = reply.likes;
        let repDis = reply.dislikes;
        console.log(repKey, repRep, repLike, repDis);
        // if statement for checking the post the reply should be attahed to
        return <Reply key={repKey} reply={repRep} likes={repLike} dislikes={repDis}/>
      });
    }
  }
  render(){
    return (
      <>
        <FlipMove delay={500} maintainContainerHeight={true} leaveAnimation='accordionVertical'>
          {this.renderAllReplies()}
        </FlipMove>
      </>
    )
  }

};
