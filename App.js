import React, {Component} from 'react';
import {View, Text, Button, TextInput, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TTS from 'react-native-tts';
import RNReactNativeCheckAccessibility from 'react-native-check-accessibility';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {msg: '', checked: false};
    TTS.speak('Payment screen');
  }
  speakAudio = (text) => {
    RNReactNativeCheckAccessibility.isAccess;
    TTS.speak(text);
  };
  speak = () => {
    console.warn(this.state.msg);
    if (this.state.msg === undefined || this.state.msg === '') return;
    this.speakAudio(this.state.msg);
  };
  flip = () => {
    console.log('Flipped', this.state.checked);
    this.setState({checked: !this.state.checked});
    //this.speakAudio(this.state.checked ? 'Unchecked' : 'Checked');
  };
  render() {
    return (
      <View
        accessible={true}
        accessibilityLabel="My View"
        style={{
          padding: 20,
          flex: 1,
          borderColor: 'black',
          borderWidth: 1,
          margin: 10,
        }}>
        <Text accessible={true} accessibilityLabel="Hello Label">
          Hello
        </Text>
        <TextInput
          accessible={true}
          accessibilityLabel="Button Speak"
          style={{borderWidth: 1}}
          onChangeText={(txt) => this.setState({msg: txt})}
        />
        <Button
          accessible={true}
          accessibilityLabel="Button Speak"
          title="Press Me"
          onPress={this.speak}
        />
        <View
          accessible={true}
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            accessible={true}
            accessibilityLabel="Pay full"
            onChange={this.flip}
            value={this.state.checked}
          />
          <Text>Pay Full Advance</Text>
        </View>
      </View>
    );
  }
}

export default App;
