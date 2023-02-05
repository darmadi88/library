import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../styles/styles'

type Props = {
  text: string,
  onPress: any,
}

const SmallButton:React.FC<Props> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 8
  },
  buttonText: {
    color: COLOR.primary,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})