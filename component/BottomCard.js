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
                <Image source={{uri: 'http://159.65.9.50/wp-content/uploads/2018/02/Screenshot-from-2017-12-08-23-05-34.png'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  This is Nike Pants
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>1290 Baht</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}