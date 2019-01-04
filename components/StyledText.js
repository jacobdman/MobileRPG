import React from 'react';
import { Text } from 'react-native';

export class MuldersHandwritting extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Mulder' }]} />;
  }
};

export class RSEHandwritingPi extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'RSEHandwritingPi' }]} />;
  }
};