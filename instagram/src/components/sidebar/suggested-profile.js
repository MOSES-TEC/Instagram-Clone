import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase';

const SuggestedProfile = ({ profileDocId, username, profileId, userId, loggedInUserDocId }) => {
    const [followed, setFollowed] = useState(false);

    async function handlefollowUser() {
        setFollowed(true);

        // firebase: create 2 services (function)
        // update the following array of the logged in user (in this case my profile)
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
        // update the following array of the user who has been followed
        await updateFollowedUserFollowers(profileDocId, userId, false)
    }
  return !followed ? (
    <div className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between">
            <img className="rounded-full w-8 flex mr-3" src={`/images/avatars/${username}.jpg`} alt='' />
            <Link to={`/p/${username}`}>
                <p className="font-bold text-sm">{username}</p>
            </Link>
        </div>

        <button className="text-xs font-bold text-blue-medium" type="button" onClick={handlefollowUser}>Follow</button>
    </div>
  ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired,
};
