import "./globals.css"
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {Pressable, Text, View} from "react-native";
import {Image} from "expo-image";
import {usePathname, useRouter} from "expo-router";
import {useState} from "react";
import {DrawerCategories, DrawerItemColor} from "@/constants/DrawerConfig";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (key: string) => {
        setExpanded((prev) => ({...prev, [key]: !prev[key]}));
    };

    return (
        <DrawerContentScrollView {...props}>
            <View className="p-4 items-center">
                <Image
                    source={require("../assets/images/react-logo.png")}
                    style={{width: 80, height: 80, borderRadius: 40}}
                />
                <Text className="text-lg font-bold mt-2">My School</Text>
            </View>
            <DrawerItemList {...props} />

            {/*Render categories here*/}
            {DrawerCategories.map((category) => (
                <View className="px-4 mt-2" key={category.key}>
                    <Pressable onPress={() => toggleExpand(category.key)}>
                        <Text className="text-md font-semibold mb-2">{category.title}</Text>
                    </Pressable>
                    {expanded[category.key] &&
                        category.subItems.map((sub) => (
                            <View className="pl-4" key={sub.path}>
                                <DrawerItem
                                    label={sub.title}
                                    focused={pathname === sub.path}
                                    onPress={() => router.push(sub.path)}
                                    activeTintColor={DrawerItemColor.activeTintColor}
                                />
                            </View>
                        ))
                    }
                </View>
            ))}
        </DrawerContentScrollView>
    )
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerActiveTintColor: DrawerItemColor.activeTintColor,
                    drawerHideStatusBarOnOpen: true,
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Home",
                        title: "Overview",
                        drawerIcon: ({color, size}) => (
                            <FontAwesome name="home" size={size} color={color}/>
                        )
                    }}
                />

                {/*Hidden sub-routes from DrawerConfig*/}
                {DrawerCategories.flatMap((category) =>
                category.subItems.map((sub) => (
                    <Drawer.Screen
                        key={sub.path}
                        name={sub.path.slice(1)} //removes leading '/'
                        options={{drawerItemStyle: {display: 'none'}}}
                    />
                )))}
            </Drawer>
        </GestureHandlerRootView>
    )
}
