"use client";
import React, { useRef, useState } from "react";
import {
  useForm,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import useTokenStore from "../store/userToken";
import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Swal from "sweetalert2";

// import { SignInSchema, defaultValues, signInSchema } from "@/form/signIn";

const MUTATE_SIGN_IN = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/chunjull/Habit-Piggy/main/assets/images/loginBanner.jpg")',
      }}
      className="bg-cover gap-5 bg-center h-screen md:text-center  lg:flex items-center justify-center"
    >
      <Slogan />
      <LoginForm />
    </div>
  );
}

const Slogan = () => {
  return (
    <div className=" sm:text-center  sm:flex sm:justify-center sm:items-center lg:flex lg:justify-center lg:items-center flex-col ">
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
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [signInFn, { loading }] = useMutation(MUTATE_SIGN_IN, {
    onCompleted({ login }) {
      console.log(login);
      if (login.token) {
        console.log("Success", login);
        localStorage.setItem("token", login.token);
        Swal.fire({
          icon: "success",
          title: "登入成功",
          text: "歡迎！",
          timer: 1000, // 设置弹窗自动消失的时间（毫秒）
          showConfirmButton: false, // 隐藏“确认”按钮
        });
        useTokenStore.getState().setToken(login.token);
        setTimeout(() => {
          router.push("/manager"); // Redirect to '/manager' after successful login
        }, 500);
      } else {
        Swal.fire({
          icon: "error",
          title: "登入失敗",
          text: "請確認帳號密碼",
          timer: 500,
        });
      }
    },
    onError(err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "登入失敗",
        text: "請確認帳號密碼",
        timer: 1500,
      });
      return null;
    },
  });

  const onSubmitForm = (data: any) => {
    console.log(register);
    signInFn({
      variables: {
        username: data.username,
        password: data.password,
      },
    });
  };

  return (
    <div className="flex ">
      <div className=" p-16  bg-white rounded w-96   ">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1 className=" font-bold text-4xl pb-4 text-amber-400 ">會員登入</h1>
          <label
            className=" font-bold text-xl text-amber-400  text-left"
            htmlFor="account"
          >
            帳號
          </label>
          <br />
          <input
            {...register("username")}
            className=" bg-white pb-4 text-black rounded-xl border-2 border-gray text-center "
            id="account"
            type="text"
          />
          <br />
          <label className=" text-xl font-bold text-amber-400  " htmlFor="pwd">
            密碼
          </label>
          <br />
          <input
            {...register("password")}
            id="pwd"
            className=" bg-white pb-4 text-black rounded-xl border-2 border-gray text-center"
            type="password" // Corrected to "password"
          />
          <br /> <br />
          <input
            className="btn btn-primary text-white font-bold"
            type="submit"
            value="登入"
          />
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
