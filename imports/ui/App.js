import React from 'react';
import TitleBar from './TitleBar.js';
import AddTopic from './AddTopic.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar title={this.props.title} />
        <div className='wrapper'>
          <AddTopic />
          <TopicList posts={this.props.dbPosts} replies={this.props.dbReplies}/>//replies={this.props.dbReplies}
        </div>
        <Footer footer={this.props.footer}/>
      </>
    )
  }

};
