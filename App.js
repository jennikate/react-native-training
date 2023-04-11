import { useState } from 'react';
import {
  FlatList, // helps with scrolling, specifically built for scrollable lists. Only renders items that are actually visible. Only loads and lazy renders items off the bottom of the screen as they're scrolled in
  StyleSheet,
  View
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


// Flexbox is enabled by default on views, default setting is flexDirection: column
// you can set things like width as a % by wrapping in quotes so it is a sting
// Button does not have a style prop, it doesn't support styling!
// ScrollView always renders all the items within it, so if you have a looooong list you could see performance issues as it renders all even if they're not visible yet
// ScrollView good for things like articles which have a defined end, for lists it's better to use FlatList
// FlatList doesn't use a custom .map, instead we pass it the list and then use renderItem so it controls rendering as needed
// FlatList .item holds the data we put into our state
// FlatList works best when your data array is a list of objects with a unique 'key' property as it then automatically uses that as the key for the item rendered
// if you don't have/cant set a key property you can instead add another prop to the FlatList component to make and attach a key -> e.g I have an 'id' but no 'key' ->  keyExtractor={(item, index) => { return item.id }}


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        key: Math.random().toString(), // good enough for demo remember this isn't guarenteed unique
        text: enteredGoalText,
      }
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />
        }} />
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
  goalsContainer: { // we put in a View which controls how much of the screen is taken up, then can add a ScrollView within the View and that is what scrolls
    flex: 5 // take up 5 portions (so 5/6)
  },
});
