import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions'
import ItemList from '../components/ItemList'


const HomeScreen = ({ getData, list, route }) => {
  useEffect(() => {
    getData()
  }, [])
  return (
    <View>
      {list.length==undefined
      ?<ActivityIndicator size={30} color='blue' />
      :<FlatList
        data={list}
        keyExtractor={(item, index) => item == '' ? index*449 : item.id}
        renderItem={({ item, index }) => {
          if (item == '') return null
          return <ItemList
            name={item.name}
            num={`${index + 1}.`}
            uid={item.id}
          />
        }} />
      }
    </View>
  )
}

const mapStateToProsp = state => {
  return { list: state.Data }
}

export default connect(mapStateToProsp, {
  getData
})(HomeScreen)

