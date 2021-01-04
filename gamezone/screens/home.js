import React, { useState } from 'react';
import { Button, Keyboard, Modal, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [reviews,setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum', key: '1' },
        { title: 'Gotta Catch Them All Again', rating: 4, body: 'Lorem Ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'Lorem Ipsum', key: '3' },
    ])
    
    const pressHandler = () => {
        // console.log('move Review');
        navigation.navigate('Review');
        // navigation.push('Review');
    }
    
    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide' >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        {/* <Text>Hello from the modal</Text> */}
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={globalStyles.titleText} >{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex:1,
    }
});