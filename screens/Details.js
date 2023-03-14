import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
        <Image
            source={data.images[0]}
            resizeMode='cover'
            style={{ width: '100%', height: '100%' }} />
        {/*<Carousel
            loop
            width='100%'
            height='100%'
            autoPlay={true}
            data={data.images}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {index}
                    </Text>
                </View>
            )}
                />*/}

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
                        <DetailsHeader data={data} navigation={navigation} />
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