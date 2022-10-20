import ProfileView from "components/profile";
import { EditProfileForm } from "components/edit-profile-form";
import { useEditProfile, useProfile } from "components/store";

function Body() {
    const profile = useProfile();
    const { isEditing } = useEditProfile();

    const state = () => {
        if (isEditing) {
            return <EditProfileForm />;
        }
        return <ProfileView profile={profile} />;
    };

    return state();
}

export default Body;
