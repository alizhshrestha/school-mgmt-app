export interface DrawerSubItem {
    title: string;
    path: any;
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
            { title: "Students", path: "/academics/students" },
            { title: "Teachers", path: "/academics/teachers" },
        ],
    },
    {
        key: "attendance",
        title: "📝 Attendance",
        subItems: [
            { title: "Students", path: "/attendance/students" },
            { title: "Teachers", path: "/attendance/teachers" },
        ],
    },
]