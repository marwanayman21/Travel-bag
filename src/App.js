import CreateItem from './createItem.jsx';
import NavBar from './navBar';
import './App.css';
import Content from './content.jsx';
import { useState } from 'react';
import Swal from 'sweetalert2';
function App() {
  const [items, setItems] = useState([]);
  const [isAscending, setIsAscending] = useState("ascending");

  function handleSaveClick(item) {
    const newItems = [...items, item];
    setItems(newItems);
  }

  const sortItems = () => {
    const indexedItems = items.map((item, index) => ({ item, index }));

    const sortedItems = indexedItems.sort((a, b) => {
      if (isAscending === "ascending") {
        setIsAscending("descending"); 
        return a.index - b.index;
      } else {
        setIsAscending("ascending"); 
        return b.index - a.index; 
      }
    }).map(({ item }) => item); 
    setItems(sortedItems); 
    
  };

  function clearAll() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        setItems([]);
      }
    });
   
  }

  return (
    <>
      <div className="text-center h-screen">
        <NavBar />
        <CreateItem handleSaveClick={handleSaveClick} />
        <div className="flex-grow flex items-center justify-center sticky top-[100vh]">
          <div className="w-full h-10 bg-purple-500 flex items-center justify-center">
            <h1 className="text-center italic text-purple-900">add items to your packing list</h1>
            <img width="25" height="25" src="https://img.icons8.com/plasticine/100/rocket.png" alt="rocket" />
          </div>
        </div>
        <Content items={items} />
        <div className='flex justify-center items-center gap-3 sticky top-[90vh]'>
          
          <button
            className='bg-purple-300 hover:bg-purple-900 font-bold py-2 px-4 rounded-full'
            onClick={sortItems}
          >
            
            {isAscending === "ascending" ? 'Sort Ascending ' : 'Sort Descending'}
          </button>
          <button
            className='bg-purple-300 hover:bg-purple-900 font-bold py-2 px-4 rounded-full'
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
