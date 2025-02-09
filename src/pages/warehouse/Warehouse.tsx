import { FadeText } from "@/components/ui/fade-text";
import SearchBar from "@/components/ui/searchbar/SearchBar";
import Card from "@/components/warehosuse/Card";
import { useEffect, useState } from "react";
type WarehouseData = {
  name: string;
  id:number
  description: string;
  created_at: string;
  email: string;
  phone: string;
  zip: string;
  picture_url_list: { image_url: string }[] | null;
  category: string | null;
};

const Warehouse = () => {
  const [data, setData] = useState<WarehouseData[]>([]);
  const [loading, setLoading] = useState(false);
  const handleGetWarehouse = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:7777/v1/warehouse?search`);
      const result = await response.json();
      if (result && result.data) {
        setData(result.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetWarehouse();
  }, []);

  return (
    <div>
      <section className="w-full bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="flex items-center justify-end w-full mb-4 border-b-2">
        <div className="flex items-center justify-end w-full mb-4 ">
        <SearchBar />
        <FadeText text="Stock List" direction="up" className="hidden md:text-2xl mt-2 font-bold md:ml-10"></FadeText>
        </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div className="flex items-center space-x-4">
              <button
                data-modal-toggle="filterModal"
                data-modal-target="filterModal"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Filters
              </button>
              <button
                id="sortDropdownButton1"
                data-dropdown-toggle="dropdownSort1"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Sort
              </button>
            </div>
          </div>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <Card key={index} warehouse={item} />
                ))
              ) : (
                <p className="text-cen  ter text-gray-500">No warehouse data found.</p>
              )}
            </div>
          )}
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warehouse;
