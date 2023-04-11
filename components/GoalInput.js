import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // calling this manually here we can make sure we forward the enteredGoalText
    setEnteredGoalText(''); // clear input on add button press
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler} // execute only on text change, passes value automatically
        value={enteredGoalText} // whenever enteredGoalText changes (e.g when we reset it) it updates
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler} // call a local function not the function being passed down
      />
    </View>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
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
  }
});