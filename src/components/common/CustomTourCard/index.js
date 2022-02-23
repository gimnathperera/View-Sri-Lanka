import { Link } from 'react-router-dom';

const CustomTourCard = ({ image, special }) => {
  return (
    <div class='relative flex flex-col items-center justify-between col-span-4 space-y-4 overflow-hidden sm:rounded-xl rounded-xl'>
      <Link
        to={`/tours/custom`}
        class='relative block overflow-hidden bg-center bg-no-repeat bg-cover w-full  rounded-xl hover:scale-110 transition duration-300 ease-in-out'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {special ? (
          <div class='relative p-8 pb-3 pt-40 text-white bg-black bg-opacity-40 hover:bg-opacity-20'>
            <h5 class='text-2xl font-bold'>Customize a Trip?</h5>

            <p class='text-sm'>
              Personalized tour preferences we will give priority with ease to
              ensure your satisfaction.
            </p>
          </div>
        ) : (
          <div class='relative p-8 pb-6 pt-40 text-white bg-black bg-opacity-40 hover:bg-opacity-20'>
            <h5 class='text-2xl font-bold'>Customize a Trip?</h5>
            <p class='text-sm'>
              Let us know your personalized tour preferences we will give
              priority with ease to ensure your satisfaction throughout the
              journey.
            </p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CustomTourCard;
