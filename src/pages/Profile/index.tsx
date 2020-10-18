import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {AiOutlineUser} from 'react-icons/ai'
import Input from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';
import { Container, ImageContainer } from './styles';

const Profile: React.FC = () => {
  const {user} = useAuth();
  const methods = useForm();

  const onSubmit = () => {}
  return (
      <Container>
        
        <FormProvider {...methods}>
          <form name="teste" onSubmit={methods.handleSubmit(onSubmit)}>
            <header>
              <ImageContainer>
                {!!user.avatar && (
                  <img src={user.avatar} alt={user.name}/>
                )}
                {!user.avatar && (
                  <AiOutlineUser size={30} />
                )}
              </ImageContainer>
            </header>
            <span>
              <h1>Profile</h1>
            </span>
            <Input
              placeHolder="Name"
              name="name"
              defaultValue={user.name}
              type="text"
              validate={{ required: true }}
            />

            <Input
              placeHolder="E-mail"
              name="email"
              defaultValue={user.email}
              validate={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              }}
            />
            <Input
              placeHolder="Password"
              name="password"
              type="password"
              validate={{ required: true }}
            />
            
            <footer>
              
            </footer>
          </form>
        </FormProvider>     
      </Container>
    )
}

export default Profile;