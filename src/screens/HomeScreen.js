import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions'
import ItemList from '../components/ItemList'

const HomeScreen = ({ getData, list }) => {
  useEffect(() => {
    getData()
  }, [])
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return <ItemList
            name={item.name}
            num={`${index + 1}.`}
            uid ={item.id}
          />
        }} />
    </View>
  )
}

const mapStateToProsp = state => {
  return { list: state.Data }
}

export default connect(mapStateToProsp, {
  getData
})(HomeScreen)

const styles = StyleSheet.create({
})
