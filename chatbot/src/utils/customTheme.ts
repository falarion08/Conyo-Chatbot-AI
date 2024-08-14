import { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
    textInput:{
      field:{
        input:{
          colors:{
            dark:"bg-gray-800 text-white focus:ring-cyan-500"
          }
        }
      }
    },
    button: {
      color: {
        regularTheme: "bg-[#087830] tracking-wide hover:bg-green-500 active:bg-[#087830] font-poppins font-semibold ",
      },
    },
  };

export default customTheme;
