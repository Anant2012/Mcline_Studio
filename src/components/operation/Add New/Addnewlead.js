import React, { useState } from "react";
import background from './Addnewlead.png';
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { useSelector } from "react-redux";
import moment from "moment";

function Addnewlead() {
  const { userId } = useSelector((state) => state);
  const [date, setDate] = useState("");
  const [person, setPerson] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [lead_status, setLead_Status] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const AddLead = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      user_id: userId,
      date: date,
      name: person,
      company: company,
      email: email,
      contact_no: contact_no,
      status: lead_status,
      description: description,
    }
    if (moment(date) < moment()) {
      if (!moment(moment().format("YYYY-MM-DD")).isSame(moment(date).format("YYYY-MM-DD"))) {
        alert("Invalid date");
        return;
      }
    }
    try {
      const response = await AxiosInstance.post(`/api/leads/create`, data)
      if (response.status === 200) {
        alert("✅ Lead Added SuccesFully");
        setIsDisabled(false);
      }
      setDate("");
      setCompany("");
      setContact_no("")
      setPerson("");
      setDescription("");
      setEmail("");
      setLead_Status("");
      setIsDisabled(false);
    } catch (error) {
      alert(error.response.data.msg);

    };
  }


  return (
    <div className="flex flex-nowrap">
      <div className="my-2 ml-28 mr-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
      <div className="flex w-full sm:w-3/4 justify-center item-center">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Add New Lead Form
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Leads from Multiple Sources</p>
            </div>
            <form onSubmit={AddLead}>
              <div className="w-full sm:w-3/4 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="date" className="leading-7 text-sm text-gray-600">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        id="date"
                        name="date"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 sm:py-1 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="person" className="leading-7 text-sm text-gray-600">
                        Person
                      </label>
                      <input
                        type="text"
                        required
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        id="person"
                        name="person"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="company" className="leading-7 text-sm text-gray-600">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        id="company"
                        name="company"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="number" className="leading-7 text-sm text-gray-600">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={contact_no}
                        onChange={(e) => setContact_no(e.target.value)}
                        id="number"
                        name="number"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label for="cars" className="leading-7 text-sm text-gray-600">Lead Status</label>

                      <select value={lead_status}
                        onChange={(e) => setLead_Status(e.target.value)} name="lead_status" id="lead_status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" className="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Cold" className="leading-7 text-sm text-gray-600">Cold</option>
                        <option value="Hot" className="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" className="leading-7 text-sm text-gray-600">Warm</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Description
                      </label>
                      <textarea
                        id="message"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-[#047EC1] border-0 py-2 px-8 focus:outline-none hover:bg-[#0473af] rounded text-lg">Submit</button>
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

export default Addnewlead;
