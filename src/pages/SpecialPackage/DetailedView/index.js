import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import Hero from 'src/components/common/Hero';
import Content from 'src/pages/SpecialPackage/DetailedView/Content';
import { speicalpackages } from 'src/data/speicalpackages';

const DetailedView = () => {
  const [pack, setPack] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTourById();
  }, []);

  const getTourById = () => {
    setPack(_.find(speicalpackages, { id: Number(id) }));
  };

  const heroList = [
    {
      header: pack?.title,
      image: pack?.heroImage,
    },
  ];

  return (
    <div
      class={`bg-no-repeat bg-cover bg-fixed`}
      style={{
        backgroundImage: `url(${pack?.backgroundImage})`,
      }}
    >
      <Hero heroList={heroList} />
      <Content data={pack} />
    </div>
  );
};

export default DetailedView;
