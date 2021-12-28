import React from "react";
import{View,Text, StyleSheet, TextInput,Button,TouchableOpacity,} from "react-native";


class Form extends React.Component{
render(){
  return(
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.header}>Login Page {"\n"}</Text>
      </View>

      <View style={styles.view}>
        <TextInput
        name="name"
        placeholder="Name" />
      </View>

      <View style={styles.view}>
        <TextInput
        name="email"
        placeholder="email"/>
      </View>

      <View style={styles.view}>
        <TextInput
        name="password"
        placeholder="Password" />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
      <Button title="Login"></Button>
      </TouchableOpacity>
       

    </View>
   

    

  );
}

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#fff",
    justifyContent:"center",
  },
  header:{
    color:"red",
    fontWeight:"bold"
  },

});
export default Form;
