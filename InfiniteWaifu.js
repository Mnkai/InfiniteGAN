/**
 * This Waifu Does Not Exist (TWDNE v3.5)
 * 
 * https://www.thiswaifudoesnotexist.net/index.html
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

export default function infiniteWaifu() {
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

    let createWaifuLocation = () => {
        let result = 'https://www.thiswaifudoesnotexist.net/example-' + (50001 + randomNumGen(24999)) + '.jpg'
        console.log('Found waifu at ' + result)

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

    let findMoreWaifu = () => {
        waifu.push(
            {
                val: createWaifuLocation(),
                id: (counter++).toString()
            }
        )
    }

    var counter = 1;
    let waifu = [
        {
            id: "0",
            val: createWaifuLocation()
        }
    ]

    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <Text style={styles.titleText}>InfiniteWaifu</Text>
            <Text style={styles.contentText}>𝜓=0.6</Text>
            <FlatList
                horizontal={true}
                decelerationRate="fast"
                pagingEnabled={true}
                windowSize={5}
                showsHorizontalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                data={waifu}
                onEndReached={findMoreWaifu}
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