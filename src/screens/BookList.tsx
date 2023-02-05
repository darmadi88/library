import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import BookListItem from '../com/BookListItem'
import PageContainer from '../com/PageContainer'

type Props = {

}

const BookList: React.FC<Props> = ({ route, navigation }) => {
  const [bookList, setBookList] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getBookList = async (subject = 'love') => {
    console.log('fetching...')
    setLoading(true)
    const url = `https://openlibrary.org/subjects/love.json`;
    try {
      await fetch(url, { method: 'GET' })
        .then(async (resp: any) => {
          if (resp.status == 200) {
            const response = await resp.json()
            const books = response.works;

            setBookList(books)
            console.log('books', books)
          } else {
            console.log('err', resp)
            throw new Error(resp)
          }
          setLoading(false)
        })
    } catch (error) {
      console.log('err', error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getBookList()
  }, [])

  return (
    <PageContainer>
      {
        loading ?
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={60} />
        </View>

          :
          <FlatList
            data={bookList}
            style={{margin: -16}}
            renderItem={({ item }) => {
              return (<BookListItem
                navigation={navigation}
                item={item}
              />)
            }}
          />
      }
    </PageContainer>
  )
}

export default BookList;

const styles = StyleSheet.create({
  loadingContainer: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
