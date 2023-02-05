import { StyleSheet, Text, View, Image, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'

import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import uuid from 'react-native-uuid';

import PrimaryButton from '../com/PrimaryButton'
import SecondaryButton from '../com/SecondaryButton'
import PageContainer from '../com/PageContainer'

const SetSchedule: React.FC = ({ route, navigation }) => {
  const { bookDetail } = route.params
  // const [date, setDate] = React.useState(new Date())
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  const { title, authors, edition_count, first_publish_year, cover_id, subject } = bookDetail

  const onSubmit = async (book: any, date: any) => {
    const pickupId = uuid.v4()

    return Alert.alert(
      'Success',
      `Pickup Id:  ${pickupId}\nTitle:  ${title}\nEdition:  ${edition_count}\nPickup date:  ${moment(date).format('ddd, DD MMM YY')}\nPickup time:  ${moment(date).format('h:mm a')}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.popToTop(),
        },
      ],
    )
  }

  return (
    <PageContainer>
      <ScrollView style={styles.body}>
        <View style={styles.bookItemContainer}>
          <View style={styles.imageContainer}>
            <ActivityIndicator style={styles.imageLoading} size={32} />
            <Image source={{ uri: `https://covers.openlibrary.org/b/ID/${String(cover_id)}-M.jpg` }} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={styles.bookDetail}>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.authors} numberOfLines={3}>
              {
                authors.map((author: any, index: number) => {
                  return `${(index > 0 ? ', ' : '')}${author.name}`
                })
              }
            </Text>
            <Text style={styles.subjects} numberOfLines={4}>
              {
                subject.map((sub: any, index: number) => {
                  return `${(index > 0 ? ', ' : '')}${sub}`
                })
              }</Text>
            <View style={styles.itemRow}>
              <Text style={styles.bold}>Published : <Text style={styles.regular}>{first_publish_year}</Text></Text>
              <Text style={styles.bold}>Edition : <Text style={styles.regular}>{edition_count}</Text></Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.pickupInformation}>
          <Text style={styles.pickupTime}>Pick up Time : </Text>
          <Text style={[styles.pickupTime, styles.bold]}>{moment(date).format('ddd, DD MMM YY, h:mm a')}</Text>
        </View>
        <SecondaryButton
          text={"SET PICK UP SCHEDULE"}
          onPress={() => setOpen(true)}
          buttonStyle={{ marginBottom: 16 }}
        />
        <PrimaryButton text="SUBMIT" onPress={() => onSubmit(bookDetail, date)} />
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        minuteInterval={15}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </PageContainer>
  )
}

export default SetSchedule

const styles = StyleSheet.create({
  bookItemContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: 100,
    height: 150,
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
    marginTop: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subjects: {
    marginTop: 16
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
  pickupInformation: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pickupTime: {
    fontSize: 16
  },
  footer: {

  }
})