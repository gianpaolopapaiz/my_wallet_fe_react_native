import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import globalStyles from "../styles";

const AccountCard = (props) => {
  const { name, nice_initial_amount, nice_current_amount } = props.account;
  return (
    <View style={[
      globalStyles.boxShadow,
      globalStyles.cardWrapper,
      styles.container
    ]}>
      <Text style={styles.title}>
        {name}
      </Text>
      <Text>{nice_initial_amount}</Text>
      <Text>{nice_current_amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})

export default AccountCard;