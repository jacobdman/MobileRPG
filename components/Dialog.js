import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { PerfectDos } from './StyledText';
import MessagesStore from '../stores/MessagesStore';
import GameStore from '../stores/GameStore';
import TypeWriter from 'react-native-typewriter';

class Dialog extends Component {
  componentDidMount = () => {
    setTimeout(() => this.scrollToBottom(), 300);
  };

  componentDidUpdate = () => {
    setTimeout(() => this.scrollToBottom(), 300);
  };

  scrollToBottom = () => {
    this.scrollView.scrollToEnd();
  };

  render() {
    const { messages } = MessagesStore;
    return (
      <View style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={component => (this.scrollView = component)}
        >
          <View style={{ marginBottom: 20 }}>
            {messages &&
              messages.map((message, i) => {
                return (
                  <View key={i} style={styles.textBox}>
                    <PerfectDos style={[styles.text, { color: message.color }]}>
                      <TypeWriter
                        delayMap={[
                          { at: '>', delay: 1000 },
                          { at: '. ', delay: 500 },
                        ]}
                        typing={1}
                      >{`> ${message.text}`}</TypeWriter>
                    </PerfectDos>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default observer(Dialog);

const styles = StyleSheet.create({
  root: {
    flex: 0.7,
    width: '100%',
    // backgroundColor: GameStore.color.backgroundColor[0],
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  },
  textBox: {
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
});
