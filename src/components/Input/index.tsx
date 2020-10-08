import React, { useCallback, useEffect, useState } from 'react';
import { FieldElement, useForm, useFormContext } from 'react-hook-form';
import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  validate?: object;
  name: string;
}

const Input: React.FC<InputProps> = ({
  placeHolder,
  validate,
  name,
  ...rest
}) => {
  const { register, errors } = useFormContext();
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (errors[name]) {
      setError(old => {
        setErrorMessage(errors[name].message);
        return true;
      });
    } else {
      setError(old => {
        setErrorMessage('');
        return false;
      });
    }
  }, [errors]);

  const handleBlur = useCallback(evt => {
    if (evt.target.value.length > 0) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, []);

  return (
    <Container filled={filled} setError={error}>
      <div className="form">
        <input
          {...rest}
          onBlur={handleBlur}
          name={name}
          ref={register(validate)}
        />
        <label className="label-name">
          <span className="content-name"> {placeHolder}</span>
        </label>
      </div>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </Container>
  );
};

export default Input;
