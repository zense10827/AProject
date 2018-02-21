import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Body, Content, Card, CardItem } from 'native-base';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = require('./css/style.js');

export default class App extends Component {

  componentDidMount() {
    setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
          <ScrollView
            ref={(scrollView) => { this.scrollView = scrollView; }}
            //pagingEnabled={true}
            horizontal= {true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"start"}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}>
            <View style={styles.view} />
            <View style={styles.view2} />
            <View style={styles.view} />
            <View style={styles.view2} />
            <View style={styles.view} />
          </ScrollView>
          <Content>
            <Card>
              <Text style={styles.textInCard}>Official Store</Text>
              <ScrollView
              style={styles.zeroBottom}
              horizontal= {true}>
                <Container style={styles.zeroBottom}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
                <Container style={styles.containerInCard}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
                <Container style={styles.containerInCard}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
                <Container style={styles.containerInCard}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
                <Container style={styles.containerInCard}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
                <Container style={styles.containerInCard}>
                  <View style={styles.view3} />
                  <View style={styles.view3} />
                </Container>
              </ScrollView>
            </Card>
          </Content>
          <Content>
            <Card>
              <ScrollView
              horizontal= {true}>
                <Text style={styles.textInCard}>Category</Text>
              </ScrollView>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}