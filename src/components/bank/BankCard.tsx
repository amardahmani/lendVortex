import React, { useState } from 'react';
import { CreditCardIcon,CpuChipIcon,WifiIcon,TrashIcon,PencilIcon } from '@heroicons/react/24/outline';

interface CreditCardProps {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
}

const BankCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-[300px] h-[190px] relative transform-style-preserve-3d transition-transform duration-500 cursor-pointer ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={handleCardFlip}
    >
      <div
        className="absolute w-full h-full bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-4 front"
        style={{
          backfaceVisibility: 'hidden',
          transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        }}
      >
        <div className="flex justify-between items-center">
          <CreditCardIcon className="w-8 h-8 text-white" />
          <WifiIcon className="w-6 h-6 text-white" />
        </div>
        <div className="mt-4">
          <p className="text-white text-xl font-bold tracking-wider">{cardNumber}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-white text-sm font-bold">{cardHolderName}</p>
          <p className="text-white text-sm font-bold">{expirationDate}</p>
        </div>
      </div>
      <div
        className="absolute w-full h-full bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-4 back"
        style={{
          backfaceVisibility: 'hidden',
          transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        }}
      >
        <div className="flex justify-between items-center">
          <CpuChipIcon className="w-8 h-8 text-white" />
          <div className="flex gap-2">
            <PencilIcon className="w-6 h-6 text-white cursor-pointer" />
            <TrashIcon className="w-6 h-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;