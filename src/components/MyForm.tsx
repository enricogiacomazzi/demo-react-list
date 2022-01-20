import React, {CSSProperties, useState} from 'react';
import classNames from 'classnames';

const MyForm: React.FC = () => {

    const formInitialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    const [form, setForm] = useState(formInitialState);
    const [dirty, setDirty] = useState<boolean>(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('change', e.currentTarget.value);
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        });
        setDirty(true);
    }

    // const setField = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    //     setForm({
    //         ...form,
    //         [field]: e.currentTarget.value
    //     });
    // }

    const firstnameValid = form.firstname !== '';
    const lastnameValid = form.lastname.length > 3;
    const formValid = [firstnameValid, lastnameValid].every(x => x);


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!formValid) {
            console.log('save', form);
            // e.currentTarget.reset();
            setForm(formInitialState);
        }
    }

    const validationCss = (valid: boolean): string => {
        return classNames(
            'form-control',
            {'is-invalid': !valid && dirty},
            {'is-valid': valid && dirty}
        );
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input name="firstname" value={form.firstname} onChange={onChangeHandler}
                   type="text" placeholder="firstname" className={validationCss(firstnameValid)}/>
            <input name="lastname" value={form.lastname} onChange={onChangeHandler}
                   type="text" placeholder="lastname" className={validationCss(lastnameValid)}/>
            <input name="email" value={form.email} onChange={onChangeHandler}  type="text" placeholder="email" className="form-control"/>
            <input name="password" value={form.password} onChange={onChangeHandler}  type="password" placeholder="password" className="form-control"/>
            <input type="submit" value="salva" className="btn btn-outline-primary" disabled={!formValid} />
        </form>
    )
}

export default MyForm;
