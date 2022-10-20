import { useEditProfile } from "../store";

function Header() {
    const { isEditing, setIsEditing } = useEditProfile();

    const renderBtn = () => {
        if (!isEditing) {
            return (
                <button type="button" className="btn" onClick={() => setIsEditing(true)}>
                    Edit Profile
                </button>
            )
        }
        return null;
    };

    return (
        <header className="header">
            <div className="wrap">
                <div className="flex">
                    <h2 className="title">{isEditing ? "Edit profile" : "My profile"}</h2>
                    {renderBtn()}
                </div>
            </div>
        </header>
    )
}

export default Header;