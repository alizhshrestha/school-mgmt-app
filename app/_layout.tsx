import "./globals.css"
import {Slot, Stack} from "expo-router";
import {Color} from "@/constants/ColorPallete";


export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="(drawer)" options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="academics/students/[id]" options={{
                title: "Student Details",
            }}/>
        </Stack>
    )
}
