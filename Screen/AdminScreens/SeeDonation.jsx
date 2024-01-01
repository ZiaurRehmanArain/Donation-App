

import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SeeDonationCard from './Compount/SeeDonationCard';

function SeeDonation() {
    const approvalData = [
        { id: '1', title: 'Request 1', description: 'Description for Request 1', category: 'cloth' },
        { id: '2', title: 'Request 2', description: 'Description for Request 2', category: 'cloth' },
        { id: '3', title: 'Request 3', description: 'Description for Request 3', category: 'cloth' },
        // Add more approval data as needed
    ];
    return (
        <View style={styles.container} >

            <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>See Donation</Text>
            <ScrollView style={styles.container}>
                {approvalData.map((item) => (
                    <SeeDonationCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        category={item.category}

                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default SeeDonation