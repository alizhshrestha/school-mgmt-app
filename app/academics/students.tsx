import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";
import {Student, students} from "@/constants/StudentInfo";
import {Image} from "expo-image";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Color} from "@/constants/ColorPallete";

const StudentsScreen = () => {

    const router = useRouter();

    const handleView = (student: Student) => {
        console.log(`Student View: ${student.id}`);
        // router.push(`/schools/123/admin/academics/students/${student.id}`);
    }

    const handleEdit = (student: Student) => {
        console.log(`Student Edit: ${student.id}`);
        // router.push(`/schools/123/admin/academics/students/${student.id}/edit`)
    }

    const handleDelete = (studentId: String) => {
        console.log(`Delete student with ID: ${studentId}`)
    }

    return (
        <View className="flex-1 bg-gray-50 p-4">
            <Text className="text-xl font-bold mb-4">Students</Text>

            <FlatList
                data={students}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleView(item)}>
                        <View className="flex-row items-center gap-4 p-4 mb-3 rounded-2xl bg-white shadow-lg">
                            <Image
                                source={{uri: item.profileUrl}}
                                className="w-12 h-12 rounded-full"
                            />

                            {/*Student Basic Info*/}
                            <View className="flex-1">
                                <Text className="text-base font-semibold text-gray-600">{item.fullName}</Text>
                                <Text className="text-sm text-gray-600">
                                    {item.gender} • Roll: {item.rollNumber}
                                </Text>
                                <Text className="text-sm text-gray-500">{item.permanentAddress}</Text>
                            </View>

                            {/*Action Icons*/}
                            <View className="flex-row gap-5 items-center">
                                <TouchableOpacity onPress={() => handleEdit(item)}>
                                    <AntDesign name="edit" size={20} color={Color.editIcon}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDelete(item.id.toString())}>
                                    <AntDesign name="delete" size={20} color={Color.deleteIcon}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default StudentsScreen
