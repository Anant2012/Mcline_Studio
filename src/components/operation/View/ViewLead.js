import React from "react";

function ViewProject() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            View Lead
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
                   Date_to
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
                   Date_from
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
                <th class="px-4 w-1/6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Date
                </th>
                <th class="px-4 w-1/6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Company
                </th>
                <th class="px-4 py-3 w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Person
                </th>
                <th class="px-4 py-3 w-1/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Lead Status
                </th>
                <th class="px-4 py-3 w-2/6 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Description
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">
                    <select name="cars" id="cars" class="w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                    </select>
                </td>
                <td class="px-4 py-3">Start is the start It should not end. You are good to go.</td>
                
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">
                    <select name="cars" id="cars" class="w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                    </select>
                </td>
                <td class="px-4 py-3">Start is the start It should not end. You are good to go.</td>
                
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">
                    <select name="cars" id="cars" class="w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                    </select>
                </td>
                <td class="px-4 py-3">Start is the start It should not end. You are good to go.</td>
                
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">
                    <select name="cars" id="cars" class="w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                    </select>
                </td>
                <td class="px-4 py-3">Start is the start It should not end. You are good to go.</td>
                
              </tr>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">
                    <select name="cars" id="cars" class="w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                    </select>
                </td>
                <td class="px-4 py-3">Start is the start It should not end. You are good to go.</td>
                
              </tr>
              
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
}

export default ViewProject;
