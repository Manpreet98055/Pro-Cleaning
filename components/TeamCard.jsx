import Image from "next/image";

const TeamCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden  hover:shadow-xl transition duration-300 ">
      
     
      <div className="relative">
        <div className="h-[350px] rounded-3xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-">
        <h3 className="text-2xl font-bold text-gray-900">
          {item.name}
        </h3>

        {/* rating */}
        <div className="flex text-2xl my-2 text-orange-400">
          {"★".repeat(item.rating)}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>

        {/* SOCIAL */}
        <div className="flex gap-5 mt-4 text-gray-700">
          <span className="cursor-pointer font-semibold hover:text-[#36B864]">f</span>
          <span className="cursor-pointer font-semibold hover:text-[#36B864]">X</span>
          <span className="cursor-pointer hover:text-[#36B864]">📷</span>
          <span className="cursor-pointer font-semibold hover:text-[#36B864]">in</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
