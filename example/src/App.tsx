import * as React from 'react';

import { Slider } from '@miblanchard/react-native-slider';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ExcludeSystemGestureAreaView } from '../../src';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="demo" component={DemoComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Go To Slider"
        onPress={() => {
          navigate('demo', {});
        }}
      />
    </View>
  );
};

const DemoComponent = () => {
  const [value, setValue] = React.useState(20);
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <ExcludeSystemGestureAreaView>
          <Slider
            containerStyle={{ width: '100%' }}
            value={value}
            maximumTrackTintColor="red"
            minimumTrackTintColor="blue"
            thumbTintColor="orange"
            minimumValue={0}
            step={0.5}
            maximumValue={100}
            onValueChange={(value) => setValue(value as number)}
          />
        </ExcludeSystemGestureAreaView>
      </View>
      <Text>Value: {value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    height: 50,
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
