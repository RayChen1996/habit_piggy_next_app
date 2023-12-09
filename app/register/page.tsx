"use client";
import React, { useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
// import { SignInSchema, defaultValues, signInSchema } from "@/form/signIn";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const MUTATE_REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      token
    }
  }
`;

export default function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/registerBanner.jpg?raw=true")',
      }}
      className="bg-cover gap-5 bg-center h-screen  md:text-center sm:text-center  lg:flex  items-center justify-center"
    >
      <Slogan />
      <RegisterForm />
    </div>
  );
}

const Slogan = () => {
  return (
    <div>
      <div>Sing up</div>
      <div className=" text-6xl font-bold ">
        ENJOY <br />
        JOURNEY
      </div>
      <div>
        在「Habit Piggy」，你可以養成很多習慣，或是存到很多 <br />
        錢，最棒的是：你可以在養成習慣的同時存錢！
      </div>
    </div>
  );
};
interface RegisterFormProps {
  username: string;
  password: string;
}
const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterFormProps>();

  const [regFn, { loading }] = useMutation(MUTATE_REGISTER, {
    onCompleted({ register }) {
      console.log("register", register);
      if (register.token) {
        console.log("Success", register);
        localStorage.setItem("token", register.token);
        Swal.fire({
          icon: "success",
          title: "註冊成功",
          text: "歡迎！",
          timer: 1000, // 设置弹窗自动消失的时间（毫秒）
          showConfirmButton: false, // 隐藏“确认”按钮
        });
        setTimeout(() => {
          router.push("/login"); // Redirect to '/manager' after successful login
        }, 500);
      } else {
        Swal.fire({
          icon: "error",
          title: "註冊失敗",
          text: "已存在使用者",
          timer: 500,
        });
      }
    },
    onError(err) {
      console.log(err);
      return null;
    },
  });

  const onSubmitForm = (data: any) => {
    console.log(register);
    regFn({
      variables: {
        username: data.username,
        password: data.password,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-16  bg-white rounded w-96 ">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1 className=" font-bold text-4xl pb-4 text-amber-400 ">會員註冊</h1>
          <label
            className=" font-bold text-xl text-amber-400 "
            htmlFor="account"
          >
            帳號
          </label>
          <br />
          <input
            id="pwd"
            {...register("username")}
            className=" bg-white pb-4 text-black rounded-xl border-2 border-gray text-center"
            type="text"
          />
          <br />
          <label className=" text-xl font-bold text-amber-400 " htmlFor="pwd">
            密碼
          </label>
          <br />
          <input
            {...register("password")}
            id="pwd"
            className=" bg-white pb-4 text-black rounded-xl border-2 border-gray text-center"
            type="password"
          />
          <br /> <br />
          <button className="btn btn-primary text-white font-bold">註冊</button>
          <br />
          <br />
          <div className="border-t  font-bold border-black"></div>
          <div className=" flex justify-between p-5 ">
            <span className=" text-black">已經有帳號？</span>
            <span className=" text-black">
              <a href="/login">立即登入</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
