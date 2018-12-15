import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class App extends ValidationComponent {

constructor(props) {
super(props);
// this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
this.state = { name: "", email: "", number: "", date: "" };
}

_onPressButton = () => {
this._validateForm();
};
onChangeTextName = (text) => {
this.setState({ name: text });
this.validate({
name: { minlength: 3, maxlength: 7, required: true }
});

}
onChangeTextEmail = (text) => {
this.setState({ email: text });
this.validate({
email: { email: true }
});

}
onChangeTextDigit = (text) => {
this.setState({ number: text });
this.validate({
number: { numbers: true }
});

}
onChangeTextDate = (text) => {
this.setState({ date: text });
this.validate({
date: { date: 'YYYY-MM-DD' }
});

}

_validateForm() {
this.validate({
name: { minlength: 3, maxlength: 7, required: true },
email: { email: true },
number: { numbers: true },
date: { date: 'YYYY-MM-DD' }
});
}

render() {
    return (
<View style={{ paddingVertical: 30 }}>
  <Text>Name</Text>
  <TextInput ref="name" onChangeText={(name) => this.onChangeTextName(name)} value={this.state.name} />
  <Text>{(this.isFieldInError('name') && this.getErrorsInField('name'))?this.getErrorsInField('name'):''}</Text>

  <Text>Email</Text>
  <TextInput ref="email" onChangeText={(email) => this.onChangeTextEmail(email)} value={this.state.email} />
  <Text>{(this.isFieldInError('email') && this.getErrorsInField('email'))?this.getErrorsInField('email'):''}</Text>
  <Text>Number</Text>
  <TextInput ref="number" onChangeText={(number) => this.onChangeTextDigit(number)} value={this.state.number} />
  <Text>{(this.isFieldInError('number') && this.getErrorsInField('number'))?this.getErrorsInField('number'):''}</Text>
  <Text>DoB</Text>
  <TextInput ref="date" onChangeText={(date) => this.onChangeTextDate(date)} value={this.state.date} />
  <Text>{(this.isFieldInError('date') && this.getErrorsInField('date'))?this.getErrorsInField('date'):''}</Text>

  <TouchableHighlight onPress={this._onPressButton}>
    <Text>Submit</Text>
  </TouchableHighlight>


</View>
);
}
}
