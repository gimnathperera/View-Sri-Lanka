import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import Hero from 'src/components/common/Hero';
import Content from 'src/pages/Destination/DetailedView/Content';
import { places } from 'src/data/destinations';

const DetailedView = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPlaceById();
  }, []);

  const getPlaceById = () => {
    setPlace(_.find(places, { id: Number(id) }));
  };

  const heroList = [
    {
      header: place?.city,
      subHeader: place?.country,
      description:
        'Sri Lanka’s bustling commercial capital Colombo is the country’s busy business hub.',
      image: place?.heroImage,
    },
  ];

  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${place?.backgroundImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content data={place} />
    </div>
  );
};

export default DetailedView;
