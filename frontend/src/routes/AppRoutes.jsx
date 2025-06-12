// This file defines the main application routes, including protected and public routes.
// It uses ProtectedRoute to restrict access to certain pages based on authentication status.
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import History from "../pages/History";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/history"
      element={
        <ProtectedRoute>
          <History />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;