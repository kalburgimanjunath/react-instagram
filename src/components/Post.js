import React from 'react';
import Avatar from './Avatar';
import PostItem from './PostItem';
export default function Post() {
  const userdata = [
    {
      firstname: 'manjunath',
      lastname: 'kalburgi',
      location: 'Ravi nagar',
      city: 'hubli',
      country: 'india',
      post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
      post_video_url: '',
    },
    {
      firstname: 'Suman',
      lastname: 'Habib',
      location: 'Ravi nagar',
      city: 'hubli',
      country: 'india',
      post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
      post_video_url: '',
    },
  ];
  return (
    <div>
      Post
      <Avatar user={userdata} />
      <div>Full Name</div>
      <div>Address,Location,City,Country</div>
      <PostItem user={userdata} />
    </div>
  );
}
