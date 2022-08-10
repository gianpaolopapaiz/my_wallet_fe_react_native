import {
  StyleSheet,
  View,
  Text,
  SectionList
} from 'react-native'
import TransactionCard from './TransactionCard'

const TransactionsList = (props) => {
  const { transactions } = props;
  return (
    <View style={styles.container}>
      <SectionList
        sections={transactions}
        keyExtractor={item => item.id}
        renderItem={data => <TransactionCard transaction={data.item}/>}
        renderSectionHeader={({section}) => (
          <Text>{section.title}</Text>
        )}
        ListEmptyComponent={<Text>There are no transactions yet.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})

export default TransactionsList;
