import Layout from '../components/Layout';
import React, { useState } from 'react';

const Layouti = () => {
  const [formData, setFormData] = useState({
    image: '',
    websiteName_ENG: 'Layouti',
    websiteName_AR: '',
    slogen_ENG: 'Greate idea',
    slogen_AR: '',
    describtion1_ENG:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt perferendis porro tempora vel eos eum, rem officia consectetur accusamus facere error at placeat facilis dolores illo asperiores necessitatibus ullam nostrum!',
    describtion1_AR: '',
    copyWrite_ENG: '2023-2012 Copyright ................',
    copyWrite_AR: '',
    createdby_ENG: 'Created by ................',
    createdby_AR: '',
    title_ENG: 'Hire us',
    title_AR: '',
    describtion2_ENG:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt perferendis porro tempora vel eos eum, rem officia consectetur accusamus facere error at placeat facilis dolores illo asperiores necessitatibus ullam nostrum!',

    describtion2_AR: '',
  });

  return (
    <Layout>
      <div className=" min-h-screen bg-white rounded">
        <form className="p-4 w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-center w-full border-b-2 pb-11 border-white-500 ">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Image
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                  Choose file{' '}
                </span>
                <input
                  // onChange={(e) => imageHandler(e)}
                  type="file"
                  className="block w-full min-w-0 flex-1 border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <hr className="text-gray-900" />
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Website Name (English)</label>
              <input
                defaultValue={formData.websiteName_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Website Name (Arabic)</label>
              <input
                // onChange={(e) => websiteArHandler(e)}
                // defaultValue={data.websiteNameAR}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Slogen (English)</label>
              <input
                defaultValue={formData.slogen_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Slogen (Arabic)</label>
              <input
                // onChange={(e) => websiteArHandler(e)}
                // defaultValue={data.websiteNameAR}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Description (English)</label>
              <textarea
                defaultValue={formData.describtion1_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                className="w-full h-36 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Description (Arabic)</label>
              <textarea
                // onChange={(e) => websiteArHandler(e)}
                defaultValue={formData.describtion1_AR}
                className="w-full h-36 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Copywriter (English)</label>
              <input
                defaultValue={formData.copyWrite_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                // value={data.websiteNameENG}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Copywriter (Arabic)</label>
              <input
                // onChange={(e) => websiteArHandler(e)}
                defaultValue={formData.copyWrite_AR}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2 border-b-2 pb-5 border-white-500 ">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Created by (English)</label>
              <input
                defaultValue={formData.createdby_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                // value={data.websiteNameENG}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Created by (Arabic)</label>
              <input
                // onChange={(e) => websiteArHandler(e)}
                defaultValue={formData.createdby_AR}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Title (English)</label>
              <input
                defaultValue={formData.title_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                // value={data.websiteNameENG}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Title (Arabic)</label>
              <input
                // onChange={(e) => websiteArHandler(e)}
                defaultValue={formData.title_AR}
                className="w-full h-9 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-2">
            <div className="flex flex-col justify-center w-[48%] ">
              <label className="py-1">Description (English)</label>
              <textarea
                defaultValue={formData.describtion2_ENG}
                // onChange={(e) => websiteEngHandler(e)}
                // value={data.websiteNameENG}
                className="w-full h-36 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center w-[48%]  ">
              <label className="py-1">Description (Arabic)</label>
              <textarea
                // onChange={(e) => websiteArHandler(e)}
                defaultValue={formData.describtion2_AR}
                className="w-full h-36 border-solid border-2 border-white-600 p-2"
                type="text"
              />
            </div>
          </div>
          <div className=" flex items-end justify-end w-full pt-10">
            <button
              // onClick={() => submitHandler(data.id)}
              className="bg-green-500 h-10 w-60 text-white "
              type="button"
            >
              Save
            </button>{' '}
          </div>
        </form>{' '}
      </div>
    </Layout>
  );
};

export default Layouti;
