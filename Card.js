import React from 'react';
import {
    StyleSheet
} from 'react-native';

import CardView from 'react-native-cardview';
import FastImage from 'react-native-fast-image';

const Card = (
    param
) => {
    const style = StyleSheet.create({
        cardViewStyle: {
            color: "#404040",
            width: param.cardWidth,
            height: param.cardWidth,
            margin: param.cardMargin,
            alignSelf: "center"
        },
        imageStyle: {
            width: "100%",
            height: "100%"
        }
    });

    return (
        <>
            <CardView
                style={style.cardViewStyle}
                cardElevation={5}
                cornerRadius={0}>
                <FastImage
                    style={style.imageStyle}
                    source={{ uri: param.source }} />
            </CardView>
        </>
    );
};

export default Card;