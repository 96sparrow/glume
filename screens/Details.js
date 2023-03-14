import { View, Text, SafeAreaView, Image, StatusBar, FlatList, Dimensions } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const DetailsHeader = ({ data, imageWidth, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
        {/*<Image
            source={data.images[0]}
            resizeMode='cover'
style={{ width: '100%', height: '100%' }} />*/}
        <ImageCarousel imageHeight={373} imageWidth={imageWidth} images={data.images} />

        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 50}
        />
        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 50}
        />
    </View>
)

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    const imageWidth = Dimensions.get('window').width;


    return (
        <View style={{ flex: 1, backgroundColor: '#e8f7fa' }}>
            {/* <FocusedStatusBar
                backgroundColor='transparent'
                translucent={true}
            /> */}

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.xxl * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} imageWidth={imageWidth} navigation={navigation} />
                        <SubInfo data={data} />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 &&
                                <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>
                                    Recensioni
                                </Text>
                            }
                        </View>
                    </React.Fragment>
                )}
            />

            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                zIndex: 1,
            }}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
        </View>
    )
}

export default Details