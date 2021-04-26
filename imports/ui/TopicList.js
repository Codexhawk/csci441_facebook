import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class TopicList extends React.Component {
  renderAllPosts(){
    if (this.props.posts.length === 0){
      return (
        <div className ='single-block-item-style'>
          <p className ='single-block-item-style__message'>There are no Posts, please add one</p>
        </div>
      );
    } else {
      return this.props.posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post} reply_obj={this.props.replies}/>//reply_obj={this.props.replies}
      });
    }
  }
  render(){
    return (
      <>
        <FlipMove delay={500} maintainContainerHeight={true} leaveAnimation='accordionVertical'>
          {this.renderAllPosts()}
        </FlipMove>
      </>
    )
  }

};
