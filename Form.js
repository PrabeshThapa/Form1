import React from "react";
import{View,Text, StyleSheet, TextInput,Button,TouchableOpacity,} from "react-native";


class Form extends React.Component{
  constructor()
    {
      super();
      this.state={
        name:'',
        nameError:'',
        email:'',
        emailError:'',
        password:'',
        passwordError:'',

      }
    }
    submit(){
      console.warn(this.state)
    }
    nameValidator(){
      if(this.state.name=="")
      {
        this.setState({nameError:"name is required!"})
      }
      else
      {
        this.setState({nameError:""})

      }

    }

    emailValidator(){
      if(this.state.email=="")
      {
        this.setState({emailError:"email is required!"})
      }
      else
      {
        this.setState({emailError:""})

      }
    }

    passwordValidator(){
      if(this.state.password=="")
      {
        this.setState({passwordError:"Password is required!"})
      }
      else
      {
        this.setState({passwordError:""})

      }

    }
  
render(){
  return(
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.header}>Login Page {"\n"}</Text>
      </View>

      <View style={styles.view}>
        <TextInput
        name="name"
        placeholder="Name" 
        onBlur={()=>this.nameValidator()}
        onChangeText={(text)=>{this.setState({name: text})}}/>
      </View>

      <View>
      <Text style={{color:'red'}}>{this.state.nameError}</Text>
      </View>

      <View style={styles.view}>
        <TextInput
        name="email"
        placeholder="email"
        onBlur={()=>this.emailValidator()}
        onChangeText={(text)=>{this.setState({email: text})}}/>
      </View>

      <View>
      <Text style={{color:'red'}}>{this.state.emailError}</Text>
      </View>

      <View style={styles.view}>
        <TextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        onBlur={()=>this.passwordValidator()}
        onChangeText={(text)=>{this.setState({password: text})}} />
      </View>

      <View>
      <Text style={{color:'red'}}>{this.state.passwordError}{"\n"}</Text>
      </View>

      <TouchableOpacity style={styles.loginBtn}>
      <Button title="Login" onPress={()=>{this.submit()}}></Button>
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
