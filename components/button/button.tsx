import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '@/styles/common/common.styles';

export default function Button({
  title,
  onPress
}: {
  title: string;
  onPress: () => void;
}) {
  const { width } = Dimensions.get('window');
  return (
    <Pressable
      style={[commonStyles.buttonStyle, { width: width - 150 }]}
      onPress={() => onPress()}
    >
      <Text style={commonStyles.buttonTextStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
