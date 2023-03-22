import React, { useEffect, useState } from 'react';
import { UnmountClosed } from 'react-collapse';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import Button from './Button';
import Toggle from './Toggle';

const Card = ({ cardData, newDataCollecter, setCardData }) => {
  const [selected, setSelected] = useState(null);
  const [addNewData, setAddNewData] = useState({
    id: null,
    Link: '',
    websiteNameENG: '',
    websiteNameAR: '',
    image: '',
  });

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  useEffect(() => {}, [cardData]);
  const linkHandler = (e) => {
    setAddNewData({ ...addNewData, Link: e.target.value });
  };
  const websiteEngHandler = (e) => {
    setAddNewData({ ...addNewData, websiteNameENG: e.target.value });
  };
  const websiteArHandler = (e) => {
    setAddNewData({ ...addNewData, websiteNameAR: e.target.value });
  };
  const imageHandler = (e) => {
    setAddNewData({ ...addNewData, image: e.target.value });
  };
  const submitHandler = (id = 3 * Math.random() * Math.random()) => {
    if (id) {
      setAddNewData({ ...addNewData, id: id });
    }

    newDataCollecter(addNewData);
  };

  return (
    <>
      {cardData.map((item, i) => {
        return (
          <div
            key={item.id}
            className="h-auto border-solid border-2 border-white-500 rounded"
          >
            <div className=" flex items-center justify-center p-4">
              <div className="flex justify-start w-1/2 ">
                <div>
                  <MdOutlineDragIndicator size={25} />
                </div>
                <div className="px-2 flex items-center justify-center h-full">
                  {/* <Toggle /> */}
                </div>{' '}
                <div className=" px-2 text-base font-semibold flex items-center justify-center h-full">
                  {item.websiteNameENG}
                </div>
              </div>
              <div
                onClick={() => toggle(i)}
                className="flex justify-end items-end w-1/2 cursor-pointer "
              >
                {selected === i ? <RiArrowUpSLine /> : <RiArrowDownSLine />}{' '}
              </div>
            </div>
            <UnmountClosed id="colabs" isOpened={selected === i ? true : false}>
              <form className="p-4 w-full flex flex-col items-center justify-center ">
                <div className="flex flex-col justify-center w-full  ">
                  <label className="py-1">Link</label>
                  <input
                    className="w-full h-9 border-solid border-2 border-white-600 p-2"
                    type="text"
                    defaultValue={item.Link}
                    onChange={(e) => linkHandler(e)}
                  />
                </div>
                <div className="w-full flex flex-row justify-between mt-2">
                  <div className="flex flex-col justify-center w-[48%] ">
                    <label className="py-1">Website Name (English)</label>
                    <input
                      defaultValue={item.websiteNameENG}
                      onChange={(e) => websiteEngHandler(e)}
                      // value={data.websiteNameENG}
                      placeholder="e.g. name"
                      className="w-full h-9 border-solid border-2 border-white-600 p-2"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-[48%]  ">
                    <label className="py-1">Website Name (Arabic)</label>
                    <input
                      onChange={(e) => websiteArHandler(e)}
                      placeholder="e.g. name"
                      defaultValue={item.websiteNameAR}
                      className="w-full h-9 border-solid border-2 border-white-600 p-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full  ">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Image
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex w-full rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                        Choose file{' '}
                      </span>
                      <input
                        onChange={(e) => imageHandler(e)}
                        type="file"
                        className="block w-full min-w-0 flex-1 border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-end justify-end w-full pt-10">
                  <button
                    onClick={() => submitHandler(item.id)}
                    className="bg-green-500 h-10 w-60 text-white "
                    type="button"
                  >
                    Save
                  </button>{' '}
                </div>
              </form>{' '}
            </UnmountClosed>
          </div>
        );
      })}
    </>
  );
};

export default Card;
