import { View, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { COLORS, FONTS, SIZES, assets, FOOD } from '../constants';
import { CircleButton } from './Button';
import {
    useState
} from 'react';
import LegendModal from './LegendModal';

const HomeHeader = ({ onSearch }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
            marginTop: 40
        }}>
            <LegendModal open={isModalVisible} onBackdropPressHandle={() => toggleModal()} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Image source={assets.logo} resizeMode='contain' style={{ width: 90, height: 25, }} />
                <View style={{ width: 45, height: 45 }}>
                    <Image
                        source={assets.person01}
                        resizeMode='contain'
                        style={{ width: '100%', height: '100%' }} />
                    <Image
                        source={assets.badge}
                        resizeMode='contain'
                        style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }} />
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font }}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
                    Ciao, Claudio! 👋
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
                        Troviamo un locale Gluten Free
                    </Text>
                    <CircleButton
                        width={SIZES.large}
                        height={SIZES.large}
                        backgroundColor={COLORS.primary}
                        imgUrl={assets.info} right={30}
                        handlePress={() => setModalVisible(true)}
                    />
                </View>
            </View>


            <View style={{ marginTop: SIZES.font }}>
                <View style={{
                    width: '100%',
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.gray,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2
                }}>
                    <Image
                        source={assets.search}
                        resizeMode='contain'
                        style={{ width: 20, height: 20, marginRight: SIZES.base }}
                    />
                    <TextInput
                        placeholder='Search Shop'
                        style={{ flex: 1 }}
                        onChangeText={onSearch} />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader