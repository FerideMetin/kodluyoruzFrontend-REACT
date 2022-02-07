
/* 

// useFormik, checkbox, button, dropdown componentleri kullanıldı.

import './App.css';

import { useFormik } from 'formik';

// useFormik kullanılarak daha gelişmiş bir yapıya sahip oldu. 

function App() {
  const {handleSubmit, handleChange,values} = useFormik({
    initialValues: {
      firstName: '',
          lastName: '',
          email: '',
          gender: 'male',
          hobies: [],
          country: 'Turkey',
    },
    onSubmit: values => {
      console.log(values);    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={handleChange} />

            <br /><br />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={handleChange} />

            <br /><br />

            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
            />

            <br /><br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
            />

            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
            />

            <br />
            <br />

            <div>
              <input
                type="checkbox"
                name="hobies"
                values="Football"
                onChange={handleChange}
              />
              Football
            </div>

            <div>
              <input
                type="checkbox"
                name="hobies"
                values="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>

            <div>
              <input
                type="checkbox"
                name="hobies"
                values="Photography"
                onChange={handleChange}
              />
              Photography
            </div>

            <br /><br />

            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select>

            <br /><br />

            <button type="submit">Submit</button>

            <br /><br />

            <code>{JSON.stringify(values)}</code>

          </form>
        )
    </div>
  );
}

export default App;

*/

import './App.css';

import Signup from './components/Signup';

// form validasyonları ile işlemler gerçekleştirildi. yup.js kütüphanesi kullanılarak.

function App() {


  return (
    <div className="App">
    <Signup/>
    </div>
  );
}

export default App;
