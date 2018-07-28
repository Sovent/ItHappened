import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, ButtonGroup, FormInput, Rating, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardFlip from 'react-native-card-flip';
import { ADD_CUSTOMIZATION, TRACKING_LIST } from '../Screens';
import { updateCreateTrackingForm, createTracking } from '../actions';
import {
  CustomizationType, CustomizationTypes, CustomizationStatus
} from '../persistence/DTO';
import { AddCustomizationStyle as Styles } from '../styles/CreateTrackingStyles';
import SamplePhoto from '../images/photo.jpg';
import LocationIcon from '../images/location-on-map.png';

const customizationsData = {
  [CustomizationType.RATING]: {
    header: 'Do you want to rate this event from 1 to 5?',
    hintText: "This is useful in tracking events such as 'Went to the movie' or 'Tasted new dish'",
    illustration: ({ trackingName }) => (
      <View>
        <Text style={Styles.illustrationHeaderStyle}>{trackingName}</Text>
        <Rating
          readonly
          imageSize={50}
          startingValue={3.5}
          style={Styles.ratingStyle}
        />
      </View>
    )
  },
  [CustomizationType.METRIC]: {
    header: 'Do you want to measure you event somehow?',
    hintText: 'You can count your daily push-ups or minutes spent practicing guitar',
    illustration: ({ trackingName, metricMeasurement }) => (
      <View style={Styles.metricIllustrationContainer}>
        <Text style={Styles.metricTitle} numberOfLines={2}>
          {trackingName}
        </Text>
        <View style={Styles.metricIllustrationUnitContainer}>
          <Text style={Styles.metricValue}>5</Text>
          <Text style={Styles.metricLabelStyle}>{metricMeasurement || 'units'}</Text>
        </View>
      </View>
    )
  },
  [CustomizationType.COMMENT]: {
    header: 'Would you like to leave comments?',
    hintText: 'You can describe an event or circumstances which it has occured in',
    illustration: ({ trackingName }) => (
      <View style={Styles.commentaryContainer}>
        <Text style={Styles.commentaryTitle}>{trackingName}</Text>
        <Text style={Styles.commentaryLabel}>It happened so sudden</Text>
      </View>
    )
  },
  [CustomizationType.PHOTO]: {
    header: 'How about picturing your event?',
    hintText: 'You\'ll be able to attach a photo, that visualizes the event perfectly',
    illustration: ({ trackingName }) => (
      <Tile
        featured
        activeOpacity={0}
        imageSrc={SamplePhoto}
        title={trackingName}
      />
    )
  },
  [CustomizationType.GEO]: {
    header: 'Do you want to drop geo-tag on the event?',
    hintText: 'If event\'s location matters, you can save it as a part of your event',
    illustration: ({ trackingName }) => (
      <View style={Styles.geoIllustrationContainer}>
        <Image source={LocationIcon} maxHeight={70} maxWidth={70} />
        <Text style={Styles.geoIllustrationTitle}>{trackingName}</Text>
      </View>
    )
  }
};

const StatusHints = {
  [CustomizationStatus.DISABLED]:
    'You\'ll not be asked to fill this. You can change this later',
  [CustomizationStatus.OPTIONAL]:
    'You\'ll be able to skip filling this. You can change this later',
  [CustomizationStatus.MANDATORY]:
    'You won\'t be able to create event without filling this. You can change this later'
};

class AddCustomization extends Component {
  onProceedButtonPressed() {
    const { currentCustomization, needToShowMetricInput, metricMeasurement } = this.props;
    if (needToShowMetricInput && (metricMeasurement === null || metricMeasurement === '')) {
      this.metricInput.shake();
      return;
    }

    const nextCustomization = currentCustomization + 1;
    if (!this.props.isLastScreen) {
      this.props.navigation.push(ADD_CUSTOMIZATION, {
        type: nextCustomization
      });
    }
  }

  onFinishButtonPressed() {
    const {
      trackingName,
      trackingColor,
      customizations,
      metricMeasurement
    } = this.props;

    this.props.createTracking({
      trackingName,
      trackingColor,
      customizations,
      metricMeasurement
    });
    this.props.navigation.navigate(TRACKING_LIST);
    Alert.alert(
      'Your tracking is ready',
      `To record your '${trackingName}' event, just tap on it`);
  }

  onMetricMeasurementChanged(text) {
    this.props.updateCreateTrackingForm({
      metricMeasurement: text
    });
  }

