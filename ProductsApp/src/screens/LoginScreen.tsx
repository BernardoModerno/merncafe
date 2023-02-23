/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation} : Props) => {

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();
    
  }

  return (
    <>
      {/* Background */}
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
      >

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

             onChangeText={ (value) => onChange(value, 'email') }
             value={email}
             onSubmitEditing={ onLogin }

             autoCapitalize="none"
             autoCorrect={ false }
           />
     
           <Text style={loginStyles.label}>Senha:</Text>
           <TextInput
             placeholder="Entre com sua senha:"
             placeholderTextColor="rgba(255,255,255,0.4)"
             underlineColorAndroid="white"
             secureTextEntry
             style={[
               loginStyles.inputField,
               (Platform.OS === 'ios') && loginStyles.inputFieldIOS
             ]}
             selectionColor="white"

            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
     
             autoCapitalize="none"
             autoCorrect={false}
           />
     
           {/* Botao Login */}
           <View style={ loginStyles.buttonContainer }>
             <TouchableOpacity
                 activeOpacity={ 0.8 }
                 style={ loginStyles.button }
                 onPress={ onLogin }
             >
                 <Text style={ loginStyles.buttonText } >Login</Text>
             </TouchableOpacity>
           </View>
     
           {/* criar uma nova conta */}
           <View style={loginStyles.newUserContainer}>
             <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => navigation.replace('RegisterScreen') }
             >
               <Text style={loginStyles.buttonText} >Nova Conta</Text>
             </TouchableOpacity>
           </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
