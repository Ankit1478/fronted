import React from 'react';

import { cn, arrayToString } from '@/lib/utils';

const capitalize = (str) => str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(' ');

export const UserMessage = ({
  isSequel,
  inputName,
  inputAdven,
}) => {
  const characters = arrayToString(inputName.split("⁂").map((n) => capitalize(n)));
  const adventure = inputAdven.toLowerCase();

  return (
    <div className='mt-4'>
      <div className="text-xl">
        {isSequel ? `Write a sequel about ${adventure}.${inputName ? ` Also, introduce ${characters}.` : ``}` :
          `Write a children’s story about ${characters} on an adventure ${adventure}.`
        }
      </div>
    </div>
  )
}