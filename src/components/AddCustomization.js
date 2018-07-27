import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { ADD_CUSTOMIZATION, TRACKING_LIST } from '../Screens';
import { updateCreateTrackingForm, createTracking } from '../actions';
import { CustomizationType, CustomizationTypes } from '../persistence/DTO';

const customizationsData = {
  [CustomizationType.RATING]: {
    header: 'Do you want to rate this event from 1 to 5?',
    hintText: "This is useful in tracking events such as 'Went to the movie' or 'Tasted new dish'"
  },
  [CustomizationType.METRIC]: {
    header: 'Do you want to measure you event somehow?',
    hintText: 'You can count your daily push-ups or minutes spent practicing guitar'
  },
  [CustomizationType.COMMENT]: {
    header: 'Would you like to leave comments?',
    hintText: 'You can describe an event or circumstances which it has occured in'
  },
  [CustomizationType.PHOTO]: {
    header: 'How about picturing your event?',
    hintText: 'You\'ll be able to attach a photo, that visualizes the event perfectly'
  },
  [CustomizationType.GEO]: {
    header: 'Do you want to drop geo-tag on the event',
    hintText: 'If event\'s location matters, you can save it as a part of your event'
  }
};

const CustomizationStatus = {
  Disabled: 0,
  Optional: 1,
  Mandatory: 2
};

class AddCustomization extends Component {
  constructor(props) {
    super(props);

    this.customizationStatus = CustomizationStatus.Disabled;
  }

  componentWillMount() {
    this.currentCustomization = this.props.navigation.getParam('type', CustomizationTypes[0]);
    this.customizationData = customizationsData[this.currentCustomization];
    if (this.props.mandatoryCustomizations.includes(this.currentCustomization)) {
      this.customizationStatus = CustomizationStatus.Mandatory;
    }
    if (this.props.optionalCustomizations.includes(this.currentCustomization)) {
      this.customizationStatus = CustomizationStatus.Optional;
    }
  }

  onGoButtonPressed() {
    const { 
      trackingName,
      trackingColor, 
      mandatoryCustomizations, 
      optionalCustomizations, 
      metricMeasurement
    } = this.props;
    const removeCurrent = (customizations) => {      
      return customizations.filter(value => value !== this.currentCustomization);
    };
    
    let updatedCustomizations;
    switch (this.customizationStatus) {
      case CustomizationStatus.Mandatory:
        updatedCustomizations = {
          mandatoryCustomizations: removeCurrent(mandatoryCustomizations)
            .concat(this.currentCustomization),
          optionalCustomizations: removeCurrent(optionalCustomizations)
        };
        break;
      case CustomizationStatus.Optional:
        updatedCustomizations = {
          mandatoryCustomizations: removeCurrent(mandatoryCustomizations),
          optionalCustomizations: removeCurrent(optionalCustomizations)
            .concat(this.currentCustomization)
        };
        break;
      default:
        updatedCustomizations = {
          mandatoryCustomizations: removeCurrent(mandatoryCustomizations),
          optionalCustomizations: removeCurrent(optionalCustomizations)
        };
        break;
    }
    this.props.updateCreateTrackingForm(updatedCustomizations);
    const nextCustomization = this.currentCustomization + 1;
    if (CustomizationTypes.length > nextCustomization) {
      this.props.navigation.push(ADD_CUSTOMIZATION, {
        type: nextCustomization
      });
    } else {
      this.props.createTracking({
        name: trackingName,
        color: trackingColor,
        ...updatedCustomizations,
        metricMeasurement
      });
      this.props.navigation.navigate(TRACKING_LIST);
    }
  }

  onMetricMeasurementChanged(text) {
    this.props.updateCreateTrackingForm({
      metricMeasurement: text
    });
  }

  needToRenderMeasurementInput() {
    return this.currentCustomization === CustomizationType.METRIC
      && this.customizationStatus !== CustomizationStatus.Disabled;
  }
  
  changeStatus(index) {
    this.customizationStatus = index;
    if (this.needToRenderMeasurementInput) {
      this.forceUpdate();
    }
  }

  renderMetricMeasurementInput() {
    if (this.needToRenderMeasurementInput()) {
      return (
        <TextInput
          placeholder='millimeters'
          onChangeText={this.onMetricMeasurementChanged.bind(this)}
          value={this.props.metricMeasurement}
        />
      );
    }
    
    return <View />;
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.customizationData.header}</Text>
        </View>
        <View>
          <Text>{this.customizationData.hintText}</Text>
          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Disabled</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Optional</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Mandatory</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.renderMetricMeasurementInput()}
        </View>
        <View>
          <Button title='Go next' onPress={this.onGoButtonPressed.bind(this)} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    trackingName,
    trackingColor,
    mandatoryCustomizations,
    optionalCustomizations,
    metricMeasurement
  } = state.createTrackingForm;

  return {
    trackingName,
    trackingColor,
    mandatoryCustomizations,
    optionalCustomizations,
    metricMeasurement
  };
};

export default connect(mapStateToProps, {
  updateCreateTrackingForm,
  createTracking
})(AddCustomization);
