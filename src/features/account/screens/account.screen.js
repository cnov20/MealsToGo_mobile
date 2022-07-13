import react, {useRef, useEffect} from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {

  const animation = useRef(null);
  // const lottieRef = useRef<AnimatedLottieView|null>(null);

  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   // animation.current?.play();
  // }, []);

  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          // key="animation"
          // ref={animation}
          autoPlay={true}
          loop={true}
          speed={1}
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );};