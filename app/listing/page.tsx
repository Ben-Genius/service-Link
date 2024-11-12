export default function Listing() {
    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md my-12 font-[family-name:var(--font-asap)]">
            <h2 className="text-2xl font-bold text-center mb-2">Join Our Network Of Trusted Service Providers!</h2>
            <p className="text-center text-gray-600 mb-8">Register Your Service In Minutes And Connect With Customers Near You.</p>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label form="name" className="block text-gray-700 font-medium mb-1">Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" placeholder="Enter full name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>

                <div>
                    <label form="category" className="block text-gray-700 font-medium mb-1">Service Category <span className="text-red-500">*</span></label>
                    <select id="category" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                        <option>Select service category</option>
                    </select>
                </div>

                <div>
                    <label form="nickname" className="block text-gray-700 font-medium mb-1">Service Nickname <span className="text-red-500">*</span></label>
                    <input type="text" id="nickname" placeholder="Enter your service nickname e.g. Kweku's Plumbing Works" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>

                <div>
                    <label form="description" className="block text-gray-700 font-medium mb-1">Description of Services <span className="text-red-500">*</span></label>
                    <textarea id="description" placeholder="A short summary of the services offered" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label form="city" className="block text-gray-700 font-medium mb-1">City <span className="text-red-500">*</span></label>
                        <input type="text" id="city" placeholder="Enter city" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                    </div>
                    <div>
                        <label form="zip" className="block text-gray-700 font-medium mb-1">Zip Code <span className="text-red-500">*</span></label>
                        <input type="text" id="zip" placeholder="Enter zip code" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                    </div>
                </div>

                <div>
                    <label form="email" className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" placeholder="Enter email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>

                <div>
                    <label form="phone" className="block text-gray-700 font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" placeholder="Enter phone number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>

                <div>
                    <label form="whatsapp" className="block text-gray-700 font-medium mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="whatsapp" placeholder="Enter WhatsApp number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>

                <div className="flex items-center">
                    <input type="checkbox" id="emergency_services" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"/>
                        <label form="emergency_services" className="ml-2 text-sm text-gray-700">I provide 24/7 emergency services</label>
                </div>

                <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700">List My Service</button>
            </form>
        </div>

    );
}