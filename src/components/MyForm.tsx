import React from 'react';
import {useForm} from 'react-hook-form';
import classNames from 'classnames';

const MyForm: React.FC = () => {

    const {
        register,
        formState: {isValid, errors, isDirty},
        handleSubmit,
        watch} = useForm({reValidateMode: 'onChange'});

    // const formInitialState = {
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    // };

    const validationCss = (valid: boolean): string => {
        return classNames(
            'form-control',
            {'is-invalid': !valid && isDirty},
            {'is-valid': valid && isDirty}
        );
    }

    const submit = (data: any) => {
        console.log('save', data);
        // e.currentTarget.reset();
        // setForm(formInitialState);
    }

    console.log('error', errors);

    console.log(watch("lastname"));

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input {...register('firstname', {required: true})}
                   className={validationCss(!errors.firstname)}/>
            {errors.firstname && "First name is required"}
            <input {...register('lastname', {required: true, minLength: 4})}
                   className={validationCss(!errors.lastname)}/>
            {errors.lastname && "Last name is required and min len 4 chars"}
            <input {...register('email')}  className="form-control"/>
            <input type="password" {...register('password')}  className="form-control"/>
            <input type="submit" value="salva" className="btn btn-outline-primary"/>
            <pre>{isValid ? "valid" : 'invalid'}</pre>
            <pre>{isDirty ? "dirty" : 'untouched'}</pre>

        </form>
    )
}

export default MyForm;
