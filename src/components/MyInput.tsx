import React, {useEffect, useState} from 'react';

interface MyInputProps {
    type: 'text' | 'email' | 'tel';
    value?: string;
    validationRgx?: RegExp;
    onChange?: (value: string) => void;
}

const MyInput: React.FC<MyInputProps> = (props) => {
    const [state, setState] = useState<string | undefined>(props.value ?? '');

    useEffect(() => {
        setState(valid(props.value));
    }, [props.value, props.validationRgx]);

    const valid = (value: string | undefined): string | undefined => {
        if(!props.validationRgx) {
            return value;
        }
        return (value ?? '').replace(props.validationRgx, '');
    }

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = valid(e.currentTarget.value) ;
        setState(value);
        if(!!props.onChange) {
            props.onChange(value ?? '');
        }
    }

    return <input type={props.type} value={state} onChange={onchangeHandler} />
}

export default MyInput;
