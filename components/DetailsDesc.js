import { View, Text } from 'react-native';
import { useState } from 'react';

import { FoodTypes, Rate, ShopTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, SIZES.descriptionSize));
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center'
            }}>
                <ShopTitle
                    title={data.name}
                    subTitle={data.address}
                    titleSize={SIZES.xxl}
                    subTitleSize={SIZES.font}
                />
                <FoodTypes foodTypes={data.foodTypes} />
            </View>

            <View style={{ marginVertical: SIZES.xxl * 1.5 }}>
                <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
                    Descrizione
                </Text>
                <View style={{ marginTop: SIZES.base }}>
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.regular,
                        color: COLORS.secondary,
                        lineHeight: SIZES.large
                    }}>
                        {text}
                        {!readMore && '...'}
                        <Text style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.semiBold,
                            color: COLORS.primary
                        }}
                            onPress={() => {
                                if (!readMore) {
                                    setText(data.description);
                                    setReadMore(true);
                                }
                                else {
                                    setText(data.description.slice(0, SIZES.descriptionSize));
                                    setReadMore(false);
                                }
                            }}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </Text>
                    </Text>
                </View>

            </View>

        </>
    )
}

export default DetailsDesc