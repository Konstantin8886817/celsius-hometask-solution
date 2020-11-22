import {SearchInput, Loader, ErrorMessage,HomePageTitle} from "../presentations";
import {useState, useEffect} from "react";
import UserComponent from "./UserComponent";
import {getUserInfoById} from "../../utils/Api";

const HomePage = () => {
    const [state, setState] = useState({user: null, loading: false, error: null});
    const [userInput, changeUserInput] = useState('');
    const [searchId, setSearchId] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(userInput && userInput !== searchId) {
                setState({user: null, loading: true, error: null});
                setSearchId(userInput);
            }
        }
    }

    useEffect(() => {
        if(searchId){
        getUserInfoById(searchId)
            .then(data => {
                setState(s => {
                    return {
                        user: data,
                        loading: false,
                        error: null
                    }
                });
            })
            .catch(error => setState(s => {
                return {
                    ...s,
                    loading: false,
                    error: error.message,
                    user: null
                }
            }));
        }
    }, [searchId]);

    return (
        <>
            <HomePageTitle>Get stackoverflow posts</HomePageTitle>
            <SearchInput
                value={userInput}
                onChange={e => changeUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Type user id'
            />
            {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
            {state.loading && <Loader/>}
            {!state.error && !state.loading && state.user && <UserComponent
                userId={state.user.user_id}
                acceptRate={state.user.accept_rate}
                displayName={state.user.display_name}
                avatarUrl={state.user.profile_image}
                reputation={state.user.reputation}
            />}
        </>
    )
}

export default HomePage;
