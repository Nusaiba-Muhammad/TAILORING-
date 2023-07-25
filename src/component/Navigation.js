import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../HomePage";
import Top from "./Top";
import Navbar from "./Navbar";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Login from "./Login";
import NavigationIndex from "./NavigationIndex";
import AuthNavigation from "./AuthNavigation";
import MainLogin from "./MainApp/MainLogin";
import MainSignup from "./MainApp/MainSignup";
import MainProfile from "./MainApp/MainProfile";

export default function Navigation() {
  const element = useRoutes([
    {
      path: "/",
      element: <NavigationIndex />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        { path: "/about-us", element: <Top /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/faqs", element: <FAQs /> },
      ],
    },

    {
      path: "/login",
      element: <AuthNavigation />,
      children: [
        { element: <Login />, index: true },
        { path: "main-login", element: <MainLogin /> },
        { path: "main-signup", element: <MainSignup /> },
        { path: "main-profile", element: <MainProfile /> },
      ],
    },
  ]);
  return element;
}
