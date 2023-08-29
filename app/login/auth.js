import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://brqjwwqiooahlpepuksr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycWp3d3Fpb29haGxwZXB1a3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNjQxODMsImV4cCI6MjAwNzg0MDE4M30.drufTRk4tVH6NhOIqfrJC83WStHTGux6SzjARlI9m0E");

export const authenticateUser = async (email, password) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', email);
  
      if (error) {
        throw error;
      }
  
      if (!data || data.length === 0) {
        throw new Error('User not found');
      }
  
      const user = data[0];
  
      // Compare the provided password with the stored password hash
      if (user.password_hash === password) {
        return user;
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      throw error;
    }
  };
  