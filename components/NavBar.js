import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          This is a navbar!
        </Text>
      </View>
      <View style={styles.navLinks}>
        <Text style={styles.rowGap}>
          Link 1
        </Text>
        <Text style={styles.rowGap}>
          Link 2
        </Text>
        <Text style={styles.rowGap}>
          Link 3
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navLinks: {
    flexDirection: 'row'
  },
  rowGap: {
    marginLeft: 15
  }
})

export default NavBar;
