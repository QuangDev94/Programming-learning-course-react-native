import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { verifyStyles } from '@/styles/auth/verify.style';
import Button from '@/components/button/button';
import { router } from 'expo-router';

export default function VerifyAccountScreen() {
  const [code, setCode] = useState(new Array(4).fill(''));
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputs.current[index + 1].current?.focus();
    }
    if (text === '' && index > 0) {
      inputs.current[index - 1].current?.focus();
    }
  };
  const handleSubmit = () => {};
  return (
    <View style={verifyStyles.container}>
      <Text style={verifyStyles.headerTextStyle}>Verification Code</Text>
      <Text style={verifyStyles.subTextStyle}>
        We have sent the verification code to your email address
      </Text>
      <View style={verifyStyles.inputContainer}>
        {code.map((_, index) => (
          <TextInput
            key={index}
            style={verifyStyles.inputStyle}
            keyboardType="number-pad"
            maxLength={1}
            value={code[index]}
            onChangeText={(text) => handleInput(text, index)}
            ref={inputs.current[index]}
            // returnKeyType="done"
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <Pressable onPress={() => router.back()}>
        <Text style={{ fontSize: 20, paddingTop: 20, fontWeight: 600 }}>
          Go back to Sign in
        </Text>
      </Pressable>
    </View>
  );
}
