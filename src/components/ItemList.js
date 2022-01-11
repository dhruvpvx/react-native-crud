import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions'

const ItemList = ({ num, name, uid }) => {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text style={{ fontSize: 20 }}>
          {num}
        </Text>
      </View>
      <View style={styles.name}>
        <Text style={{ fontSize: 20 }}>
          {name}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigate('show', {id: uid})}>
          <View style={styles.btnview}>
            <Text style={styles.btntext}>Show</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnview}>
            <Text style={styles.btntext}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ ...styles.btnview, backgroundColor: 'red' }}>
            <Text style={styles.btntext}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default connect(null, { getUser })(ItemList)

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  btnview: {
    marginVertical: 10,
    height: 30,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    elevation: 10,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    backgroundColor: 'lightblue'
  },
  btntext: {
    fontWeight: 'bold'
  },
  number: {
    padding: 10,
    margin: 5
  },
  name: {
    padding: 10,
    margin: 5
  }
})
