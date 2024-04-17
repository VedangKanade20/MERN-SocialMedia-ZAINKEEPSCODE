import React from "react";
import "./Help.css";

const HelpPage = () => {
  return (
    <div>
      <h1>SocioPedia Help Page</h1>
      <p>Welcome to SocioPedia Help Page!</p>
      <h2>Frequently Asked Questions (FAQs):</h2>
      <ol>
        <li>
          <strong>How do I create an account?</strong>
          <ul>
            <li>
              To create an account, visit the [Social Media Platform] website or
              download the mobile app.
            </li>
            <li>Click on the "Sign Up" or "Create Account" button.</li>
            <li>
              Enter your details such as name, email address, and password.
            </li>
            <li>
              Follow the on-screen instructions to complete the sign-up process.
            </li>
          </ul>
        </li>
        <li>
          <strong>How can I reset my password?</strong>
          <ul>
            <li>
              If you've forgotten your password, click on the "Forgot Password"
              link on the login page.
            </li>
            <li>Enter the email address associated with your account.</li>
            <li>
              Follow the instructions sent to your email to reset your password.
            </li>
          </ul>
        </li>
        <li>
          <strong>How do I edit my profile?</strong>
          <ul>
            <li>Log in to your account.</li>
            <li>
              Click on your profile picture or username to access your profile.
            </li>
            <li>Click on the "Edit Profile" button.</li>
            <li>
              Update your profile picture, bio, and other details as needed.
            </li>
            <li>Save your changes.</li>
          </ul>
        </li>
        <li>
          <strong>What are privacy settings, and how do I adjust them?</strong>
          <ul>
            <li>
              Privacy settings control who can see your posts, follow you, and
              send you messages.
            </li>
            <li>
              To adjust your privacy settings, go to your account settings.
            </li>
            <li>Navigate to the "Privacy" section.</li>
            <li>
              Customize your privacy settings according to your preferences.
            </li>
          </ul>
        </li>
      </ol>
      <h2>Contact Support:</h2>
      <p>
        If you encounter any issues or have specific inquiries, please contact
        our support team:
      </p>
      <ul>
        <li>Email: [Support Email Address]</li>
        <li>Phone: 88888 00000</li>
        <li>Live Chat: [Link to Live Chat Support]</li>
      </ul>
      <h2>Tips and Guidelines:</h2>
      <ul>
        <li>
          Safety Tips: Always be cautious when interacting with strangers
          online. Avoid sharing personal information publicly.
        </li>
        <li>
          Community Guidelines: Familiarize yourself with [Social Media
          Platform]'s community guidelines to ensure a positive experience for
          yourself and others.
        </li>
        <li>
          Reporting: If you come across any abusive or inappropriate content,
          use the reporting feature to notify us.
        </li>
      </ul>
      <h2>Additional Resources:</h2>
      <ul>
        <li>[Link to Help Center]</li>
        <li>[Link to FAQ Section]</li>
        <li>[Link to Terms of Service]</li>
        <li>[Link to Privacy Policy]</li>
      </ul>
    </div>
  );
};

export default HelpPage;
