"use client";
import React, { useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
// import { SignInSchema, defaultValues, signInSchema } from "@/form/signIn";
// import Swal from "sweetalert2";
const MUTATE_SIGN_IN = gql`
  mutation signIn22($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      success
      message
      token
    }
  }
`;

const MUTATE_SEND_OTP = gql`
  mutation sendVerificationCode($countryCode: String, $mobile: String) {
    sendVerificationCode(countryCode: $countryCode, mobile: $mobile) {
      # "成功"
      success
      # "訊息"
      message
    }
  }
`;

const MUTATE_REGISTER = gql`
  mutation signUp($memberInput: MemberInput!, $verificationCode: String) {
    signUp(memberInput: $memberInput, verificationCode: $verificationCode) {
      # "成功"
      success
      # "訊息"
      message
      # "登入憑證"
      token
    }
  }
`;

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  // const { register, handleSubmit, getValues, setValue } =
  //   useForm<SignInSchema>({
  //     defaultValues,
  //     shouldUseNativeValidation: true,
  //     mode: "onChange",
  //   });
  const [signInFn, { loading }] = useMutation(MUTATE_SIGN_IN, {
    onCompleted({ signIn }) {
      if (signIn.success) {
        //   useTokenStore.getState().setToken(signIn.token);
        console.log("success ", signIn);
        localStorage.setItem("token", signIn.token);
      } else if (signIn.message) {
        alert(signIn.message);
      }
    },
    onError() {
      return null;
    },
  });

  const [signOTPFn] = useMutation(MUTATE_SEND_OTP, {
    onCompleted({ signIn }) {
      if (signIn.success) {
        //   useTokenStore.getState().setToken(signIn.token);
        console.log("success ", signIn);
      } else if (signIn.message) {
        alert(signIn.message);
      }
    },
    onError() {
      return null;
    },
  });

  const handleClickLogin = () => {
    console.log(`userPwd=${userPwd}`);
    // const variables: { username?: string; password: string } = {};
    // const country = getValues("country");
    // const countryCode = getValues("countryCode");
    // const realcountryCode = "+" + countryCode;
    // const mobileE164 = phoneValidator.formatE164(
    //   realcountryCode + username,
    //   country
    // );
    // if (mobileE164) {

    //   signInFn({ variables });
    // }
    // variables.username = "0918895519";
    // variables.password = userPwd;
    // signInFn({
    //   variables,
    // });
  };

  const handleClickReg = () => {
    // const variables: { username?: string; password: string } = {};
    // variables.username = "0918895519";
    // variables.password = userPwd;
    // signInFn({
    //   variables,
    // });
  };

  const handleClickSendOTP = () => {
    // const variables: { countryCode: string; mobile?: string; email: string } =
    //   {};
    // variables.countryCode = "+886";
    // variables.mobile = "0918895519";
    // signOTPFn({
    //   variables,
    // });
  };
  //   const _submit: SubmitHandler<SignInSchema> = useCallback(
  //     ({ username, password }) => {
  //       const variables: { username?: string; password: string } = { password };
  //       const country = getValues("country");
  //       const countryCode = getValues("countryCode");
  //       const realcountryCode = "+" + countryCode;
  //       const mobileE164 = phoneValidator.formatE164(
  //         realcountryCode + username,
  //         country
  //       );
  //       if (mobileE164) {
  //         variables.username = mobileE164.replace(realcountryCode, "");
  //         signInFn({ variables });
  //       }
  //     },
  //     [getValues, signInFn]
  //   );
  return (
    <div
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/chunjull/Habit-Piggy/main/assets/images/loginBanner.jpg")',
      }}
      className="bg-cover gap-5 bg-center h-screen md:text-center sm:text-center  lg:flex items-center justify-center"
    >
      <Slogan />
      <LoginForm />
    </div>
  );
};

const BackgroundImg = () => {
  return <></>;
};

const RegisterPage = () => {
  return (
    <>
      <h1>11</h1>
    </>
  );
};

const Slogan = () => {
  return (
    <div>
      <div>Login</div>
      <div className=" text-6xl font-bold ">
        WELCOME <br /> BACK
      </div>
      <div>
        歡迎回到「Habit Piggy」！養成習慣、乖乖存錢，你今天 <br />
        選擇哪一個呢？
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-16  bg-white rounded w-96   ">
        <form>
          <h1 className=" font-bold text-4xl pb-4 text-amber-400 ">會員登入</h1>
          <label
            className=" font-bold text-xl text-amber-400 "
            htmlFor="account"
          >
            Account
          </label>
          <br />
          <input className=" bg-white pb-4" id="account" type="text" />
          <br />
          <label className=" text-xl font-bold text-amber-400 " htmlFor="pwd">
            Password
          </label>
          <br />
          <input id="pwd" className=" bg-white pb-4" type="text" />
          <br /> <br />
          <button className="btn btn-primary text-white font-bold">登入</button>
          <br />
          <br />
          <div className="border-t  font-bold border-black"></div>
          <div className=" flex justify-between p-5 ">
            <span className=" text-black">還沒有帳號?</span>
            <span className=" text-black">
              <a href="/register"> 立即註冊</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
