import React from 'react';
import {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';

function ModalComponent() {
  const [showModal, setModal] = useState(false);
  return (
    <View>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModal(prevClose => !prevClose)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowColor: '#000',
            borderRadius: 20,
            margin: 20,
            backgroundColor: 'white',
          }}>
          <Text>Hello Modal</Text>
          <Button title="Hide Modal" onPress={() => setModal(false)} />
        </View>
      </Modal>
      <Button title="Show Modal" onPress={() => setModal(true)} />
    </View>
  );
}

export default ModalComponent;
