import React from 'react';
import {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

function FlatListComponet() {
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({title, id}) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        backgroundColor: '#f9c2ff',
      }}>
      <Text>{title}</Text>
      <Button title={id}></Button>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} id={item.title} />;
  function handleRefresh() {
    setCount(prevCount => prevCount + 1);
    setRefresh(!prevRefresh);
  }
  return (
    <View>
      <Text>Refresh Count{count}</Text>
      <FlatList
        data={DATA}
        horizontal={true}
        inverted={true}
        refreshing={refresh}
        onRefresh={() => handleRefresh}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text>Refresh Count{count}</Text>
    </View>
  );
}

export default FlatListComponet;
