import React from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup, FormInput } from 'react-native-elements';
import Styles from '../../styles/CustomizationStatusPickerStyles';
import { CustomizationStatus } from '../../persistence/DTO';

const StatusHints = {
    [CustomizationStatus.DISABLED]:
        'You\'ll not be asked to fill this. You can change this later',
    [CustomizationStatus.OPTIONAL]:
        'You\'ll be able to skip filling this. You can change this later',
    [CustomizationStatus.MANDATORY]:
        'You won\'t be able to create event without filling this. You can change this later'
};

const renderMetricMeasurementInput = (
    customizationStatus, 
    needToShowMetricInput, 
    inputRef, 
    metricMeasurement, 
    onMetricMeasurementChanged
) => {
    if (needToShowMetricInput && customizationStatus !== CustomizationStatus.DISABLED) {
        return (
            <View>
                <Text style={Styles.formLabel}>Specify units</Text>
                <FormInput
                    ref={inputRef}
                    containerStyle={Styles.formInputContainer}
                    inputStyle={Styles.formInput}
                    maxLength={20}
                    autoCapitalize='none'
                    placeholder='millimeters'
                    onChangeText={onMetricMeasurementChanged}
                    value={metricMeasurement}
                />
            </View>
        );
    }

    return <View />;
};

const renderHints = (displayHints, customizationStatus) => {
    if (displayHints) {
        return (
            <Text style={Styles.statusHint}>
                {StatusHints[customizationStatus]}
            </Text>
        );
    }
};

const CustomizationStatusPicker = ({
    onPress, 
    customizationStatus,
    needToShowMetricInput,
    displayHints,
    inputRef,
    metricMeasurement,
    onMetricMeasurementChanged
}) => (
        <View style={Styles.choiceContainer}>
            <ButtonGroup
                buttons={['Disabled', 'Optional', 'Required']}
                onPress={onPress}
                containerStyle={Styles.buttonGroupContainerStyle}
                buttonStyle={Styles.buttonGroupButtonStyle}
                textStyle={Styles.buttonGroupTextStyle}
                selectedTextStyle={Styles.buttonGroupSelectedTextStyle}
                selectedButtonStyle={Styles.buttonGroupSelectedButtonStyle}
                selectedIndex={customizationStatus}
            />
            {renderMetricMeasurementInput(
                customizationStatus,
                needToShowMetricInput,
                inputRef, 
                metricMeasurement,
                onMetricMeasurementChanged
            )}
            {renderHints(displayHints, customizationStatus)}
        </View>
    );

export default CustomizationStatusPicker;
