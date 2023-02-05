import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageContainer = ({children}) => {
  return (
    <View style={styles.pageContainer}>
      {children}
    </View>
  )
}

export default PageContainer

const styles = StyleSheet.create({
  pageContainer: {
    padding: 16,
    flex: 1,
  }
})