import React from "react";
import { Fragment } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Nav({ salvex, wellness, pso2, shvrkboy, psyche, aiko }: boolean) {
  return (
    <nav className="z-10	fixed top-0 w-screen  bg-[#4D63E9] p-3 rounded-b-md">
      <ul className="flex text-2xl">
        <li className="ml-12 mr-24">
          <Link href={`/`}>
            <a
              className="text-white hover:text-blue-800  transition-all link link-underline link-underline-black"
              href="#"
            >
              Home
            </a>
          </Link>
        </li>
        <li className="mr-24">
          <Link href={`/projects/aboutme`}>
            <a
              className="text-white hover:text-blue-800  transition-all link link-underline link-underline-black"
              href="#"
            >
              About
            </a>
          </Link>
        </li>
        <li className="mr-24">
          <a className="text-white hover:text-blue-800">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center link link-underline link-underline-black">
                  Projects
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#4D63E9] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {salvex ? (
                      ""
                    ) : (
                      <Link href={`/projects/salvex`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              SALVEX
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}
                    {wellness ? (
                      ""
                    ) : (
                      <Link href={`/projects/wellness`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              WELLNESS
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}

                    {pso2 ? (
                      ""
                    ) : (
                      <Link href={`/projects/pso2`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              PSO2 SCRATCH TICKET DATABASE
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}

                    {shvrkboy ? (
                      ""
                    ) : (
                      <Link href={`/projects/shvrkboy`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              SHVRKBOY SNEAKERS
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}

                    {psyche ? (
                      ""
                    ) : (
                      <Link href={`/projects/psyche`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              PSYCHE OF PAT
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}

                    {aiko ? (
                      ""
                    ) : (
                      <Link href={`/projects/aiko`}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-[#4D63E9]"
                                  : "text-white",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              AIKO VIRTUAL
                            </button>
                          )}
                        </Menu.Item>
                      </Link>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </a>
        </li>
        <li className="mr-24">
          <a
            className="text-white hover:text-blue-800"
            href="/Patrick_Torres_Resume_2022CS.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
