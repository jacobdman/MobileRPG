import { observable, decorate } from 'mobx';

class MessagesStore {
  messages = [];
  //****************Actions*****************************
  AddMessage = (text, color = 'white') => {
    this.messages.push({ text: text, color: color });
    if (this.messages.length > 15) {
      this.messages = this.messages.shift();
    }
  };
}

export default decorate(new MessagesStore(), {
  messages: observable,
});
