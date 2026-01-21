import Image from "next/image";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition">
      
      {/* Image */}
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={250}
          className="w-full h-[270px] object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mt-4">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
        {item.desc}
      </p>

      {/* Button */}
     <button
  className="
    mt-4 px-5 py-2 rounded-md border flex items-center gap-2
    bg-white text-black border-gray-400
    hover:bg-green-500 hover:text-white hover:border-green-500
    transition-all duration-300 cursor-pointer
  "
>
  Book Now <span>↗</span>
</button>

    </div>
  );
};

export default ServiceCard;
