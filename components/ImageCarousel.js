import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import { SIZES } from '../constants';


const ImageCarousel = ({ imageHeight, imageWidth, images, home = false }) => {
    return (
        <Carousel
            loop
            height={imageHeight}
            style={{
                borderTopLeftRadius: home ? SIZES.font : 0,
                borderTopRightRadius: home ? SIZES.font : 0
            }}
            width={imageWidth}
            //autoPlay={true}
            data={images}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
            //scrollAnimationDuration={1000}
            //onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <Image
                    source={images[index]}
                    resizeMode='cover'
                    style={{ width: '100%', height: '100%' }} />
            )}
        />
    )
}

export default ImageCarousel