  changeStatus(index) {
    this.props.updateCreateTrackingForm({
      customizations: {
        ...this.props.customizations,
        [this.props.currentCustomization]: index
      }
    });
  }

  renderMetricMeasurementInput() {
    if (this.props.needToShowMetricInput) {
      return (
        <View>
          <Text style={Styles.formLabel}>Specify units</Text>
          <FormInput
            ref={input => { this.metricInput = input; }}
            containerStyle={Styles.formInputContainer}
            inputStyle={Styles.formInput}
            maxLength={20}
            placeholder='millimeters'
            onChangeText={this.onMetricMeasurementChanged.bind(this)}
            value={this.props.metricMeasurement}
          />
        </View>
      );
    }

    return <View />;
  }

  renderButton() {
    if (this.props.isLastScreen) {
      return (
        <Button
          title='Finish'
          onPress={this.onFinishButtonPressed.bind(this)}
          containerViewStyle={Styles.finishButton}
          textStyle={Styles.proceedButtonText}
          backgroundColor={Styles.finishButtonColor}
        />
      );
    }

    return (
      <Button
        title='Proceed'
        iconRight={{ name: 'arrow-forward' }}
        onPress={this.onProceedButtonPressed.bind(this)}
        containerViewStyle={Styles.proceedButtonStyle}
        textStyle={Styles.proceedButtonText}
        backgroundColor={Styles.proceedButtonColor}
      />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>{this.props.customizationData.header}</Text>
        </View>
        <View style={Styles.content}>
          <CardFlip
            style={Styles.illustrationCard}
            flipDirection='x'
            ref={card => { this.card = card; }}
          >
            <View style={Styles.illustrationCardSide}>
              {this.props.customizationData.illustration(this.props)}
              <TouchableWithoutFeedback onPress={() => this.card.flip()}>
                <Icon
                  name='information'
                  size={25}
                  color={Styles.illustrationButtonColor}
                  style={Styles.illustrationButtonStyle}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={{ ...Styles.illustrationCardSide, transform: [{ rotateX: '180deg' }] }}>
              <Text style={Styles.hintText}>{this.props.customizationData.hintText}</Text>
              <TouchableWithoutFeedback onPress={() => this.card.flip()}>
                <Icon
                  name='close-circle'
                  size={25}
                  color={Styles.illustrationButtonColor}
                  style={Styles.illustrationButtonStyle}
                />
              </TouchableWithoutFeedback>
            </View>
          </CardFlip>
          <View>
            <View style={Styles.choiceContainer}>
              <ButtonGroup
                buttons={['Disabled', 'Optional', 'Required']}
                onPress={this.changeStatus.bind(this)}
                containerStyle={Styles.buttonGroupContainerStyle}
                buttonStyle={Styles.buttonGroupButtonStyle}
                textStyle={Styles.buttonGroupTextStyle}
                selectedTextStyle={Styles.buttonGroupSelectedTextStyle}
                selectedButtonStyle={Styles.buttonGroupSelectedButtonStyle}
                selectedIndex={this.props.customizationStatus}
              />
              {this.renderMetricMeasurementInput()}
              <Text style={Styles.statusHint}>{StatusHints[this.props.customizationStatus]}</Text>
            </View>
            {this.renderButton()}
          </View>
        </View>
      </View>
    );
  }
}

AddCustomization.navigationOptions = ({ navigation }) => {
  const currentStep = navigation.getParam('type', CustomizationTypes[0]) + 2;
  const totalSteps = CustomizationTypes.length + 1;
  return {
    title: `Track event, step ${currentStep} of ${totalSteps}`
  };
};

const mapStateToProps = (state, ownProps) => {
  const {
    trackingName,
    trackingColor,
    customizations,
    metricMeasurement
  } = state.createTrackingForm;

  const currentCustomization = ownProps.navigation.getParam('type', CustomizationTypes[0]);
  const customizationData = customizationsData[currentCustomization];
  const customizationStatus = customizations[currentCustomization];
  const needToShowMetricInput = currentCustomization === CustomizationType.METRIC
    && customizationStatus !== CustomizationStatus.DISABLED;
  const isLastScreen = CustomizationTypes.length === currentCustomization + 1;

  return {
    trackingName,
    trackingColor,
    customizations,
    metricMeasurement,
    currentCustomization,
    customizationData,
    customizationStatus,
    needToShowMetricInput,
    isLastScreen
  };
};

export default connect(mapStateToProps, {
  updateCreateTrackingForm,
  createTracking
})(AddCustomization);
