import { View, Text } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { useState } from 'react';
import { ImageCmp } from './SubInfo';
import { SIZES, FONTS, FOOD, assets } from '../constants';
import { CircleButton } from './Button';

const LegendModal = ({ open = false, onBackdropPressHandle }) => {

    return (
        <Modal isVisible={open} animationIn={'fadeIn'} animationOut={'fadeOut'} onBackdropPress={onBackdropPressHandle} >
            <View style={{
                alignSelf: 'center',
                borderStyle: 'solid',
                borderRadius: SIZES.large,
                flex: 1,
                maxHeight: 400,
                width: 250,
                backgroundColor: 'white',
                justifyContent: 'center',
                paddingLeft: 20
            }}>
                <Text style={{ marginBottom: 40, fontSize: SIZES.font * 1.5, fontFamily: FONTS.medium }}>Legenda: </Text>
                {FOOD.map((food, i) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <ImageCmp imgUrl={assets[food]} index={0} key={`Food-${i}`} />
                        <Text style={{ marginLeft: 40 }}> {food} </Text>
                    </View>
                ))}
                <CircleButton imgUrl={assets.close} handlePress={onBackdropPressHandle} top={10} right={10} />
            </View>
        </Modal>
    )
}

export default LegendModal