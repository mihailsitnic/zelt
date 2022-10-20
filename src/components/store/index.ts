import { createContext, useContext } from "react";
import { Profile } from "../../api/mock-api";

interface Store {
    profile: Profile | null;
    setProfile: (profile: Profile) => Promise<void>;
    isEditing: boolean;
    setIsEditing: (isEditingProfile: boolean) => void;
}

const initialState: Store = { profile: null, setProfile: Promise.resolve, isEditing: false, setIsEditing: () => null };

export const store = createContext<Store>(initialState);

export const useProfile = () => useContext(store).profile;
export const useSetProfile = () => useContext(store).setProfile;
export const useEditProfile = () => {
    const { isEditing, setIsEditing } = useContext(store);

    return {
        isEditing,
        setIsEditing,
    }
}
