import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import Hero from 'src/components/common/Hero';
import Content from 'src/pages/TourPackage/DetailedView/Content';
import { tourPackages } from 'src/data/tourpackages';

const DetailedView = () => {
  const [tour, setTour] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTourById();
  }, []);

  const getTourById = () => {
    setTour(_.find(tourPackages, { id: Number(id) }));
  };

  const heroList = [
    {
      header: tour?.heroText,
      description: tour?.title,
      image: tour?.heroImage,
    },
  ];

  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${tour?.backgroundImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content data={tour} />
    </div>
  );
};

export default DetailedView;
