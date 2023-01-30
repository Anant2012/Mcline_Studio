import React from "react";

function ViewProject() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            View Projects
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div class="lg:w-7/8 w-full mx-auto">
          <div class="flex flex-wrap ">
            <div class="w-full flex-col sm:flex-row p-2 mb-4 flex item-center flex text-white justify-end bg-indigo-500 rounded ">
              <div class="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">Filter:</div>
              <div class="flex flex-row justify-center item-center relative">
                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                   Start_Date
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="flex flex-row justify-center item-center relative">
                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                   End_Date
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  class="w-full focus:bg-opacity-5 bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-7/8 w-full mx-auto overflow-auto">
          <table class="overflow-x-auto table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="px-4 w-1/11 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Date
                </th>
                <th class="px-4 w-1/11 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Code
                </th>
                <th class="px-4 w-1/11 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Company
                </th>
                <th class="px-4 py-3 w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Person
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Project Status
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Description
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Invoice Amount
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Invoice Status
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Payment Status
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Invoice Number
                </th>
                <th class="w-1/11 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  Invoice Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $24
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $24
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $50
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $50
                </td>
                <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
              </tr>
              <tr>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  Exclusive
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  48 Mb/s
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  120 GB
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  Exclusive
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  48 Mb/s
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                  120 GB
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  $72
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="lg:w-7/8 w-full mx-auto">
          <div class="flex flex-wrap ">
            <div class="w-full p-2 mt-4 flex item-center flex text-white justify-center bg-indigo-500 rounded ">
              <div class="flex min-w-full sm:min-w-0 flex-row justify-center item-center relative">
                <label for="name" class="w-[350px] my-auto px-0 sm:px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                   Total Payment in a Month
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:bg-opacity-5 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProject;
