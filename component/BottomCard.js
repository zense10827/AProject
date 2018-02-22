import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class BottomCard extends Component {
  render() {
    return (
      <View>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: this.props.image }} style={{height: 200, width: 200, flex: 1}}/>
                <Text>{this.props.text}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>{this.props.price} Baht</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}