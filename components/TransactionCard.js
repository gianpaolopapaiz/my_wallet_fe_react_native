import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const TransactionCard = (props) => {
  const { id, title, value, formattedValue, category } = props.transaction;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{formattedValue}</Text>
      <Text>{category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default TransactionCard;
