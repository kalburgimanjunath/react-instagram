import React from 'react';
import Avatar from './Avatar';
import PostItem from './PostItem';
export default function Post() {
  return (
    <div>
      Post
      <Avatar />
      <div>Full Name</div>
      <div>Address,Location,City,Country</div>
      <PostItem />
    </div>
  );
}
