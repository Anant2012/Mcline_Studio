import React, { useState} from 'react'
import background from '../../auth/signup_banner.jpg';
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';

const SignUp = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(60%)'
  };

  const AddUser = async (e) => {
    e.preventDefault();
    // setIsDisabled(true);
    const data = {
      username: name,
      email: email,
      phone: phone,
      password: password,
      role: "user",
    }
    try {
      const response = await AxiosInstance.post(`/api/user/signup`, data)
      if (response.status === 200) {
        alert("✅User Created SuccesFully");
      }
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      props.setAdminLogin(1)
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }

  return (
    <>
      <div className={`h-[700px] w-full sm:w-3/4 flex mx-auto sm:shadow-md  my-12 ${(props.adminLogin)?"hidden":"block"}`}>
        <div className=" lg:w-1/2  flex  justify-center items-center" style={styles}>
            <div className="w-3/4 backdrop-opacity-30 blur-[1px] h-3/4 mx-auto backdrop-grayscale-10 bg-slate-800/40"></div>
        </div>
        <div className='w-full lg:w-1/2 my-auto'>
          <form>
          <div className='w-3/4 mx-auto'>
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">SignIn</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please fill out the form below to Sign In</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" value={name}
                  onChange={(e) => setName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone Number</label>
                <input type="tel" id="email" name="email" value={phone}
                  onChange={(e) => setPhone(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Role</label>
              <br/>
                <input onChange={(e) => setRole([...role, "user"])}type="checkbox" className='mr-1' /><span className="leading-7 text-sm text-gray-600">User</span>
              <br/>
                <input onChange={(e) => setRole([...role, "operation"])}type="checkbox"  className='mr-1' /><span className="leading-7 text-sm text-gray-600">Operation</span>
              <br/>
                <input onChange={(e) => setRole([...role, "hr"])}type="checkbox"  className='mr-1' /><span className="leading-7 text-sm text-gray-600">HR</span>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="email" name="email" value={password}
                  onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <button className="text-white bg-[#047EC1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg" onClick={ AddUser}>SignIn</button>
            <p className="text-xs text-gray-500 mt-3">Don't worry! We will keep your data safe</p>
          </div>
          </form>
          </div>
      </div>
    </>
  )
}

export default SignUp