import React from 'react';
import { StyleSheet,View } from 'react-native';
import ProfileCard from './ProfileCard/profile';

export type PersonalInfo = {
  name: string;
  age: number;
  imageUrl: string;
  buttons: string;
}

const App = () => {

  const myProfile: PersonalInfo ={
    name: 'Thushan',
    age: 22,
    imageUrl:"https://www.salesconnect.lk/wp-content/uploads/2020/08/portrait-square-05.jpg",
    buttons: 'React Native'
  };
  
  return (
    <View style={styles.container}>
      <ProfileCard
       name={myProfile.name}
       age={myProfile.age}
       imageUrl={myProfile.imageUrl}
       buttons={myProfile.buttons}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray'
      
  }
});
