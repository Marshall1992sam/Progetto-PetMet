import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [adoptionData, setAdoptionData] = useState();

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/adoption/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setAdoptionData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(adoptionData);

  // console.log(empData);

  return (
    <>
      <section className="container px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Adoption Requests
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all adoption requests. You can add new Pet, edit
              or delete existing ones.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Adoptee Name </span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {adoptionData?.map((person) => (
                      <tr key={person.firstName}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div> */}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.firstName}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.lastName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.address}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.phone}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {person.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
