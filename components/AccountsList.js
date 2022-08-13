import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native'
import AccountCard from './AccountCard'

const AccountsList = (props) => {
  const { accounts } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={accounts}
        keyExtractor={item => item.id}
        renderItem={data => <AccountCard account={data.item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AccountsList;
