/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';

const LoginScreen = () => {
  return (
    <>
      {/* Background */}
      <Background />

      <View style={ loginStyles.formContainer }>

         {/* Keyboard avoid view */}
         <WhiteLogo />
         <Text style={ loginStyles.title }>Login</Text>
   
         <Text style={loginStyles.label}>Email:</Text>
         <TextInput
           placeholder="Entre com seu email:"
           placeholderTextColor="rgba(255,255,255,0.4)"
           keyboardType="email-address"
           underlineColorAndroid="white"
           style={[
             loginStyles.inputField,
             ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
           ]}
           selectionColor="white"
   
           autoCapitalize="none"
           autoCorrect={ false }
         />
   
         <Text style={loginStyles.label}>Senha:</Text>
         <TextInput
           placeholder="Entre com sua senha:"
           placeholderTextColor="rgba(255,255,255,0.4)"
           underlineColorAndroid="white"
           style={[
             loginStyles.inputField,
             (Platform.OS === 'ios') && loginStyles.inputFieldIOS
           ]}
           selectionColor="white"
   
           autoCapitalize="none"
           autoCorrect={false}
         />
   
         {/* Botao Login */}
         <View style={ loginStyles.buttonContainer }>
           <TouchableOpacity
               activeOpacity={ 0.8 }
               style={ loginStyles.button }
           >
               <Text style={ loginStyles.buttonText } >Login</Text>
           </TouchableOpacity>
         </View>
   
         {/* criar uma nova conta */}
         <View style={loginStyles.newUserContainer}>
           <TouchableOpacity
             activeOpacity={0.8}
             onPress={ () => console.log('press') }
           >
             <Text style={loginStyles.buttonText} >Nova Conta</Text>
           </TouchableOpacity>
         </View>
      </View>
    </>
  );
};

export default LoginScreen;
