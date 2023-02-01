import React from "react";
import background from './AddNewBanner.jpg';

function EditLead() {

    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%)'
    };


    return (
        <div className="flex flex-nowrap">
            <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
            <div className="flex w-full sm:w-3/4 justify-center item-center">
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-4">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit Your Lead Form
                            </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Leads from Multiple Sources</p>
                        </div>
                        <form>
                            <div class="w-3/4 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                id="date"
                                                name="date"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="person" class="leading-7 text-sm text-gray-600">
                                                Person
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                id="person"
                                                name="person"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="company" class="leading-7 text-sm text-gray-600">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                id="company"
                                                name="company"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="number" class="leading-7 text-sm text-gray-600">
                                                Contact Number
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                id="number"
                                                name="number"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                id="email"
                                                name="email"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="cars" class="leading-7 text-sm text-gray-600">Lead Status</label>

                                            <select name="cars" id="cars" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                                                <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                                                <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                                                <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="p-2 w-full">
                                        <div class="relative">
                                            <label
                                                for="message"
                                                class="leading-7 text-sm text-gray-600"
                                            >
                                                Description
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                name="message"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="p-2 w-full">
                                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditLead;
