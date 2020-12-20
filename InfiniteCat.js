/**
 * These cats do not exist
 * 
 * http://thesecatsdonotexist.com
 */

import React from 'react';

import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

import { systemWeights } from 'react-native-typography'
import FastImage from 'react-native-fast-image';
import Card from './Card';

export default function infiniteCat() {
    const windowWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        titleText: {
            marginTop: 64,
            textAlign: "center",
            fontSize: 50,
            ...systemWeights.thin
        },
        contentText: {
            fontSize: 25,
            textAlign: "center",
            ...systemWeights.regular
        },
        scrollView: {
            alignSelf: "center",
        }
    });

    let randomNumGen = (toInclusive) => {
        return Math.round(Math.random() * toInclusive)
    }

    let createCatLocation = () => {
        let result = 'https://d2ph5fj80uercy.cloudfront.net/0' + (randomNumGen(2) + 4) + '/cat' + randomNumGen(5000) + '.jpg'
        console.log('Found cat at ' + result)

        console.log('Attempting preload...')
        try {
            FastImage.preload([
                {
                    uri: result,
                    headers: {}
                }
            ])
        } catch (error) {
            // ignore
        }

        return result
    }

    let findMoreCats = () => {
        cats.push(
            {
                val: createCatLocation(),
                id: (counter++).toString()
            }
        )
    }

    var counter = 1;
    let cats = [
        {
            id: "0",
            val: createCatLocation()
        }
    ]

    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <Text style={styles.titleText}>InfiniteCats</Text>
            <Text style={styles.contentText}>No cats were harmed</Text>
            <FlatList
                horizontal={true}
                decelerationRate="fast"
                pagingEnabled={true}
                windowSize={5}
                showsHorizontalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                data={cats}
                onEndReached={findMoreCats}
                onEndReachedThreshold={0.9}
                style={styles.scrollView}
                renderItem={({ item }) => (
                    <Card
                        cardWidth={windowWidth - 50}
                        cardMargin={25}
                        source={item.val}
                    />
                )} />
        </SafeAreaView>
    );
} 