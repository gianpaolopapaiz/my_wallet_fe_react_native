import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const AccountCard = (props) => {
  const { name, nice_initial_amount, nice_current_amount } = props.account;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{nice_initial_amount}</Text>
      <Text>{nice_current_amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})

export default AccountCard;