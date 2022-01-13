import _ from 'lodash'
import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

const Pagination = ({ totalPages, setPageNumber }) => {
  const [selectedPage, setSelectedPage] = useState(0)
  
  useEffect(() => setPageNumber(selectedPage+1),[selectedPage])
  const pages = _.range(1, totalPages + 1, 1)
  const activePage = useRef(1);
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => {
        setSelectedPage(selectedPage >= 1 ? selectedPage - 1 : selectedPage)
        activePage.current.scrollToIndex({
          animated: true,
          index: selectedPage == 0 ? selectedPage : selectedPage - 1
        })
      }} >
        <View style={{ ...styles.pageview, backgroundColor: 'lightgreen' }}>
          <Text style={styles.pagetxt}>Prev</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        ref={activePage}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={pages}
        keyExtractor={item => item}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setSelectedPage(index)}>
              <View style={{ ...styles.pageview, backgroundColor: index == selectedPage ? 'grey' : '#ffffff' }}>
                <Text style={styles.pagetxt}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <TouchableOpacity onPress={() => {
        setSelectedPage(selectedPage <= pages.length - 2 ? selectedPage + 1 : selectedPage)
        activePage.current.scrollToIndex({
          animated: true,
          index: selectedPage <= pages.length - 1 ? selectedPage : selectedPage - 1
        })
      }}
      >
        <View style={{ ...styles.pageview, backgroundColor: 'lightgreen' }}>
          <Text style={styles.pagetxt}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

Pagination.defaultProps = {
  totalPages: 10,
  setPageNumber: null
}

export default Pagination

const styles = StyleSheet.create({
  page: {
    height: 60,
    position: 'absolute',
    left: 5,
    right: 10,
    bottom: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    flexDirection: 'row'
  },
  pageview: {
    padding: 5,
    borderRadius: 10,
    margin: 10,
    elevation: 5
  },
  pagetxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5
  }
})