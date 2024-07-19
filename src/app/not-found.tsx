import { CircleAlert } from 'lucide-react';

function NotFound() {
  return (
    <div className="w-full  flex items-center justify-center font-semibold flex-col  text-xl text-white">
      <div className="flex items-center">
        <CircleAlert className="mr-2" /> No records found
      </div>
    </div>
  );
}

export default NotFound;
