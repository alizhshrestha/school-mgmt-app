import React, { useState } from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {Color} from "@/constants/ColorPallete";

// Simple Form Field component with label and input
const FormField = ({
                       label,
                       required = false,
                       placeholder = '',
                   }: {
    label: string;
    required?: boolean;
    placeholder?: string;
}) => (
    <View className="form-field mb-4">
        <Text className={`form-label ${required ? 'form-label-required' : ''}`}>
            {label}
        </Text>
        <TextInput
            className="form-input"
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF" // text-gray-400
        />
    </View>
);

const AddStudentScreen = () => {
    const [showMore, setShowMore] = useState(false);
    const router = useRouter();

    return (
        <ScrollView className="flex-1 bg-[var(--color-bg)] p-4">
            <Text className="text-xl font-bold text-[var(--color-text-main)] mb-6">
                Add Student
            </Text>

            {/* Required Fields */}
            <FormField label="Student Name" required placeholder="Full Name" />
            <FormField label="D.O.B. (B.S.)" required placeholder="YYYY-MM-DD" />
            <FormField label="Contact Number" required placeholder="98XXXXXXXX" />
            <FormField label="Permanent Address" required placeholder="E.g., Kathmandu, Nepal" />
            <FormField label="Gender" required placeholder="Male / Female / Other" />

            {/* Toggle Show More */}
            <TouchableOpacity
                onPress={() => setShowMore(!showMore)}
                className="flex-row items-center mt-4 mb-2"
            >
                <AntDesign
                    name={showMore ? 'upcircleo' : 'downcircleo'}
                    size={20}
                    color="#7C3AED"
                />
                <Text className="ml-2 text-[var(--color-primary)] font-medium">
                    {showMore ? 'Show Less' : 'Show More'}
                </Text>
            </TouchableOpacity>

            {/* Optional Fields */}
            {showMore && (
                <>
                    <FormField label="Joined Date" placeholder="YYYY-MM-DD" />
                    <FormField label="EMIS ID" placeholder="EMIS-0001" />
                    <FormField label="Roll No. / Govt. ID" placeholder="ROLL-001" />
                    <FormField label="Symbol Number" placeholder="SYM-001" />
                    <FormField label="Registration Number" placeholder="REG-001" />
                    <FormField label="Fee Category" placeholder="General / Scholarship" />
                    <FormField label="School House" placeholder="Red / Blue / Green / Yellow" />
                    <FormField label="E-Mail" placeholder="example@school.com" />
                    <FormField label="Temporary Address" placeholder="E.g., Bhaktapur, Nepal" />
                    <FormField label="Blood Group" placeholder="A+ / B- / O+" />
                    <FormField label="Nationality" placeholder="Nepali / Others" />
                    <FormField label="Religion" placeholder="Hindu / Buddhist / Muslim" />
                    <FormField label="Ethnic Group" placeholder="Madhesi / Janajati / Others" />
                    <FormField label="Mother Tongue" placeholder="Nepali / Maithili / Others" />
                    <FormField label="Familiar with Smartphone" placeholder="Yes / No" />

                    {/* Father Info */}
                    <Text className="form-label mt-4">Father Info</Text>
                    <FormField label="Father Name" placeholder="Full Name" />
                    <FormField label="Contact Number" placeholder="98XXXXXXXX" />
                    <FormField label="Address" placeholder="Address" />
                    <FormField label="E-Mail" placeholder="father@example.com" />
                    <FormField label="Occupation" placeholder="Engineer / Farmer / etc." />

                    {/* Mother Info */}
                    <Text className="form-label mt-4">Mother Info</Text>
                    <FormField label="Mother Name" placeholder="Full Name" />
                    <FormField label="Contact Number" placeholder="98XXXXXXXX" />
                    <FormField label="Address" placeholder="Address" />
                    <FormField label="E-Mail" placeholder="mother@example.com" />
                    <FormField label="Occupation" placeholder="Occupation" />

                    {/* Local Guardian */}
                    <Text className="form-label mt-4">Local Guardian</Text>
                    <FormField label="Name" placeholder="Guardian Name" />
                    <FormField label="Contact Number" placeholder="98XXXXXXXX" />
                    <FormField label="Address" placeholder="Address" />
                    <FormField label="E-Mail" placeholder="guardian@example.com" />
                    <FormField label="Occupation" placeholder="Occupation" />
                    <FormField label="Relation with Student" placeholder="Uncle / Aunt / etc." />

                    {/* Previous School Info */}
                    <FormField label="Previous School Name" placeholder="School Name" />
                    <FormField label="Referred By" placeholder="Friend / Family / etc." />
                    <FormField label="Remarks" placeholder="Any remarks" />

                    {/* Address Details */}
                    <Text className="form-label mt-4">Permanent Address Info</Text>
                    <FormField label="Province" placeholder="Province Name" />
                    <FormField label="District" placeholder="District Name" />
                    <FormField label="Municipality" placeholder="Municipality Name" />
                    <FormField label="Ward No." placeholder="Ward Number" />

                    <Text className="form-label mt-4">Temporary Address Info</Text>
                    <FormField label="Province" placeholder="Province Name" />
                    <FormField label="District" placeholder="District Name" />
                    <FormField label="Municipality" placeholder="Municipality Name" />
                    <FormField label="Ward No." placeholder="Ward Number" />

                    <FormField label="Shift" placeholder="Morning / Day / Evening" />
                </>
            )}

            {/* Submit Button */}
            <Pressable className="px-4 py-2 rounded-lg font-semibold mt-4" style={{backgroundColor: Color.primary}} onPress={() => console.log("Submit student")}>
                <Text className="text-white text-center">Submit</Text>
            </Pressable>
        </ScrollView>
    );
};

export default AddStudentScreen;
