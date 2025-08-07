import { Stack } from 'expo-router';
import {Color} from "@/constants/ColorPallete";

export default function StudentDetailLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitle: 'Student Details',
                headerStyle: {
                    backgroundColor: `${Color.primary}`
                },
            }}
        />
    );
}
