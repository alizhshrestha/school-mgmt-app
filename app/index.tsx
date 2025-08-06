import {Text, View, Button} from "react-native";
import {Stack, useNavigation} from "expo-router";
import {DrawerActions} from "@react-navigation/native";
import {DrawerToggleButton} from "@react-navigation/drawer";

export default function Index() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>School Management</Text>
            <Stack.Screen
                options={{
                    headerRight: () => <DrawerToggleButton />
                }}
            />
            {/*<Button*/}
            {/*    title="Toggle Drawer"*/}
            {/*    onPress={() => navigation.dispatch((DrawerActions.toggleDrawer()))}*/}
            {/*/>*/}
        </View>
    );
}
