import React, { Component } from 'react';
import Avatar from './Avatar';
import PostItem from './PostItem';
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
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
      ],
    };
  }
  userdata = [
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
  render() {
    return (
      <div>
        Post
        <Avatar user={this.userdata} />
        <div>Full Name</div>
        <div>Address,Location,City,Country</div>
        <PostItem user={this.userdata} />
      </div>
    );
  }
}
