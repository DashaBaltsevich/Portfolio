import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.form}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} style={styles.mod}>
        <View style={{flex: 1}} style={styles.mod}>
          <Text >Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,

  },
  mod: {
flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 200,
    margin: 0,
    padding: 0,
    backgroundColor: "red"


  }
})

export default ModalTester;