import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";

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
    <ScreenContentWrapper pageTitle='Categories'>
      <View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={data => <Text>{data.item.title}: {data.item.description}</Text>}
        />
      </View>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
});

export default Categories
