import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const ShopTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: titleSize,
                color: COLORS.primary
            }}>{title}</Text>

            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary
            }}>{subTitle}</Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    )
}

export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}>Ending in
            </Text>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.primary
            }}>12h 30m
            </Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <People />
            <EndDate />
        </View>
    )
}

const showStars = (starsNumber) => {
    let stars = [];
    let i;
    const emptyStars = 5 - starsNumber;
    for (i = 1; starsNumber > 1 && i <= 5; ++i) {
        stars.push(<MaterialIcons key={i} name="star" size={30} color="#FFA000" />);
        starsNumber--;
    }
    if (starsNumber > 0) stars.push(<MaterialIcons key={i} name="star-half" size={30} color="#FFA000" />);

    for (let j = 1; j <= emptyStars; ++j) {
        stars.push(<MaterialIcons key={j + i} name="star-border" size={30} color="#FFA000" />);
    }
    return stars;
}

export const EthPrice = ({ stars }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>

            {
                showStars(stars)
            }
        </View>
    )
}

export const People = () => {
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            {[assets.person01, assets.person02, assets.person03].map((imgUrl, index) => (<ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />))}
        </View>
    )
}