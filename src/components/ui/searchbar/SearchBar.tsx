import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [input, setInput] = useState<string>(searchParams.get("search") || "");

  useEffect(() => {
    setInput(searchParams.get("search") || "");
  }, [searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (input) {
      params.set("search", input);
    } else {
      params.delete("search");
    }
    navigate(`?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-4/6 md:max-w-xl md:w-full md:mx-auto"
    >
      <div className="relative rounded-lg">
        <input
          type="search"
          value={input}
          onChange={handleChange}
          className="block w-full p-4 ps-10 rounded-[0.4rem] text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="text-white rounded-[0.4rem] absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
