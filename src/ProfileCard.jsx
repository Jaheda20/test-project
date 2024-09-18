const ProfileCard = ({ member }) => {
  const cardColor = () => {
    switch (member.rank) {
      case "1":
        return "bg-orange-200"; // Rank 1 = Orange
      case "2":
        return "bg-yellow-200"; // Rank 2 = Yellow
      case "3":
        return "bg-green-200"; // Rank 3 = Green
      case "4":
        return "bg-blue-200"; // Rank 4 = Blue
      case "5":
        return "bg-indigo-200"; // Rank 5 = Indigo
      case "6":
        return "bg-purple-200"; // Rank 6 = Purple
      case "7":
        return "bg-pink-200"; // Rank 7 = Pink
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div
      className={`w-full max-w-xs py-2 px-2 mb-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 will-change-transform ${cardColor()}`}
    >
      <img src={member.image} alt="" className="h-24" />
      <div className="mt-2 w-full">
        <div className="flex items-center justify-start gap-2 ">
          <p>{member.flag}</p>
          <p className="text-blue-800 text-sm">{member.name}</p>
        </div>
        <p className="text-xs mt-1">{member.profession}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
