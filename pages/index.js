import Head from "next/head";
import Image from "next/image";
import logoPic from "../public/logo.png";
import React, { Component } from "react";
import { loginUser } from '../lib/auth';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;
    
    event.preventDefault();
    loginUser(email, password)
  };
  render() {
    return (
      <>
        <section className="h-full gradient-form bg-white md:h-screen">
          <div className="py-12 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="xl:w-11/12 xl:h-full">
                <div className="xl:h-full block bg-white shadow-2xl rounded-2xl">
                  <div className="xl:h-full lg:flex g-0">
                    <div className="lg:w-8/12 bg-gray-100 flex justify-center items-center lg:rounded-l-2xl">
                      <div className="text-white text-center px-4 py-6 md:p-12 md:mx-6">
                        <div className="mx-auto w-32 relative">
                          <Image
                            src={logoPic}
                            alt="logo"
                            // placeholder="blur" // Optional blur-up while loading
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-4/12 lg:h-full px-4 md:px-0 items-center place-self-center lg:rounded-r-2xl rounded-b-lg lg:rounded-bl-none">
                      <div className="md:h-full md:pt-28 md:pb-12 md:px-12 md:mx-6">
                        <div className="text-left">
                          <h4 className="text-4xl text-blue-900 font-semibold mt-1 mb-2 pb-1">
                            Login
                          </h4>
                          <h4 className="text-xl text-blue-900 font-medium mt-1 mb-16 pb-1">
                            Hello let's get started
                          </h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                          <div className="mb-8">
                            <input
                              type="text"
                              name="email"
                              className="w-full py-0 border-b-2 focus:outline-none placeholder-blue-900 text-base font-semibold"
                              onChange={this.handleChange}
                              placeholder="Alamat E-mail"
                            />
                          </div>
                          <div className="mb-8">
                            <input
                              type="password"
                              name="password"
                              className="w-full py-0 border-b-2 focus:outline-none placeholder-blue-900 text-base font-semibold"
                              onChange={this.handleChange}
                              placeholder="Password"
                            />
                          </div>
                          <div className="pt-8 pb-12">
                            <div className="flex flex-row justify-between">
                              <div className="flex items-center">
                                <input
                                  id="remember_me"
                                  type="checkbox"
                                  className="w-4 h-4 border border-white shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                                <label
                                  htmlFor="remember_me"
                                  className="ml-2 block leading-5 text-blue-900 text-base font-medium"
                                >
                                  Remember me
                                </label>
                              </div>
                              <a
                                href="#"
                                className="text-blue-900 text-base font-medium"
                              >
                                Reset Password
                              </a>
                            </div>
                          </div>
                          <div className="text-center pt-4 mb-12 pb-1">
                            <button
                              className="inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LoginForm;
