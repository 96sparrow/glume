import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, Rate, ShopTitle, FoodTypes } from './SubInfo';
import ImageCarousel from './ImageCarousel';

const ShopCard = ({ data }) => {
    const navigation = useNavigation();
    const imageWidth = Dimensions.get('window').width;
    const imageHeight = Dimensions.get('window').imageHeight;
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { data })}>
            <View style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.xxl,
                margin: SIZES.base,
                ...SHADOWS.dark
            }}>
                <View style={{ width: '100%', height: 250 }}>
                    <ImageCarousel imageHeight={imageHeight} imageWidth={imageWidth} home={true} images={data.images} />
                    <CircleButton imgUrl={assets.heart} right={10} top={10} />
                </View>

                <SubInfo data={data} />

                <View style={{ width: '100%', padding: SIZES.font }} >
                    <ShopTitle
                        title={data.name}
                        subTitle={data.address}
                        titleSize={SIZES.xl}
                        subTitleSize={SIZES.font}
                    />

                    <View style={{
                        marginTop: SIZES.font,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        {/*<Rate stars={data.stars} />*/}
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