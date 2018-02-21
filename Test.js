import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const myRequest = new Request('http://159.65.9.50/wp-json/wp/v2/posts/9?_embed');

export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentWillMount() {
    return fetch(myRequest)
      .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            post: responseJson
          });
        })
        .catch((error) => {
          console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>Post: {this.state.post.id}</Text>
        <Image
        style={{width: 150, height: 150}}
        source={{ uri: 'http://159.65.9.50/wp-content/uploads/2018/02/Screenshot-from-2017-12-08-23-05-34.png' }} />
      </View>
    );
  }
}