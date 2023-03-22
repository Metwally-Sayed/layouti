import { Inter } from 'next/font/google';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { useState } from 'react';
import Button from '../components/Button';

const Ourproduct = () => {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      Link: 'example.com',
      websiteNameENG: '365 UI Design',
      websiteNameAR: '',
      image: 'imageexample.com/',
    },
    {
      id: 2,
      Link: 'example.com',
      websiteNameENG: 'testingname',
      websiteNameAR: 'testingname',
      image: 'imageexample.com/',
    },
    {
      id: 3,
      Link: 'example.com',
      websiteNameENG: 'testingname',
      websiteNameAR: 'testingname',
      image: 'imageexample.com/',
    },
  ]);

  const addHandler = () => {
    setCardData((prev) => {
      return [
        ...prev,
        {
          id: 3 * Math.random() * Date.now(),
          Link: '',
          websiteNameENG: '',
          websiteNameAR: '',
          image: '',
        },
      ];
    });
  };

  const newDataCollecter = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className="bg-white rounded w-full p-6">
        <Card
          cardData={cardData}
          newDataCollecter={newDataCollecter}
          setCardData={setCardData}
        />
      </div>
      <div className=" flex items-end justify-end w-full pt-10">
        <Button text={'Add'} addHandler={addHandler}></Button>
      </div>
    </Layout>
  );
};

export default Ourproduct;
