import { Box, Button, Heading, Input, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authReducer/action';
import Loader from '../components/Loader';

const Signup = () => {
    const dispatch = useDispatch();
    const { isAuth, isLoading, loginErr } = useSelector(store => store.authReducer);
    const toast = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast({
                title: 'Failed',
                description: 'All fields are required!',
                position: 'top',
                status: 'warning',
                isClosable: true,
                duration: 4000
            })
            return;
        }

        dispatch(login(formData));

        setFormData({
            email: '',
            password: ''
        })
    }

    useEffect(() => {
        if (isAuth) {
            toast({
                title: 'Success',
                description: 'User loggedIn Successfully',
                position: 'top',
                status: 'success',
                isClosable: true,
                duration: 4000
            })

            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 4000)
        }
        else if (loginErr) {
            toast({
                title: 'Failed',
                description: loginErr,
                position: 'top',
                status: 'error',
                isClosable: true,
                duration: 4000
            })
        }

    }, [isAuth, loginErr])

    return (
        <Box>
            {!isLoading ? <Box w={{ base: '95%', sm: '80%', md: '65%', lg: '40%', xl: '30%', '2xl': '30%' }} p='40px' textAlign={'center'} m={'10px auto'} border={'1px solid rgb(196, 194, 194)'}>
                <Heading fontFamily={'Roboto, sans-serif'} size={'xl'}>CIVIC</Heading>
                <Text color='gray.600'>Sign up to see photos and videos from your friends.</Text>
                <form onSubmit={handleSubmit}>
                    <Input mt={'30px'} name='email' value={formData.email} onChange={(e) => handleChange(e)} bg='rgb(250, 250, 250)' h={'48px'} borderRadius={'none'} focusBorderColor='gray.400' type='email' placeholder='Email' />
                    <Input name='password' value={formData.password} onChange={(e) => handleChange(e)} bg='rgb(250, 250, 250)' h={'48px'} borderRadius={'none'} focusBorderColor='gray.400' type='password' placeholder={'Password'} />
                    <Box>
                        <Text fontSize={'13px'} m={'20px 0'} color={'gray.500'}>People who use our service may have uploaded your contact information to Instagram. <Link style={{ color: 'rgb(41, 164, 245)', textDecoration: 'underline' }} to='#'>Learn More</Link></Text>
                        <Text fontSize={'13px'} m={'20px 0'} color={'gray.500'}>
                            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy. <Link style={{ color: 'rgb(41, 164, 245)', textDecoration: 'underline' }} to='#'>Learn More</Link>
                        </Text>
                    </Box>
                    <Button type='submit' mt={'7px'} _hover={'none'} w={'100%'} bg={'rgb(75, 180, 248)'} color={'white'} borderRadius={'12px'}>Login</Button>
                </form>
                <Box mt={'10px'} fontSize={'13px'} color={'gray.500'}>
                    New Here? <Link style={{ color: 'rgb(41, 164, 245)', marginLeft: '20px', textDecoration: 'underline' }} to={'/signup'}>Signup</Link>
                </Box>
            </Box>
                :
                <Loader />
            }
        </Box>
    )
}

export default Signup;