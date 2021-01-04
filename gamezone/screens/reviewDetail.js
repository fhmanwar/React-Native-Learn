import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {

    const rating = route.params.rating;

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    return (
        <View style={globalStyles.container}>
            {/* <Text>Review Details Screen</Text> */}
            {/* <Button title='Go Back to Home' onPress={pressHandler} /> */}
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <Text>{ route.params.rating }</Text>
                <View style={styles.rating}>
                    <Text>GameZOne Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#333',
    }
});