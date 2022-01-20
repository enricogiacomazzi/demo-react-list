import React from 'react';
import {useForm} from 'react-hook-form';

const MyForm: React.FC = () => {

    const {register, formState: {isValid, errors}, handleSubmit, watch} = useForm();

    // const formInitialState = {
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    // };

    // const validationCss = (valid: boolean): string => {
    //     return classNames(
    //         'form-control',
    //         {'is-invalid': !valid && dirty},
    //         {'is-valid': valid && dirty}
    //     );
    // }

    const submit = (data: any) => {
        console.log('save', data);
        // e.currentTarget.reset();
        // setForm(formInitialState);
    }

    console.log(isValid, errors);

    console.log(watch("lastname"));

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input {...register('firstname', {required: true})} className="form-control"/>
            {errors.firstname && "Last name is required"}
            <input {...register('lastname', {required: true, minLength: 4})} className="form-control"/>
            <input {...register('email')}  className="form-control"/>
            <input type="password" {...register('password')}  className="form-control"/>
            <input type="submit" value="salva" className="btn btn-outline-primary"/>
            <pre>{isValid ? "valid" : 'invalid'}</pre>
        </form>
    )
}

export default MyForm;
