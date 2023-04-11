import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

// to make an item pressable you wrap it in Pressable (old way was to use Touchable)
// could make a helper function that gets the item key and then calls onDeleteItem with it
// or can use built in bind like we do here. First argument can be named whatever, second needs to be the value you want to pass
// you can use android_ripple to style the pressDown state for androids
// for iOS you use the style prop with a function that triggers every time a press state changes


function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'green' }}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
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
    // color: 'white' // styles don't cascade so when we put this style on the View, it doesn't apply to the inner Text element
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    padding: 8,
    color: 'white'
  }
});
