import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, Feather, Fontisto } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions';
const ShowScreen = ({ num, name, route, user, getUser }) => {
  useEffect(() => {
    getUser(route.params.id)
  }, [])
  return (
    <>
      <View style={styles.container}>
        <View style={styles.number}>
          <Feather
            name="user"
            size={40}
            color="black" />
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {user.name}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.number}>
          <MaterialCommunityIcons
            name="gmail"
            size={40}
            color="black" />
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {user.email}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.number}>
          <MaterialCommunityIcons
            name="gender-male-female"
            size={40}
            color="black" />
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {user.gender}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.number}>
          <Fontisto
            name="checkbox-active"
            size={35}
            color="black" />
        </View>
        <View style={styles.name}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {user.status}
          </Text>
        </View>
      </View>
    </>
  )
}

const mapStateToProsp = ({ User }) => {
  return { user: User }
}

export default connect(mapStateToProsp, {
  getUser
})(ShowScreen)

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 15,
    borderRadius: 35,
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
    marginRight: 20,
    marginVertical: 12
  }
})
