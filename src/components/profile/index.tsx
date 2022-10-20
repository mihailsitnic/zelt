import { useProfileForm } from "components/use-profile-form";
import img from "img";

function ProfileView(props: any) {
    const { profile } = props;
    const { profilePictureURL } = useProfileForm();

    const avatar = !!profilePictureURL ? profilePictureURL : img.logo;

    return (
        <section className="profile">
            <div className="wrap">
                <div className="flex">
                    <div className="picture">
                        <img src={avatar} alt="avatar" className="avatar" />
                        <p className="name">
                            {profile?.firstName} {profile?.lastName}
                        </p>
                    </div>
                    <div className="info">
                        {profile && (
                            <>
                                <h3 className="info__title">About me</h3>

                                <ul className="info__list">
                                    <li className="info__li">
                                        <span className="info__span">{profile?.dob}</span>
                                    </li>
                                    <li className="info__li">
                                        <span className="info__span">{profile?.salary}</span>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileView;
