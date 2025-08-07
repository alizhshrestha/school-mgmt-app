import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {useLocalSearchParams} from "expo-router";
import {students} from "@/constants/StudentInfo";
import {Image} from "expo-image";

const StudentDetailScreen = () => {
    const {id} = useLocalSearchParams();
    const student = students.find((s) => s.id === Number(id));
    const [showMore, setShowMore] = useState(false);

    if (!student) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50">
                <Text className="text-lg font-semibold text-red-500">Student not found</Text>
            </View>
        );
    }
    return (
        <ScrollView className="flex-1 bg-gray-50 p-4">
            {/*Header*/}
            <View className="items-center mb-4">
                <Image
                    source={{uri: student.profileUrl}}
                    className="w-24 h-24 rounded-full mb-2"
                />
                <Text className="text-xl font-bold text-gray-800">{student.fullName}</Text>
                <Text className="text-base text-gray-600">{student.gender} • Roll: {student.rollNumber}</Text>
                <Text className="text-sm text-gray-500">{student.permanentAddress}</Text>
            </View>
            {/*Basic Info*/}
            <View className="bg-white p-4 rounded-2xl shadow mb-4">
                <SectionHeader title="Basic Information"/>
                <InfoRow label="Class" value="8"/>
                <InfoRow label="Section" value="A"/>
                <InfoRow label="Contact" value={student.contactNumber}/>
                <InfoRow label="Email" value={student.email}/>
                <InfoRow label="EMIS ID" value={student.emisId}/>
                <InfoRow label="Blood Group" value={student.bloodGroup}/>
                <InfoRow label="House" value={student.schoolHouse}/>
            </View>

            {/*Show More*/}
            {showMore && (
                <View className="bg-white p-4 rounded-2xl shadow mb-4">
                    <SectionHeader title="Additional Details"/>
                    <InfoRow label="Date of Birth" value={student.dob}/>
                    <InfoRow label="Joined Date" value={student.joinedDate}/>
                    <InfoRow label="Symbol Number" value={student.symbolNumber}/>
                    <InfoRow label="Registration Number" value={student.registrationNumber}/>
                    <InfoRow label="Fee Category" value={student.feeCategory}/>
                    <InfoRow label="Nationality" value={student.nationality}/>
                    <InfoRow label="Religion" value={student.religion}/>
                    <InfoRow label="Ethnic Group" value={student.ethnicGroup}/>
                    <InfoRow label="Mother Tongue" value={student.motherTongue}/>
                    <InfoRow label="Familiar with Smartphone" value={student.familiarWithSmartphone ? "Yes" : "No"}/>

                    <SectionHeader title="Family Details"/>
                    <InfoRow label="Father" value={student.father.name}/>
                    <InfoRow label="Father Contact" value={student.father.contactNumber}/>
                    <InfoRow label="Mother" value={student.mother.name}/>
                    <InfoRow label="Mother Contact" value={student.mother.contactNumber}/>
                    <InfoRow label="Guardian" value={student.localGuardian.name}/>
                    <InfoRow label="Guardian Relation" value={student.localGuardian.relation}/>
                    <InfoRow label="Previous School" value={student.previousSchoolName}/>

                    <SectionHeader title="Address Details"/>
                    <InfoRow label="Permanent Address"
                             value={`${student.permanentAddressInfo.municipality}, Ward ${student.permanentAddressInfo.wardNo}, ${student.permanentAddressInfo.district}`}/>
                    <InfoRow label="Temporary Address"
                             value={`${student.temporaryAddressInfo.municipality}, Ward ${student.temporaryAddressInfo.wardNo}, ${student.temporaryAddressInfo.district}`}/>
                </View>
            )}

            {/*Toggle Show More*/}
            <TouchableOpacity onPress={() => setShowMore(!showMore)} className="items-center">
                <Text className="text-blue-600 font-semibold mb-10">
                    {showMore ? 'Show Less' : 'Show More'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const InfoRow = ({label, value}: { label: string, value: string }) => (
    <View className="flex-row justify-between items-center py-1 border-b border-gray-100">
        <Text className="text-sm text-gray-600 w-1/2 font-medium">{label}</Text>
        <Text className="text-sm text-gray-800 w-1/2 text-right">{value}</Text>
    </View>
)

const SectionHeader = ({title}: { title: string }) => (
    <Text className="text-md font-semibold text-gray-700 mb-2 mt-2">{title}</Text>
)

export default StudentDetailScreen;