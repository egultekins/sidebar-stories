import React from 'react';

export interface CardProps {
  /** Title of the card */
  title: string;
  /** Description or content of the card */
  description: string;
  /** URL of the image to display */
  imageUrl?: string;
  /** Callback function when the card is clicked */
  onClick?: () => void;
  /** Custom styles for the card */
  className?: string;
}

/**
 * A reusable Card component for displaying content with an optional image.
 */
export const Card = ({
  title,
  description,
  imageUrl,
  onClick,
  className = '',
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )};