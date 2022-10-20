import { useProfileForm } from "components/use-profile-form";
import img from "img";

export const EditProfileForm = () => {
    const {
        firstName,
        lastName,
        submitForm,
        salary,
        profilePictureURL,
        dob,
        saving,
        setDob,
        setProfilePictureURL,
        setLastName,
        setSalary,
        setFirstName,
    } = useProfileForm();

    const avatar = !!profilePictureURL ? profilePictureURL : img.logo;

    return (
        <section className="profile-edit">
            <div className="wrap">
                <form onSubmit={submitForm} className="form">
                    <div className="body">
                        <div className="form-group">
                            <div className="img">
                                <img src={avatar} alt="avatar" className="avatar" />
                            </div>
                            <div className="upload">
                                <label className="label">Profile picture</label>
                                <input
                                    type="text"
                                    placeholder="https://"
                                    className="input"
                                    value={profilePictureURL}
                                    disabled={saving}
                                    onChange={(e) => setProfilePictureURL(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label htmlFor="firstName" className="label">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    disabled={saving}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="label">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="input"
                                    value={lastName}
                                    disabled={saving}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label htmlFor="dateOfBirth" className="label">Date of Birth</label>
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    className="input"
                                    value={dob}
                                    disabled={saving}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="salary" className="label">Salary</label>
                                <input
                                    type="number"
                                    className="input"
                                    value={salary}
                                    disabled={saving}
                                    onChange={(e) => setSalary(parseInt(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <input
                            type="submit"
                            value="Submit"
                            disabled={saving}
                            className="btn"
                        />
                        {saving && <span className="loader" />}
                    </footer>
                </form>
            </div>
        </section>
    );
};
