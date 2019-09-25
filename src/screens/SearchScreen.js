import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    }

    return <View style={{ flex: 1 }}>
            {errorMessage ? <Text> {errorMessage} </Text> : <Text> Search Screen shows {results.length} results </Text>}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;
