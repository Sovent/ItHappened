import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import { HueSlider } from 'react-native-color';
import CustomizationStatusPicker from './common/CustomizationStatusPicker';
import { editTracking } from '../actions';
import { CustomizationType, CustomizationTypes } from '../persistence/DTO';
import * as Styles from '../styles/EditTrackingStyles';

const customizationTypesTitles = {
  [CustomizationType.RATING]: 'Rating',
  [CustomizationType.METRIC]: 'Metric',
  [CustomizationType.COMMENT]: 'Comment',
  [CustomizationType.PHOTO]: 'Photo',
  [CustomizationType.GEO]: 'Geo tag'
};

class EditTracking extends Component {
  renderCustomizationsBlock() {
    return CustomizationTypes.map(type => {
      return (
        <View key={type}>
          <Text>{customizationTypesTitles[type]}</Text>
          <CustomizationStatusPicker
            onPress={index => this.props.editTracking({
              customizations: {
                ...this.props.customizations,
                [type]: index
              }
            })}
            customizationStatus={this.props.customizations[type]}
            needToShowMetricInput={type === CustomizationType.METRIC}
            inputRef={input => { this.metricInput = input; }}
            metricMeasurement={this.props.metricMeasurement}
            onMetricMeasurementChanged={text => this.props.editTracking({
              metricMeasurement: text
            })}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <View>
          <Text>Tracking name</Text>
        </View>
        <View>
          <Text>Name</Text>
          <FormInput />
        </View>
        <View>
          <Text>Color</Text>
          <HueSlider />
        </View>
        {this.renderCustomizationsBlock()}
        <Button
          title='Complete'
          textStyle={Styles.completeButtonText}
          backgroundColor={Styles.completeButtonBackgroundColor}
          containerViewStyle={Styles.completeButtonStyle}
          onPress={this.onCompleteButtonPressed.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state.editTrackingForm;
};

export default connect(mapStateToProps, { editTracking })(EditTracking);
