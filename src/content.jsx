import { useState } from 'react';
import './index.css'; // Import the CSS file with your scrollbar styles

export default function Content({ items }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex justify-center p-4">
      <div className="bg-purple-300 p-6 rounded-lg shadow-lg max-h-[400px] overflow-y-auto w-full scrollbar-custom">
        {items.length > 0 ? (
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-2 ${checkedItems[index] ? 'line-through' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2"
                />
                <h1 className="text-lg font-medium">
                  <span className="font-semibold">{item.number}.</span> {item.content}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center text-lg font-medium h-full'>
            No thing here!
          </div>
        )}
      </div>
      
    </div>
    
  );
}
