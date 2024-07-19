'use client';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

const CopyButton = () => {
  return (
    <div
      className="bg-white ml-2 text-black rounded-full w-10 h-10 flex items-center justify-center"
      onClick={() => {
        navigator.clipboard?.writeText(window.location.href).then(() => {
          toast.success('Linked copied');
        });
      }}
    >
      <Copy />
    </div>
  );
};

export default CopyButton;
