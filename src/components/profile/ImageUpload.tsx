import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '../ui/Button';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  currentImage?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onFileSelect,
  currentImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      <div
        className="relative h-40 w-40 cursor-pointer overflow-hidden rounded-full"
        onClick={handleClick}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <Upload className="h-8 w-8 text-gray-400" />
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <Button
        type="button"
        variant="outline"
        onClick={handleClick}
        className="w-full"
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload Photo
      </Button>
    </div>
  );
};