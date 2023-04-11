import { useState } from 'react';
import {
  Button,
  ScrollView, // highly configurable, see docs
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// Flexbox is enabled by default on views, default setting is flexDirection: column
// you can set things like width as a % by wrapping in quotes so it is a sting
// Button does not have a style prop, it doesn't support styling!

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} // execute only on text change, passes value automatically
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => {
            return (
              <View style={styles.goalItem} key={goal}>
                <Text style={styles.goalItemText}>
                  {goal}
                </Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // needs to take up entire height of app so that the inner containers will take the portion. This has no siblings so 1 means 100%
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1, // take up 1 portion so (1/6 as its sibling is 5), flex number will add up every sibling's flex number and then portion it up accordingly
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: { // we put in a View which controls how much of the screen is taken up, then can add a ScrollView within the View and that is what scrolls
    flex: 5 // take up 5 portions (so 5/6)
  },
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
