import React, { useEffect, useState } from "react";
import { getUserProfile, Profile, setUserProfile } from "../../api/mock-api";
import { store } from "../store";

const StoreProvider = store.Provider;

interface Props {
    children: React.ReactNode;
}

export const ProfileContext = ({ children }: Props) => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        getUserProfile().then(setProfile);
    }, []);

    const updateProfileFields = (newProfile: Profile) => {
        return setUserProfile(newProfile).then(() => {
            setProfile({ ...profile, ...newProfile });
        });
    }

    return (
        <StoreProvider value={{ profile, setProfile: updateProfileFields, isEditing: editing, setIsEditing: setEditing }}>
            {children}
        </StoreProvider>
    );
}
