import React from "react";

export default function Registration(){
    return (
        <div className="form">
            <table>
                <caption>Registration Form</caption>
                <tr>
                    <td>Username</td>
                    <td><input type='text' /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type='email' /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='password' /></td>
                </tr>
                <tr>
                    <input type='button' value='Register' id="btn-register"></input>
                </tr>
            </table>
        </div>
    )
}