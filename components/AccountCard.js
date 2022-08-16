import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'
import WText from "./WText";
import ShadowedBox from "./ShadowedBox";
import globalStyles from "../styles";

const AccountCard = (props) => {
  const {
    id,
    name,
    description,
    nice_initial_amount,
    nice_current_amount
  } = props.account;
  const navigation = props.navigation;

  const navigateToTransactions = () => {
    navigation.push('Transactions', { accountId: id})
  }

  return (
    <ShadowedBox route={navigateToTransactions}>
      <View style={styles.flexRow}>
        <View>
          <WText type="h4">{name}</WText>
          <WText>{description}</WText>
          <WText>Initial Amount: {nice_initial_amount}</WText>
        </View>
        <View style={styles.centralize}>
          <WText type="h3">{nice_current_amount}</WText>
        </View>
      </View>
    </ShadowedBox>
  )
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  centralize: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex:1
  }
})

export default AccountCard;
