import React from "react";

const AdminProfile = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              Profiles
            </h1>
          </div>
          <div>
          <div className="my-4 px-4 w-11/12 mx-auto flex flex-col sm:flex-row border border-slate-300">
            <div className="my-4 flex w-full justify-evenly">
              <div className="flex w-1/4">
                <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
                <dd class="ml-4 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  EC101
                </dd>
              </div>
              <div className="flex w-1/4">
                <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
                <dd class="ml-4 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  EC101
                </dd>
              </div>
              <div className="flex w-1/4">
                <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
                <dd class="ml-4 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  EC101
                </dd>
              </div>
            </div>
          </div>

          </div>
          
        </div>
    </section>

    </>
  );
};

export default AdminProfile;
