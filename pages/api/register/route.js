import bcrypt from 'bcryptjs';
import User from '../../../models/user'; // Import your User model
import { connectMongoDB } from '../../../lib/mongodb';
import crypto from 'crypto';

function generateVerificationToken() {
  const randomBytes = crypto.randomBytes(32);
  const verificationToken = randomBytes.toString('hex');
  return verificationToken;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = generateVerificationToken();

      await connectMongoDB();
      await User.create({
        username,
        email,
        password: hashedPassword,
        verification_token: verificationToken,
        verified: false,
      });

      // Send a success response with a JSON message and verification token
      const successResponse = {
        message: 'User registered successfully.',
        verification_token: verificationToken,
      };
      res.status(201).json(successResponse);
    } catch (error) {
      console.error('An error occurred while registering the user:', error);
      const errorResponse = {
        message: 'An error occurred while registering the user.',
      };
      res.status(500).json(errorResponse);
    }
  } else {
    const notAllowedResponse = {
      message: 'Method not allowed.',
    };
    res.status(405).json(notAllowedResponse);
  }
}
