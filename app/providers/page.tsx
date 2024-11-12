import { Button } from "../component/ui/button";

export default function Providers() {
    return (
        <div className="">
            <div className="bg-[#12141D] text-white py-12 px-4 mb-8 border-yellow-500 ">
                <div className="text-center mb-10 pt-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-10">Find The Best Providers Near You</h1>
                    <p className="text-gray-300 text-sm md:text-base">Explore Trusted Professionals Ready To Meet Your
                        Needs. Use Filters To Find The Right Fit—Fast And Easy!</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <input type="text" placeholder="Search Service Or Keyword"
                           className="bg-gray-800 text-white py-3 px-4 rounded-md w-full md:w-1/3 placeholder-gray-400 focus:outline-none"/>
                    <input type="text" placeholder="Zip Code"
                           className="bg-gray-800 text-white py-3 px-4 rounded-md w-full md:w-1/6 placeholder-gray-400 focus:outline-none"/>
                    <select className="bg-gray-800 text-white py-3 px-4 rounded-md w-full md:w-1/6 focus:outline-none">
                        <option>Select By Service</option>
                    </select>
                    <Button
                        className="bg-[#6D32CF] py-3 px-6 rounded-[4rem] font-semibold text-white hover:bg-[#6e32cf]">Search
                        Service
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <label className="flex items-center space-x-2 text-gray-300 text-sm">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-600"/>
                        <span>Show Only 24/7 Providers</span>
                    </label>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4 flex items-center justify-between text-gray-400">
                <span>Total Services: <strong className="text-white">193 Found</strong></span>
                <select className="bg-gray-800 text-white py-2 px-3 rounded-md focus:outline-none">
                    <option>Sort By: Top-Rated</option>
                </select>
            </div>

            <div
                className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>

                <div className="bg-gray-100 text-black rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold mb-1">Kingsley Osei</h3>
                    <p className="text-sm text-gray-500">Springs Plumbing Inc.</p>
                    <div className="flex items-center justify-center text-yellow-500 text-sm my-2">
                        <span>★★★★★</span>
                        <span className="ml-2 text-gray-500">(142 Reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-block text-yellow-500">📍</span> California, CA
                    </p>
                    <p className="text-sm text-gray-700 mb-4">Experienced Plumber Specializing in Fast Repairs and
                        Installations</p>
                    <p className="text-purple-600 text-sm mb-4">24/7 Emergency Available</p>
                    <button
                        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700">Contact
                        Now
                    </button>
                </div>
                

            </div>
        </div>
    );
}