import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, COLORS, SHADOWS, assets, FOOD } from '../constants';
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

export const ImageCmp = ({ imgUrl, index, marginLeft = 0, subtractSize = 0 }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={{
                width: 48 - subtractSize,
                height: 48 - subtractSize,
                marginLeft: index === 0 ? 0 : -SIZES.font + marginLeft
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

export const SubInfo = ({ data }) => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.base,
            marginTop: -SIZES.xxl + 5,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {/*<People />*/}
            <Rate stars={data.stars} />
            {/*<EndDate />*/}
        </View>
    )
}

const showStars = (starsNumber) => {
    let stars = [];
    let i;
    const emptyStars = 5 - starsNumber;
    for (i = 1; starsNumber > 1 && i <= 5; ++i) {
        stars.push(<MaterialIcons key={i} name="star" size={SIZES.starSize} color="#FFA000" />);
        starsNumber--;
    }
    if (starsNumber > 0) stars.push(<MaterialIcons key={i} name="star-half" size={SIZES.starSize} color="#FFA000" />);

    for (let j = 1; j <= emptyStars; ++j) {
        stars.push(<MaterialIcons key={j + i} name="star-border" size={SIZES.starSize} color="#FFA000" />);
    }
    return stars;
}

const showFoodTypes = (foodTypes) => {
    let i = 0;
    let foodTypesToShow = [];
    for (let foodName of foodTypes.sort((a, b) => a.course - b.course)) {
        if (FOOD.filter(f => f.name === foodName).length > 0) {
            const imageSrc = assets[foodName];
            foodTypesToShow.push(<ImageCmp imgUrl={imageSrc} index={i} marginLeft={20} subtractSize={6} key={`Food-${i}`} />);
        }

        i++;
    }
    return foodTypesToShow;
}

export const Rate = ({ stars }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            {
                showStars(stars)
            }
        </View>
    )
}

export const FoodTypes = ({ foodTypes }) => {
    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            justifyContent: 'flex-end'
        }}>
            {
                showFoodTypes(foodTypes)
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