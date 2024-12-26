import React, { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState(["abc", "cde", "efg"]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setSearchTerm("");
    setFilteredSuggestions([]);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!selectedItem ? (
        <div className="w-1/2 bg-white p-4 rounded shadow-lg relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filteredSuggestions.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-lg mt-1 z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">{selectedItem}</h2>
            <button
              className="text-red-500 text-xl"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <p>Details about {selectedItem}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;