import React, { useState } from "react";
import { useEditProfile, useProfile, useSetProfile } from "../store";

export const useProfileForm = () => {
    const profile = useProfile();
    const setProfile = useSetProfile();
    const { setIsEditing } = useEditProfile()

    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState<string>(profile?.firstName ?? '');
    const [lastName, setLastName] = useState<string>(profile?.lastName ?? '');
    const [dob, setDob] = useState<string>(profile?.dob ?? '');
    const [salary, setSalary] = useState<number>(profile?.salary ?? 0);
    const [profilePictureURL, setProfilePictureURL] = useState<string>(profile?.profilePictureURL ?? '');

    const submitForm = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        try {
            setLoading(true);

            await setProfile({
                firstName,
                lastName,
                dob,
                salary,
                profilePictureURL
            });

            setIsEditing(false)
        } catch (err) {
            // error logic
        } finally {
            setLoading(false);
        }
    }

    return {
        // values
        firstName,
        lastName,
        dob,
        salary,
        profilePictureURL,
        saving: loading,
        // handlers
        setFirstName,
        setLastName,
        setDob,
        setSalary,
        setProfilePictureURL,
        submitForm,
    }
}
