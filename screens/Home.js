import { View, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';
import { COLORS, ShopData } from '../constants';
import { ShopCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {

    const [shopData, setShopData] = useState(ShopData);
    const handleSearch = (value) => {
        if (!value.length) return setShopData(ShopData);

        const filteredData = ShopData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

        if (filteredData.length) {
            setShopData(filteredData);
        } else {
            //he does something like: setShopData(ShopData);
            setShopData(ShopData);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*<FocusedStatusBar background={COLORS.primary} /> r*/}
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={shopData}
                        renderItem={({ item }) => <ShopCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />} />
                </View>

                <View style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home