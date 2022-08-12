import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import PageTitle from "../components/PageTitle";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Vehicles',
      description: 'Vehicles related expenses',
      subcategories: {
        title: 'Fuel',
        description: 'Vehicle Fuel'
      }
    },
    {
      id: 2,
      title: 'Income',
      description: 'All types of incomes',
      subcategories: {
        title: 'Main Job',
        description: 'Salary from main job'
      }
    }
  ]

  return (
    <ScreenContentWrapper>
      <PageTitle text='Categories'/>
      <View style={styles.mainContainer}>
        <View>
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={data => <Text>{data.item.title}: {data.item.description}</Text>}
          />
        </View>
      </View>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: 'beige'
  },
  mainContainer: {
    backgroundColor: 'beige',
    flex: 1
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Roboto'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default Categories
