import React from "react";

export default function Login() {
    return (
        <div className="form">
            <table>
                <caption>Login Form</caption>
                <tr>
                    <td>Username</td>
                    <td><input type='text' /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='password' /></td>
                </tr>
                <tr>
                    <input type='submit' value='login' id="btn-login"></input>
                </tr>
            </table>
        </div>
    )
}