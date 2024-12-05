import React from 'react';
import { Heart, X } from 'lucide-react';
import { Button } from './ui/Button';
import type { User } from '../types/user';

interface ProfileCardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user, onLike, onPass }) => {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative h-[500px]">
        <img
          src={user.photos[0]}
          alt={user.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
          <h2 className="text-2xl font-bold">
            {user.name}, {user.age}
          </h2>
          <p className="text-sm">
            {user.university} • {user.course}
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="mb-4 text-gray-700">{user.bio}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {user.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600"
            >
              {interest}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <Button
            onClick={onPass}
            variant="secondary"
            className="h-14 w-14 rounded-full p-0"
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            onClick={onLike}
            variant="primary"
            className="h-14 w-14 rounded-full p-0"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};