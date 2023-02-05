import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../styles/styles'

type Props = {
  text: string,
  onPress: any,
  buttonStyle: any,
}

const PrimaryButton:React.FC<Props> = ({text, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 8,
  },
  buttonText: {
    color: COLOR.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
})