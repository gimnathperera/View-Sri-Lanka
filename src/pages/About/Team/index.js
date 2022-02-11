import sampath from 'src/assets/img/team/Sampath.jpg';
import bandu from 'src/assets/img/team/Bandu.jpg';
import prageeth from 'src/assets/img/team/Prageeth.jpg';
import rasika from 'src/assets/img/team/Rasika.jpg';
import danushka from 'src/assets/img/team/Danushka.jpg';
import chaminda from 'src/assets/img/team/Chaminda.jpg';
const Team = () => {
  return (
    <section class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
      <div class='text-center pb-12'>
        <h2 class='text-base font-bold text-white'>
          We have the best equipment
        </h2>
        <h1 class='font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
          Check our awesome team members
        </h1>
      </div>
      <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center  backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={sampath}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>
              Sampath Sooriyaarachchi
            </p>
            <p class='text-base text-gray-400 font-normal'>Managing Director</p>
          </div>
        </div>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={bandu}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>Bandu Singhasana</p>
            <p class='text-base text-gray-400 font-normal'>
              Senior Executive Tour Operator
            </p>
          </div>
        </div>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={prageeth}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>
              Prageeth Harischandra
            </p>
            <p class='text-base text-gray-400 font-normal'>
              Senior Executive Tour Operator
            </p>
          </div>
        </div>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={rasika}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>
              Rasika Rathnasekara
            </p>
            <p class='text-base text-gray-400 font-normal'>Marketing Manager</p>
          </div>
        </div>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={danushka}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>
              Danushka Kandearachchi
            </p>
            <p class='text-base text-gray-400 font-normal'>Acount Executive</p>
          </div>
        </div>
        <div class='w-full rounded-lg p-12 flex flex-col justify-center items-center backdrop-blur-2xl hover:shadow-[#f5d0fe] shadow-md hover:shadow-lg'>
          <div class='mb-8'>
            <img
              class='object-center object-cover rounded-full h-36 w-36'
              src={chaminda}
              alt='photo'
            />
          </div>
          <div class='text-center'>
            <p class='text-xl text-gray-700 font-bold mb-2'>
              Chaminda Priyadarshana
            </p>
            <p class='text-base text-gray-400 font-normal'>
              Senior Tour Operator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
