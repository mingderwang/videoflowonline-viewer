import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  View,
  HStack,
  VStack,
  Pressable,
  Text,
  Image,
  Button,
  ArrowForwardIcon,
} from 'native-base';
import Swiper from 'react-native-swiper';
import Password from './components/Password';
import TextDemo from './components/TextDemo';
import InputDemo from './components/InputDemo';
import ReadMe from './components/ReadMe';
import VideoPlayDemo from './components/VideoPlayDemo';
VideoPlayDemo
export default () => {
  return (
    <NativeBaseProvider>
      <Swiper loop={false} index={0} showsPagination={true}>
        <VideoPlayDemo />
        <Center flex={1} px="3" bg="yellow.200">
          <ReadMe />
        </Center>
        <Center flex={1} px="3">
          <Password />
        </Center>
      </Swiper>
    </NativeBaseProvider>
  );
};
