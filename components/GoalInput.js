import { useState } from 'react';
import {
  Button,
  Modal,
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
  };

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} // execute only on text change, passes value automatically
          value={enteredGoalText} // whenever enteredGoalText changes (e.g when we reset it) it updates
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler} // call a local function not the function being passed down
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // take up 1 portion so (1/6 as its sibling is 5), flex number will add up every sibling's flex number and then portion it up accordingly
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});