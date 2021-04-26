import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Post_Collection = new Mongo.Collection('posts');
export const Reply_Collection = new Mongo.Collection('replies');

export const Calculate_rank_and_position_for_posts = (user_posts_collection) => {

    let rank = 1;

    return user_posts_collection.map((post, index) => {

      if(index !== 0 && user_posts_collection[index - 1].votes > post.votes) {

        rank++;
      }

      return {
        ...post,
        rank,

        position: numeral(rank).format('0o'),
      };
    });
};
