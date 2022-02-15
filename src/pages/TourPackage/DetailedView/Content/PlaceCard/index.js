import { Link } from 'react-router-dom';

const PlaceCard = ({ image }) => {
  return (
    <div class='relative flex flex-col items-center justify-between col-span-4 space-y-4 overflow-hidden sm:rounded-xl rounded-xl mask mask-hexagon'>
      <Link
        to={`#`}
        class='relative block overflow-hidden bg-center bg-no-repeat bg-cover w-full  rounded-xl hover:scale-110 transition duration-300 ease-in-out'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div class='relative p-8 pt-40 text-white bg-black bg-opacity-40 hover:bg-opacity-20'></div>
      </Link>
    </div>
  );
};

export default PlaceCard;
