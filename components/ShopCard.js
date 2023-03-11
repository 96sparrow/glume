import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, Rate, ShopTitle, FoodTypes } from './SubInfo';

const ShopCard = ({ data }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { data })}>
            <View style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark
            }}>
                <View style={{ width: '100%', height: 250 }}>
                    <Image
                        source={data.image}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: SIZES.font,
                            borderTopRightRadius: SIZES.font
                        }}
                    />
                    <CircleButton imgUrl={assets.heart} right={10} top={10} />
                </View>

                <SubInfo />

                <View style={{ width: '100%', padding: SIZES.font }} >
                    <ShopTitle
                        title={data.name}
                        subTitle={data.address}
                        titleSize={SIZES.large}
                        subTitleSize={SIZES.small}
                    />

                    <View style={{
                        marginTop: SIZES.font,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Rate stars={data.stars} />
                        <FoodTypes foodTypes={data.foodTypes}></FoodTypes>
                        {/* VIEW WITH FOOD SYMBOLS: PIZZA, PASTA, ... */}
                        {/* <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate('Details', { data })} /> */}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ShopCard