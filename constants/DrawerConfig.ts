
export interface DrawerSubItem {
    title: string;
    path: any;
    icon: any;
}

export interface DrawerCategory {
    key: string;
    title: string;
    subItems: DrawerSubItem[];
}

export const DrawerItemColor = {
    activeTintColor: "#3e84ed",
};

export const DrawerCategories: DrawerCategory[] = [
    {
        key: "academics",
        title: "📚 Academics",
        subItems: [
            { title: "Student", path: "/academics/students", icon: "graduation-cap" },
            { title: "Teacher", path: "/academics/teachers", icon: "user"},
        ],
    },
    {
        key: "attendance",
        title: "📝 Attendance",
        subItems: [
            { title: "Student", path: "/attendance/students", icon: "graduation-cap" },
            { title: "Teacher", path: "/attendance/teachers",  icon: "user" },
        ],
    },
]