import Header from "@/components/layout/Header";
import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/interfaces";
import type { PropertyProps } from "@/interfaces";  


const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            Were glad youre here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
            </div>
      </main>
    </div>
  )
}



// Hero section with background image and main headings.
const HeroSection = () => (
  <section
    className="relative bg-cover bg-center h-64 flex flex-col justify-center items-center"
    style={{ backgroundImage: "url('/path/to/your/background.jpg')" }} // Replace with actual image path
  >
    <h1 className="text-4xl font-bold text-white">Find your favorite place here!</h1>
    <p className="text-xl text-white mt-2">
      The best prices for over 2 million properties worldwide.
    </p>
  </section>
);
 
// Property card component for each listing.
const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="border rounded shadow-md p-4 w-full md:w-1/3">
    {/* Property image */}
    <image src={property.image} alt={property.name} className="w-full h-40 object-cover rounded"> </image>
    {/* Property details */}
    <h2 className="font-bold text-lg mt-2">{property.name}</h2>
    <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
    <p className="text-yellow-500">Rating: {property.rating}</p>
    <p className="text-blue-700 font-semibold">${property.price}</p>
    {/* Show discount if available */}
    {property.discount && (
      <span className="bg-red-200 text-red-800 px-2 py-1 rounded">
        {property.discount}% OFF
      </span>
    )}
  </div>
);

// Listing section that maps over property data to display cards.
const ListingSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
    {PROPERTYLISTINGSAMPLE.map((property) => (
      <PropertyCard key={property.name} property={property} />
    ))}
  </div>
);

// Main page component.
const HomePage = () => (
  <>
    <HeroSection />
    <FilterSection />
    <ListingSection />
  </>
);

//export default HomePage;


export default Home; 
//export the hero
export { HeroSection };
export { FilterSection };
