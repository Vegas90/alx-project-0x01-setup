// Import necessary types from interfaces and React utilities
import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

/**
 * Modal component for creating/editing posts
 * @param {function} onClose - Callback to close the modal
 * @param {function} onSubmit - Callback to submit post data
 */
const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  // State management for post form data
  const [post, setPost] = useState<PostData>({
    userId: 1,  // Default user ID (could be dynamic in real app)
    title: "",  // Post title input
    body: ""    // Post content input
  });

  /**
   * Handles input changes for all form fields
   * @param {React.ChangeEvent} e - The change event from input/textarea
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update state using previous values to maintain immutability
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  /**
   * Handles form submission
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent default form behavior
    onSubmit(post);      // Pass post data to parent component
    onClose();           // Close the modal after submission
  };

  // Modal UI using fixed positioning and semi-transparent overlay
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      {/* Modal content container */}
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New
