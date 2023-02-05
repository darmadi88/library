import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import SmallButton from './SmallButton'

type Props = {
  item: any,
}

const BookListItem: React.FC<Props> = ({ route, navigation, item }) => {
  const { key, title, authors, edition_count, first_publish_year, cover_id } = item
  // const [imageLoading, setImageLoading]

  return (
    <View style={styles.bookItemContainer}>
      <View style={styles.imageContainer}>
        <ActivityIndicator style={styles.imageLoading} size={32} />
        <Image source={{ uri: `https://covers.openlibrary.org/b/ID/${String(cover_id)}-S.jpg` }} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={styles.bookDetail}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.authors} numberOfLines={1}>
          {
            authors.map((author: any, index: number) => {
              return `${(index > 0 ? ', ' : '')}${author.name}`
            })
          }
        </Text>
        <View style={styles.itemRow}>
          <View style={styles.publishedGroup}>
            <Text style={styles.bold}>Published : <Text style={styles.regular}>{first_publish_year}</Text></Text>
            <Text style={styles.bold}>Edition : <Text style={styles.regular}>{edition_count}</Text></Text>
          </View>
          <SmallButton
            text="BORROW"
            onPress={() => navigation.navigate('SetSchedule', { bookDetail: item })}
          />
        </View>
      </View>
    </View>
  )
}

export default BookListItem;

const styles = StyleSheet.create({
  bookItemContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: 60,
    height: 100,
    backgroundColor: '#c0c0c0',
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLoading: { 
    position: 'absolute'
  },
  bookDetail: {
    flex: 1
  },
  itemRow: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'flex-end'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  bold: {
    fontWeight: 'bold',
  },
  regular: {
    fontWeight: 'normal',
  },
  authors: {
    fontStyle: 'italic'
  },
  publishedGroup: {
    flex: 1
  }
})