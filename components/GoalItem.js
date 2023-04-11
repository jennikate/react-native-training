import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

// you can pass styles from a HoC through props
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6, // not supported on Text items for iOS but is on Android. Instead we have to put it in a View which is supported on both
    backgroundColor: '#5e0acc',
    padding: 8,
    // color: 'white' // styles don't cascade so when we put this style on the View, it doesn't apply to the inner Text element
  },
  goalItemText: {
    color: 'white'
  }
});
