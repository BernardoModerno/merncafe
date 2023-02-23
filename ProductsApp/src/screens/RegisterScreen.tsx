/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import { loginStyles } from '../theme/loginTheme';

import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import WhiteLogo from '../components/WhiteLogo';


interface Props extends StackScreenProps<any, any> { }


const RegisterScreen = ({ navigation }: Props) => {


    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: '',
    });

    
    const onRegister = () => {
        console.log({ email, password, name });
        Keyboard.dismiss();
    };


    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#4917ED' }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >


                <View style={loginStyles.formContainer}>
                    {/* Keyboard avoid view */}
                    <WhiteLogo />

                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nome:</Text>
                    <TextInput
                        placeholder="Entre com seu nome:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}

                        autoCapitalize="words"
                        autoCorrect={false}
                    />


                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder="Entre com seu email:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onRegister}


                        autoCapitalize="none"
                        autoCorrect={false}
                    />


                    <Text style={loginStyles.label}>Senha:</Text>
                    <TextInput
                        placeholder="******"
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
                        onSubmitEditing={onRegister}

                        autoCapitalize="none"
                        autoCorrect={false}
                    />


                    {/* Botao login */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText} >Criar conta</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Criar uma nova conta */}
                    <TouchableOpacity
                        onPress={() => navigation.replace('LoginScreen')}
                        activeOpacity={0.8}
                        style={loginStyles.buttonReturn}
                    >
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        </>
    );
};

export default RegisterScreen;
