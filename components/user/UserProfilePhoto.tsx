import Image from 'next/image';
import React from 'react';

type UserProfilePhotoProps = {
  photoUrl: string;
};

export default function UserProfilePhoto({ photoUrl }: UserProfilePhotoProps) {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
      <Image className='object-cover' src={photoUrl || '/profile-photo.jpg'} width={56} height={56} alt="prof" />
    </div>
  );
}
