import { useState } from 'react';
import { Formik } from 'formik';

import { customTourSchema } from 'src/common';
import { speicalpackages } from 'src/data/speicalpackages';
import { countries, childrenPackages, adultPackages } from 'src/data/common';
import flowImg from 'src/assets/img/about/flow7.jpeg';
const initialFormValues = {
  fullName: '',
  country: '',
  dateOfArrival: '',
  dateOfDiparture: '',
  noOfAdults: '',
  noOfChildren: '',
  contactNumber: '',
  email: '',
  tourDuration: '',
  preferredTourPackage: '',
  notes: '',
};

const ContactForm = () => {
  const [type, setType] = useState('text');
  const [type_, setType_] = useState('text');

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <section class='bg-white py-20 lg:py-[120px] overflow-hidden relative z-10 justify-center flex'>
      <div class='container'>
        <div class='flex flex-wrap lg:justify-between -mx-4'>
          <div class='w-full lg:w-1/2 xl:w-6/12 px-4'>
            <div class='max-w-[570px] mb-12 lg:mb-0'>
              <span class='block mb-4 text-base text-primary font-semibold'>
                Customize a trip
              </span>
              <h2
                class='
                  text-dark
                  mb-6
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  '
              >
                Make a your own tour plan
              </h2>
              <p class='text-base text-body-color leading-relaxed mb-9 text-justify	'>
                If you preferred to make hotel reservations with yourself, you
                can do it according to your own preference and you can make
                payments directly to the hotels. Then we can arrange a
                professional tour guide and comfortable vehicle. When you do
                special activities, you have to pay for the entrance fees or
                charges youself.
              </p>
              <div class='flex justify-center flex-row'>
                <img class='mask mask-heart' src={flowImg} />
              </div>
            </div>
          </div>
          <Formik
            initialValues={initialFormValues}
            validationSchema={customTourSchema}
            onSubmit={(values) => {
              handleOnSubmit(values);
            }}
          >
            {({ errors, handleSubmit, handleChange, touched, values }) => {
              return (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  class='w-full lg:w-1/2 xl:w-5/12 px-4'
                >
                  <div class='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
                    <div class='mb-6'>
                      <input
                        type='text'
                        placeholder='Your Full Name'
                        class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${touched.fullName && errors.fullName && 'input-error'}
                        `}
                        name='fullName'
                        onChange={handleChange}
                      />
                      {touched.fullName && errors.fullName && (
                        <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div class='mb-6'>
                      <select
                        type='select'
                        placeholder='Your Country'
                        class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${touched.country && errors.country && 'input-error'}
                        `}
                        name='country'
                        onChange={handleChange}
                      >
                        <option value=''>Your Country</option>
                        {countries.map((_country, index) => (
                          <option value={_country} key={index}>
                            {_country}
                          </option>
                        ))}
                      </select>
                      {touched.country && errors.country && (
                        <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                          {errors.country}
                        </span>
                      )}
                    </div>

                    <div class='flex flex-row justify-between gap-x-4'>
                      <div class='mb-6 w-full'>
                        <input
                          type={type}
                          placeholder='Date Of Arival'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${touched.fullName && errors.fullName && 'input-error'}
                        `}
                          name='dateOfArrival'
                          onFocus={() => setType('date')}
                          onBlur={() => setType('text')}
                          onChange={handleChange}
                        />
                        {touched.dateOfArrival && errors.dateOfArrival && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.dateOfArrival}
                          </span>
                        )}
                      </div>
                      <div class='mb-6 w-full'>
                        <input
                          type={type_}
                          placeholder='Date Of Departure'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.dateOfDiparture &&
                          errors.dateOfDiparture &&
                          'input-error'
                        }
                        `}
                          name='dateOfDiparture'
                          onFocus={() => setType_('date')}
                          onBlur={() => setType_('text')}
                          onChange={handleChange}
                        />
                        {touched.dateOfDiparture && errors.dateOfDiparture && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.dateOfDiparture}
                          </span>
                        )}
                      </div>
                    </div>
                    <div class='flex flex-row justify-between gap-x-4'>
                      <div class='mb-6 w-full'>
                        <select
                          type='text'
                          placeholder='How Many Adults'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.noOfAdults &&
                          errors.noOfAdults &&
                          'input-error'
                        }
                        `}
                          name='noOfAdults'
                          onChange={handleChange}
                        >
                          <option value=''>How Many Adults</option>

                          {adultPackages?.map((_package, index) => (
                            <option value={_package} key={index}>
                              {_package}
                            </option>
                          ))}
                        </select>
                        {touched.noOfAdults && errors.noOfAdults && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.noOfAdults}
                          </span>
                        )}
                      </div>
                      <div class='mb-6 w-full'>
                        <select
                          type='text'
                          placeholder='How Many Children'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.noOfChildren &&
                          errors.noOfChildren &&
                          'input-error'
                        }
                        `}
                          name='noOfChildren'
                          onChange={handleChange}
                        >
                          <option value=''>How Many Children</option>

                          {childrenPackages?.map((_package, index) => (
                            <option value={_package} key={index}>
                              {_package}
                            </option>
                          ))}
                        </select>
                        {touched.noOfChildren && errors.noOfChildren && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.noOfChildren}
                          </span>
                        )}
                      </div>
                    </div>
                    <div class='flex flex-row justify-between gap-x-4'>
                      <div class='mb-6  w-full'>
                        <input
                          type='text'
                          placeholder='Your Contact Number'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.contactNumber &&
                          errors.contactNumber &&
                          'input-error'
                        }
                        `}
                          name='contactNumber'
                          onChange={handleChange}
                        />
                        {touched.contactNumber && errors.contactNumber && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.contactNumber}
                          </span>
                        )}
                      </div>
                      <div class='mb-6  w-full'>
                        <input
                          type='email'
                          placeholder='Your Email'
                          class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${touched.email && errors.email && 'input-error'}
                        `}
                          name='email'
                          onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div class='mb-6'>
                      <select
                        class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.tourDuration &&
                          errors.tourDuration &&
                          'input-error'
                        }
                        `}
                        name='tourDuration'
                        onChange={handleChange}
                      >
                        <option value=''>Tour Duration</option>
                      </select>
                      {touched.tourDuration && errors.tourDuration && (
                        <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                          {errors.tourDuration}
                        </span>
                      )}
                    </div>
                    <div class='mb-6'>
                      <select
                        class={`w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${
                          touched.preferredTourPackage &&
                          errors.preferredTourPackage &&
                          'input-error'
                        }
                        `}
                        name='preferredTourPackage'
                        onChange={handleChange}
                      >
                        <option value=''>Prefered Tour Package</option>
                        {speicalpackages.map((_package) => (
                          <option value={_package.title} key={_package.id}>
                            {_package.title}
                          </option>
                        ))}
                      </select>
                      {touched.preferredTourPackage &&
                        errors.preferredTourPackage && (
                          <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                            {errors.preferredTourPackage}
                          </span>
                        )}
                    </div>

                    <div class='mb-6'>
                      <textarea
                        rows='6'
                        placeholder='Notes : But I want to customize above tour'
                        class={`
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        ${touched.notes && errors.notes && 'input-error'}
                          `}
                        name='notes'
                        onChange={handleChange}
                      ></textarea>
                      {touched.notes && errors.notes && (
                        <span class='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
                          {errors.notes}
                        </span>
                      )}
                    </div>
                    <div>
                      <button
                        type='submit'
                        class='
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        '
                      >
                        Send Message
                      </button>
                    </div>
                    <div>
                      <span class='absolute -top-10 -right-9 z-[-1]'>
                        <svg
                          width='100'
                          height='100'
                          viewBox='0 0 100 100'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                            fill='#3056D3'
                          />
                        </svg>
                      </span>
                      <span class='absolute -right-10 top-[90px] z-[-1]'>
                        <svg
                          width='34'
                          height='134'
                          viewBox='0 0 34 134'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx='31.9993'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 31.9993 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 31.9993 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 31.9993 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 31.9993 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 31.9993 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 31.9993 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 31.9993 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 31.9993 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 31.9993 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 31.9993 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 17.3333 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 17.3333 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 17.3333 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 17.3333 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 17.3333 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 17.3333 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 17.3333 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 17.3333 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 17.3333 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 17.3333 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 2.66536 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 2.66536 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 2.66536 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 2.66536 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 2.66536 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 2.66536 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 2.66536 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 2.66536 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 2.66536 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 2.66536 1.66665)'
                            fill='#13C296'
                          />
                        </svg>
                      </span>
                      <span class='absolute -left-7 -bottom-7 z-[-1]'>
                        <svg
                          width='107'
                          height='134'
                          viewBox='0 0 107 134'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx='104.999'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 104.999 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 104.999 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 104.999 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 104.999 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 104.999 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 104.999 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 104.999 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 104.999 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 104.999 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='104.999'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 104.999 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 90.3333 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 90.3333 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 90.3333 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 90.3333 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 90.3333 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 90.3333 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 90.3333 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 90.3333 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 90.3333 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='90.3333'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 90.3333 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 75.6654 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 31.9993 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 75.6654 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 31.9993 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 75.6654 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 31.9993 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 75.6654 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 31.9993 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 75.6654 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 31.9993 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 75.6654 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 31.9993 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 75.6654 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 31.9993 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 75.6654 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 31.9993 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 75.6654 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 31.9993 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='75.6654'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 75.6654 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='31.9993'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 31.9993 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 60.9993 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 17.3333 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 60.9993 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 17.3333 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 60.9993 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 17.3333 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 60.9993 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 17.3333 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 60.9993 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 17.3333 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 60.9993 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 17.3333 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 60.9993 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 17.3333 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 60.9993 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 17.3333 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 60.9993 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 17.3333 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='60.9993'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 60.9993 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='17.3333'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 17.3333 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 46.3333 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='132'
                            r='1.66667'
                            transform='rotate(180 2.66536 132)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 46.3333 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='117.333'
                            r='1.66667'
                            transform='rotate(180 2.66536 117.333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 46.3333 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='102.667'
                            r='1.66667'
                            transform='rotate(180 2.66536 102.667)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 46.3333 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='88'
                            r='1.66667'
                            transform='rotate(180 2.66536 88)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 46.3333 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='73.3333'
                            r='1.66667'
                            transform='rotate(180 2.66536 73.3333)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 46.3333 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='45'
                            r='1.66667'
                            transform='rotate(180 2.66536 45)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 46.3333 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='16'
                            r='1.66667'
                            transform='rotate(180 2.66536 16)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 46.3333 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='59'
                            r='1.66667'
                            transform='rotate(180 2.66536 59)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 46.3333 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='30.6666'
                            r='1.66667'
                            transform='rotate(180 2.66536 30.6666)'
                            fill='#13C296'
                          />
                          <circle
                            cx='46.3333'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 46.3333 1.66665)'
                            fill='#13C296'
                          />
                          <circle
                            cx='2.66536'
                            cy='1.66665'
                            r='1.66667'
                            transform='rotate(180 2.66536 1.66665)'
                            fill='#13C296'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
