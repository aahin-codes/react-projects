import { Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../homepage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Accordion from "../components/Accordion/Accordion";
import Tabs from "../components/CustomTabs/Tabs";
import GithubProfileFinder from "../components/GithubProfileFinder/GithubProfileFinder";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import LoadMoreComponent from "../components/LoadMoreComponent/LoadMoreComponent";
import ThemeMode from "../components/ThemeMode/ThemeMode";
import Modal from "../components/Modal/Modal";
import QrCodeGenerator from "../components/QrCodeGenerator/QrCodeGenerator";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import RandomColorGenerator from "../components/RandomColorGenerator/RandomColorGenerator";
import ScrollToTopAndBottom from "../components/ScrollToTopAndBottom/ScrollToTopAndBottom";
import SearchAutocomplete from "../components/SearchAutocomplete/SearchAutocomplete";
import StarRating from "../components/StarRating/StarRating";
import TreeView from "../components/TreeView/TreeView";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import FeatureFlag from "../components/FeatureFlag/FeatureFlag";
import FeatureFlagsGlobalState from "../components/FeatureFlag/context/FeatureFlagsGlobalState";
import UseFetchHook from "../components/useFetchHook/UseFetchHook";
import UseOnclickOutsideHook from "../components/useOnclickOutside/UseOnclickOutsideHook";
import UseWindowResizeHook from "../components/useWindowResize/UseWindowResizeHook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/react-projects",
        element: <HomePage />,
        index: true
      }
    ]
  },
  {
    path: "/project",
    children: [
      // Phase 1: Basics
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "random-color-generator",
        element: <RandomColorGenerator />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "modal-popup",
        element: <Modal />,
      },

      // Phase 2: User Interaction
      {
        path: "star-rating",
        element: <StarRating />,
      },
      {
        path: "theme-mode",
        element: <ThemeMode />,
      },
      {
        path: "qr-code-generator",
        element: <QrCodeGenerator />,
      },
      {
        path: "scroll-to-top-and-bottom",
        element: <ScrollToTopAndBottom />,
      },
      // {
      //   path: "scroll-to-section",
      //   element: <ScrollToSection />,
      // },

      // Phase 3: Arrays & Lists
      {
        path: "image-slider",
        element: <ImageSlider />,
      },
      {
        path: "load-more-component",
        element: <LoadMoreComponent />,
      },
      {
        path: "scroll-indicator",
        element: <ScrollIndicator />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToe />,
      },

      // Phase 4: APIs
      {
        path: "github-profile-finder",
        element: <GithubProfileFinder />,
      },
      {
        path: "search-autocomplete",
        element: <SearchAutocomplete />,
      },

      // Phase 5: Advanced / Hooks
      // {
      //   path: "feature-flag",
      //   element: <FeatureFlag />,
      // },
      {
        path: "use-fetch-hook",
        element: <UseFetchHook />,
      },
      {
        path: "use-onclick-outside-hook",
        element: <UseOnclickOutsideHook />,
      },
      {
        path: "use-window-resize-hook",
        element: <UseWindowResizeHook />,
      },

      // Phase 6: Recursion
      {
        path: "tree-view",
        element: <TreeView />,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])
export default router;

