import Header from "components/header";
import Breadcrumbs from "components/breadcrumbs";
import Body from "components/body";
import { ProfileContext } from 'components/profile-provider'

function App() {
    return (
        <ProfileContext>
            <Header />
            <Breadcrumbs />
            <Body />
        </ProfileContext>
    );
}

export default App;
