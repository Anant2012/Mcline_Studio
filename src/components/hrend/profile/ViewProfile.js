import React from "react";

const ViewProfile = (props) => {
  return (
    <div className={`${(props.viewViewProfile)?"block":"hidden"}`}>
    <div class="overflow-hidden bg-white w-3/4 mx-auto mt-12 shadow-md sm:rounded-lg border border-gray-300">
      <div class="px-4 py-5 sm:px-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 class="text-lg sm:text-xl font-medium leading-6 text-gray-900">
              Margot Foster
            </h3>
            <p class="mt-1 max-w-2xl text-sm sm:text-md text-gray-500">Personal details</p>
          </div>

          <img
            className="h-16 w-16 sm:h-24 sm:w-24 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="border-t border-gray-300">
        <dl>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              EC101
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Designation</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Engineer
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Grade</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">A+</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Reporting Manager</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              John Doe
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Emergency Contact Number
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              +91 9887-78283
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Blood Group</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">O+</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Personal Contact Number
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              +91 7383-93289
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Personal Email ID</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Margot@gmail.com
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Official Email ID</dt>
            <dd class="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
              margot@mcline.com
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Company ID</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              CoID930293
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
  );
};

export default ViewProfile;
