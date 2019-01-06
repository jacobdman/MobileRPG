import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const messages = ['This is a test', 'this is another test', 'this is the final test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel nisl nec nibh efficitur porta. Curabitur finibus accumsan risus, non tincidunt dolor maximus non. Phasellus lorem eros, placerat in venenatis ut, iaculis et felis. Aliquam quis imperdiet mi, quis ultricies ligula. Praesent massa neque, ullamcorper ac leo a, semper bibendum massa. Donec sem diam, scelerisque sit amet elementum in, faucibus vel mauris. Duis et porttitor urna. Proin scelerisque eleifend tortor, eu tristique erat aliquet a.'];

class BottomDialog extends Component {
  constructor () {
    super()
    this.scrollView = React.createRef();
  };

  componentDidMount = () => {
    this._scrollView.scrollToEnd();
  };

  AddMessage = (text) => {
    messages.push(text);
    if (messages.length > 10) {
      messages.shift()
    }
    this.scrollView.scrollToEnd();
  };

  render() {
    return (
      <ScrollView  ref={component => this._scrollView = component} style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        {messages.map((message, i) => {
          return (
            <View key={i} style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>{'\u2022'}</Text>
              <Text style={styles.text}>{message}</Text>
            </View>
          )
        })}
      </View>
      </ScrollView>
    );
  }
}

export default BottomDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#353535',
    opacity: 0.8,
    overflow: 'scroll',
  },
  text: {
    color: '#fff',
    marginBottom: 10,
    fontFamily: "Didot-Italic",
    fontSize: 15,
  },
});
