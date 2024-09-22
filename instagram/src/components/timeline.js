import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

const Timeline = () => {
  // we need to get the photos of logged in users (hook)
  const { photos } = usePhotos();
  
  // on loading the photos, we need to use react skeleton
  // if we have photos render them, create a post component
  // if the user has no photos, then tell them to create some photos
  return (
  <div className="container col-span-2">
    {!photos ? (
      <Skeleton count={4} width={640} height={500} className="mb-5" />
    ): photos?.length > 0 ? (
      photos.map((content) => <Post key={content.docId} content={content} />)
    ): (
        <p className="text-center text-2xl">Follow people to see the photos</p>
    )}
  </div>
  );
};

export default Timeline;


