'use strict'
import { StyleSheet, Dimensions } from 'react-native';

const React = require('react-native');
const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {},
  zeroBottom: {
    marginBottom: 0,
  },
  view: {
    marginTop: 15,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 150,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 15,
    backgroundColor: 'lightblue',
    width: width - 80,
    margin: 10,
    height: 150,
    //paddingHorizontal : 30
  },
  brandCard: {
    marginTop: 0,
    backgroundColor: 'grey',
    width: 80,
    margin: 10,
    height: 80,
    //paddingHorizontal : 30
  },
  textInCard: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  containerInCard: {
    marginLeft: -10,
    marginBottom: 0,
  },
  zeroLeft: {
      marginLeft: 0
    }
});