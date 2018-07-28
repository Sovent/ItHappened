import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, Badge, Button } from 'react-native-elements';
import { HueSlider } from 'react-native-color';
import tinycolor from 'tinycolor2';
import { ADD_CUSTOMIZATION } from '../Screens';
import { updateCreateTrackingForm } from '../actions';
import { CustomizationTypes } from '../persistence/DTO';
import { CreateTrackingStyle as Styles } from '../styles/CreateTrackingStyles';
import { shuffle } from '../utils/UtilityMethods';

class CreateTracking extends Component {
  static examples = [
    'Made exercises',
    'Headache',
    'Received a complement',
    'Spent time with friends',
    'Smoked a cigarette',
    'Went to karaoke',
    'Neighbours made noises',
    'SO did not answer the call',
    'Boss got mad'
  ];

  constructor(props) {
    super(props);

    this.currentExamples = shuffle(CreateTracking.examples).slice(0, 3);
  }

  onProceedButtonPress() {
    if (this.props.trackingName === '') {
      this.formInput.shake();
      return;
    }

    this.props.navigation.navigate(
      ADD_CUSTOMIZATION,
      { type: CustomizationTypes[0] }
    );
  }

  onColorChanged(h) {
    const newHslColor = {
      ...tinycolor(this.props.trackingColor).toHsl(),
      h
    };
    this.props.updateCreateTrackingForm({
      trackingColor: tinycolor(newHslColor).toHexString()
    });
  }

  onTrackingNameChanged(text) {
    this.props.updateCreateTrackingForm({
      trackingName: text
    });
  }

  renderEgLabel() {
    return this.currentExamples.map(eg => {
      return (<Badge
        key={eg}
        value={eg}
        containerStyle={Styles.egBadge}
        textStyle={Styles.egLabel}
        onPress={this.onTrackingNameChanged.bind(this, eg)}
      />);
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>
            What event are you going to track?
          </Text>
        </View>
        <View style={Styles.content}>
          <View>
            <View style={Styles.block}>
              <View style={Styles.formLabelContainer}>
                <Text style={Styles.formLabel}>Name it, e.g. </Text>
                {this.renderEgLabel.bind(this)()}
              </View>
              <FormInput
                onChangeText={this.onTrackingNameChanged.bind(this)}
                ref={input => { this.formInput = input; }}
                containerStyle={Styles.formInputContainer}
                inputStyle={Styles.formInput}
                maxLength={50}
                value={this.props.trackingName}
                placeholder='This should answer "What happened?"'
              />
            </View>
            <View style={Styles.block}>
              <Text style={Styles.formLabel}>Pick a color for it</Text>
              <HueSlider
                style={Styles.colorSlider}
                gradientSteps={20}
                value={tinycolor(this.props.trackingColor).toHsl().h}
                onValueChange={this.onColorChanged.bind(this)}
              />
            </View>
          </View>
          <Button
            title='Proceed'
            iconRight={{ name: 'arrow-forward' }}
            backgroundColor={Styles.proceedButtonColor}
            containerViewStyle={Styles.proceedButtonStyle}
            onPress={this.onProceedButtonPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}

CreateTracking.navigationOptions = {
  title: 'Track event, step 1 of 6'
};

const mapStateToProps = (state) => {
  const { trackingName, trackingColor } = state.createTrackingForm;

  return { trackingName, trackingColor };
};

export default connect(mapStateToProps, { updateCreateTrackingForm })(CreateTracking);
