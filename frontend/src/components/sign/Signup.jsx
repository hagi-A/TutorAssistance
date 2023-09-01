import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link , useNavigate} from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";
import { FaGoogle } from "react-icons/fa6";
import loginImage from "../../images/loginImage.jpg";

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState(""); // Add birthdate state
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  // const { user } = useAuthContext();
  const [selectedRole, setSelectedRole] = useState("");

  // const handleRoleChange = (e) => {
  //   setSelectedRole(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Calculate age based on birthdate
    // const birthYear = new Date(birthdate).getFullYear();
    // const currentYear = new Date().getFullYear();
    // const age = currentYear - birthYear;

    // if (age < 12) {
    //   console.log("User is too young to register.");
    //   return; // Don't proceed with registration
    // }
    const token = response.data.token
            localStorage.setItem('token', token)

            if (response.data.Type === 'Parent') {
                if (selectedRole === 'Parent') {
                    navigate('/parent')
                    alert(username)
                }
            }
            if (response.data.Type === 'Admin') {
                if (selectedRole === 'Admin') {
                    navigate('/admin')
                    alert(username)
                }
            }
            if (response.data.Type === 'Tutor') {
              if (selectedRole === 'Tutor') {
                  navigate('/tutor')
                  alert(username)
              }
          }
          if (response.data.Type === 'Student') {
                if (selectedRole === 'Student') {
                    navigate('/student')
                    alert(username)
                }
            }
            if (response.data.Type === 'Supervisor') {
              if (selectedRole === 'Supervisor') {
                  navigate('/supervisor')
                  alert(username)
              }
          }
        

        
        

    await signup(username, email, birthdate, password, selectedRole);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 mt-2 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span class=" text-4xl font-light">Hello!</span>
            <span class="font-light text-violet-300 mb-4">
              Please enter your details
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-2  mb-2">
                <label>
                  <span className="mb-2 text-md font-light">User Name: </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Email: </span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Birth Date: </span>
                </label>
                <input
                  type="date"
                  onChange={(e) => setBirthdate(e.target.value)}
                  value={birthdate}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Password:</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Role:</span>
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 border border-violet-400 rounded-md focus:ring focus:ring-blue-400"
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Parent">Parent</option>
                  <option value="Student">Student</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
              </div>
              {/* <div class="flex justify-between w-full py-4">
                <span class="font-bold text-md">Forgot password</span>
              </div> */}

              <button
                disabled={isLoading}
                className="w-full  border border-violet-400 mt-2 text-violet-400  bg-gray-300 bg-opacity-30 p-2 rounded-lg mb-2   hover:border hover:border-violet-400"
              >
                Sign Up
              </button>
              {error && <div className="error">{error}</div>}
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white text-md p-2 rounded-lg mb-2 hover:bg-violet-400 hover:text-white">
                <FaGoogle className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>
              <div class="text-center text-gray-400 mb-2">
                Already Have An Account?
                <Link to="/login" className="font-bold text-black">
                  Log In
                </Link>
                {/* <span class="font-bold text-black">Sign up for free</span> */}
              </div>
            </form>
            {/* right side */}
          </div>
          <div class="relative">
            <img
              src={loginImage}
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            {/* <!-- text on image  --> */}
            {/* <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
