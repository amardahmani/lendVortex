import React, { useState } from 'react';
import { CreditCardIcon, CpuChipIcon, WifiIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

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

  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <div
      className="relative w-full max-w-sm h-56 cursor-pointer"
      onClick={handleCardFlip}
      aria-label="Credit Card"
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-all duration-500`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div 
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-xl shadow-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <CreditCardIcon className="w-10 h-10 text-white" />
              <WifiIcon className="w-8 h-8 text-white transform rotate-90" />
            </div>
            <div className="mt-4">
              <p className="text-white text-2xl font-bold tracking-wider font-mono">
                {formatCardNumber(cardNumber)}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="text-green-100 text-xs mb-1">Card Holder</p>
                <p className="text-white text-lg font-semibold tracking-wide">{cardHolderName}</p>
              </div>
              <div className="text-right">
                <p className="text-green-100 text-xs mb-1">Expires</p>
                <p className="text-white text-lg font-semibold tracking-wide">{expirationDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-600 via-green-500 to-green-400 rounded-xl shadow-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <CpuChipIcon className="w-10 h-10 text-white" />
              <div className="flex gap-3">
                <PencilIcon className="w-6 h-6 text-white cursor-pointer hover:text-green-200 transition-colors duration-200" aria-label="Edit Card" />
                <TrashIcon className="w-6 h-6 text-white cursor-pointer hover:text-green-200 transition-colors duration-200" aria-label="Delete Card" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-8 bg-black/30 rounded"></div>
            </div>
            <div className="mt-4 flex justify-end items-center">
              <div className="bg-white/80 px-3 py-2 rounded">
                <p className="text-green-800 text-lg font-bold tracking-wider">{cvv}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;