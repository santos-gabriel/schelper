import { createContext, ReactNode, useState } from "react";


interface ProfileProviderData {
    userName: String;
    userImg: String
}

interface ProfileProviderProps {
    children: ReactNode;
    userNameProps: String
}

export const ProfileContext = createContext ({} as ProfileProviderData);

export function ProfileProvider({children, userNameProps} : ProfileProviderProps) {

    const [userName, setUserName] = useState(userNameProps);
    const [userImg, setUserImg] = useState("");

    return (
        <ProfileContext.Provider value={{userName, userImg}} >
            {children}
        </ProfileContext.Provider>
    );

}
