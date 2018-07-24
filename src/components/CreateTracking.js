import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { RkCard, RkText, RkTextInput, RkButton } from 'react-native-ui-kitten';
import { ADD_CUSTOMIZATION } from '../Screens';
import { updateCreateTrackingForm } from '../actions';
import { CustomizationTypes } from '../persistence/DTO';

class CreateTracking extends Component {
  onButtonPress() {
    this.props.navigation.navigate(
      ADD_CUSTOMIZATION,
      { type: CustomizationTypes[0] }
    );
  }
  
  onTrackingNameChanged(text) {
    this.props.updateCreateTrackingForm({
      trackingName: text
    });
  }

  render() {
    return (
      <RkCard>
        <View rkCardHeader>
          <RkText rkType='header'>What event are you going to track?</RkText>
        </View>
        <View rkCardContent>
          <RkTextInput 
          placeholder='Froze my nose' 
          onChangeText={this.onTrackingNameChanged.bind(this)}
          value={this.props.trackingName} 
          />
        </View>
        <View rkCardFooter>
          <RkButton
            onPress={this.onButtonPress.bind(this)}
          >
            Next
          </RkButton>
        </View>
      </RkCard>
    );
  }
}

CreateTracking.navigationOptions = {
  title: 'Create tracking'
};

const mapStateToProps = (state) => {
  const { trackingName } = state.createTrackingForm;

  return { trackingName };
};

export default connect(mapStateToProps, { updateCreateTrackingForm })(CreateTracking);
