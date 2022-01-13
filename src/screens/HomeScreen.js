import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions'
import ItemList from '../components/ItemList'
import Pagination from '../components/Pagination'


const HomeScreen = ({ getData, list, totalPage, newUserId, editedUserId }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [deletedUser, setDeletedUser] = useState(null)
  useEffect(() => {
    getData(pageNumber)
  }, [pageNumber, newUserId, editedUserId])
  return (
    !list.length
    ?<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={60} color='purple' />
    </View>
    :<View style={{flex: 1}}>
      <View style={{ flex: 1, bottom: 70, marginTop: 70 }}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            if (item.id == deletedUser ) return null
            return <ItemList
              onDelete={setDeletedUser}
              name={item.name}
              uid={item.id}
            />
          }} />
      </View>
        <Pagination totalPages={totalPage} setPageNumber={setPageNumber} />
    </View>
  )
}

const mapStateToProsp = ({ Data, Update }) => {
  const { newUserId, editedUserId } = Update
  if (_.isEmpty(Data)) {
    return { list: [], totalPage: 0, limit: 0 }
  }
  return {
    list: Data.data,
    totalPage: Data.meta.pagination.pages,
    limit: Data.meta.pagination.limit,
    newUserId,
    editedUserId
  }
}

export default connect(mapStateToProsp, {
  getData
})(HomeScreen)

