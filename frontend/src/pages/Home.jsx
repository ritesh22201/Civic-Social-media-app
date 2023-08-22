import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../redux/postReducer/action';
import Sidebar from '../components/Sidebar';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { getUsers } from '../redux/authReducer/action';

const Home = () => {
  const loginData = JSON.parse(localStorage.getItem('token')) || '';
  const [like, setLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const { posts } = useSelector(store => store.postReducer);
  const { users } = useSelector(store => store.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
    dispatch(getUsers());
  }, [])

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <Box>
      <Navbar />
      <Flex gap={'30px'} m={'20px 0'}>
        <Box w={'30%'}>
          <Sidebar />
        </Box>
        {posts?.map(el => {
          return <Card key={el._id} maxW='md'>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                  <Box>
                    <Heading size='sm'>{users.find(ele => ele._id === el.author._id)?.name}</Heading>
                    <Text>added a post recently</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                {el.content}
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src={el.image}
              alt='Chakra UI'
            />

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button onClick={handleLike} color={like ? '#1e99dc' : ''} flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
              </Button>
              <Button onClick={onOpen} flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        })}
        <Modal onClose={onClose} size={'3xl'} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  )
}

export default Home;