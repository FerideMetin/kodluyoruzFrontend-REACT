import { useFormik } from 'formik';
import validationSchema from './validations';


function Signup() {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(values);
        }, // form submit edildiğinde.
        validationSchema,
    });

    console.log(errors);


    return <div>

        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {errors.email && touched.email && <div className='error'>{errors.email}</div>}

            <br /><br />

            <label>Password</label>
            <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {errors.password && touched.password && <div className='error'>{errors.email}</div>}

            <br /><br />

            <label >Confirm Password</label>
            <input
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {errors.passwordConfirm && touched.email && <div className='error'>{errors.passwordConfirm}</div>}

            <br /><br />

            <button type="submit">Submit</button>

            <br /><br />

            <code>{JSON.stringify(values)}</code>

        </form>
        )
    </div>;
}

export default Signup;
