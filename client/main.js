import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Post_Collection, Reply_Collection} from './../imports/api/collections.js';
import App from './../imports/ui/App.js';


Meteor.startup(() => {
  Tracker.autorun(() => {
    const dbPosts = Post_Collection.find({/*emty so get all posts */},
                                                  {sort: {_id: -1}}).fetch();
    const dbReplies = Reply_Collection.find({/*emty so get all posts */},
                                                  {sort: {_id: -1}}).fetch();
    let title = 'Facebook';

    ReactDOM.render(<App
        title={title}
        dbPosts={dbPosts}
        dbReplies={dbReplies}
        footer={'\u00A9' + title}
      />, document.getElementById('content'));
  });

});
