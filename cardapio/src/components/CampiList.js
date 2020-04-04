import React from 'react';
import { View, Modal, FlatList, Text, SafeAreaView } from 'react-native';

const data = [
  {
    id: '75122a0a-693a-4df8-a2c8-baa959ea1e9e',
    nome: 'RU - Campus do Benfica'
  },
  {
    id: '2f90b9c1-da9b-419a-9d84-9b97c4e5ebe5',
    nome: 'RU - Campus do Pici'
  },
  {
    id: 'b3705504-af00-49c3-9abf-43bc0014b982',
    nome: 'RU - Campus Sobral'
  },
  {
    id: 'bc6411ed-a21a-476e-b898-2289e6487bc8',
    nome: 'RU - Campus Russas'
  },
  {
    id: '317cd124-f9e1-41f8-a0bb-b84f5db64232',
    nome: 'RU - Campus Quixada'
  },
]

function Item({ name }) {
  return (
    <View style={{}}>
      <Text>{name}</Text>
    </View>
  )
}
export default function CampiList(props) {
  return (
    <SafeAreaView>
      <FlatList 
        data={data}
        renderItem={({item}) => <Item name={item.nome} />}
        keyExtractor={item => item.id}
        style={{height: 100}}
      />
    </SafeAreaView>
  );
}
