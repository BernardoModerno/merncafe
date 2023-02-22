/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';

const Background = () => {
  return (
    <View
        style={{
            position: 'absolute',
            backgroundColor: '#0EAAAA',
            top: -250,
            width: 1000,
            height: 1200,
            transform: [
                { rotate: '-70deg'},
            ],
        }}
    />
  );
};

export default Background;
