import React from 'react';

import classNames from 'classnames';
import {ErrorMessage, Field, Formik, FormikHelpers, FormikValues} from 'formik';

interface FormState {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const MyForm: React.FC = () => {


    const formInitialState: FormState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    const validationFn = (values: FormState) => {
        const errors: any = {};

        if(values.firstname.length === 0) {
            errors.firstname = "Required";
        }

        if(values.lastname.length < 4) {
            errors.lastname = "Minlen 4";
        }

        return errors;
    }

    const validationCss = (valid: boolean): string => {
        const isDirty = true;
        return classNames(
            'form-control',
            {'is-invalid': !valid && isDirty},
            {'is-valid': valid && isDirty}
        );
    }

    const submit = (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
        console.log('saving...');
        setTimeout(() => {
            console.log('save', values);
            setSubmitting(false);
        }, 2000);
        // e.currentTarget.reset();
        // setForm(formInitialState);
    }

    return (
        <Formik
            initialValues={formInitialState}
            validate={validationFn} onSubmit={submit}>
            {(formData) => (
                <form onSubmit={formData.handleSubmit}>
                    {/*<input type="text"*/}
                    {/*       name="firstname"*/}
                    {/*       value={formData.values.firstname}*/}
                    {/*       onChange={formData.handleChange}*/}
                    {/*       onBlur={formData.handleBlur}*/}
                    {/*       className={validationCss(!formData.errors.firstname)}/>*/}
                    <Field type="text" name="firstname" className="form-control" />
                    <ErrorMessage name="firstname" component="div" />
                    <input type="text"
                           name="lastname"
                           value={formData.values.lastname}
                           onChange={formData.handleChange}
                           onBlur={formData.handleBlur}
                           className={validationCss(!formData.errors.lastname)}/>
                    <input type="text"
                           name="email"
                           value={formData.values.email}
                           onChange={formData.handleChange}
                           onBlur={formData.handleBlur}
                           className={validationCss(!formData.errors.email)}/>
                    <input type="password"
                           name="password"
                           value={formData.values.password}
                           onChange={formData.handleChange}
                           onBlur={formData.handleBlur}
                           className={validationCss(!formData.errors.password)}/>
                    <input type="submit" className="btn btn-outline-primary" value="salva" disabled={formData.isSubmitting}/>
                </form>
            )}
        </Formik>

    )
}

export default MyForm;
