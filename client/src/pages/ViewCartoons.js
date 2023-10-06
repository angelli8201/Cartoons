import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import CartoonList from "../components/CartoonList";

import "../styles/ViewCartoons.css"

export default function ViewCartoons() {
    const { signedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!signedIn) {
          navigate("/");
        }
      },[signedIn, navigate]);

    return (
        <div className="cartoon-list-container mt-4">
        <CartoonList />
        </div>
    )
}