import "../globals.css"
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
import {red} from "react-native-reanimated/lib/typescript/Colors";
import {Color} from "@/constants/ColorPallete";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
                    source={require("../../assets/images/react-logo.png")}
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
                                    icon={({color, size})=> (
                                        <FontAwesome name={sub.icon} size={size} color={color} />
                                    )}
                                />
                            </View>
                        ))
                    }
                </View>
            ))}
        </DrawerContentScrollView>
    )
}

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerActiveTintColor: DrawerItemColor.activeTintColor,
                    drawerHideStatusBarOnOpen: true,
                    headerStyle: {
                        backgroundColor: `${Color.primary}`
                    },
                    headerShadowVisible: false
                }}
            >
                {/*<Drawer.Screen*/}
                {/*    name="index"*/}
                {/*    options={{*/}
                {/*        drawerLabel: "Home",*/}
                {/*        title: "Overview",*/}
                {/*        drawerIcon: ({color, size}) => (*/}
                {/*            <FontAwesome name="home" size={size} color={color}/>*/}
                {/*        )*/}Material
                {/*    }}*/}
                {/*/>*/}

                {/*Hidden sub-routes from DrawerConfig*/}
                {DrawerCategories.flatMap((category) =>
                category.subItems.map((sub) => (
                    <Drawer.Screen
                        key={sub.path}
                        name={sub.path.slice(1)}//removes leading '/'
                        options={{
                            drawerItemStyle: {display: 'none'},
                            headerTitle: sub.title,
                        }}
                    />
                )))}

                {/*<Drawer.Screen*/}
                {/*    name="academics/students/[id]" //removes leading '/'*/}
                {/*    options={{drawerItemStyle: {display: 'none'}}}*/}
                {/*/>*/}
            </Drawer>
        </GestureHandlerRootView>
    )
}
