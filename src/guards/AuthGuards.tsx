import * as React from "react";
import { Navigate } from "react-router";

// const authContext = React.createContext();
let authed = false;

// function useAuth() {
//   const [authed, setAuthed] = React.useState(false);

//   return {
//     authed
//     // login() {
//     //   return new Promise((res) => {
//     //     setAuthed(true);
//     //     res();
//     //   });
//     // },
//     // logout() {
//     //   return new Promise((res) => {
//     //     setAuthed(false);
//     //     res();
//     //   });
//   };
// }

export function RequireAuth({ children }: any) {
	const token = sessionStorage.getItem('token');
	const access = sessionStorage.getItem('access');
	return (token && access != 'admin') ? children : <Navigate to="/login" replace />;
}

export function RequireAuthAdmin({ children }: any) {
	const token = sessionStorage.getItem('token');
	const access = sessionStorage.getItem('access');
	return (token && access == 'admin') ? children : <Navigate to="/login" replace />;
}
