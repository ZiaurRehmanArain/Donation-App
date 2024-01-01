import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ApprovalCard from './Compount/ApprovalCard'

function ReceiverApproval() {

    const approvalData = [
        { id: '1', title: 'Request 1', description: 'Description for Request 1' },
        { id: '2', title: 'Request 2', description: 'Description for Request 2' },
        { id: '3', title: 'Request 3', description: 'Description for Request 3' },
        // Add more approval data as needed
    ];

    const handleApprove = (id) => {
        // Handle approval logic for the item with the given id
        console.log(`Approved request with id ${id}`);
    };

    const handleReject = (id) => {
        // Handle rejection logic for the item with the given id
        console.log(`Rejected request with id ${id}`);
    };
    return (
        <View style={styles.container} >

            <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>Receiver approval</Text>


            <ScrollView style={styles.container}>
                {approvalData.map((item) => (
                    <ApprovalCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        onApprove={() => handleApprove(item.id)}
                        onReject={() => handleReject(item.id)}
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

export default ReceiverApproval