// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');

// Secret key to sign and verify the JWT
const secretKey = 'abc';

// Sample user data (you can replace this with your user data)
const user = {
  id: 123,
  username: 'hari',
  role: 'developer',
};

// Function to generate a JWT
function generateToken(user) {
  // JWT payload (claims)
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role,
  };

  // Options for the token (e.g., expiration time)
  const options = {
    expiresIn: '1h', // Token expiration time (1 hour)
   // expiresIn: '7d'
  //expiresIn: '30m'
  };

  // Generate the JWT
  const token = jwt.sign(payload, secretKey, options);

  return token;
}

// Function to verify a JWT
function verifyToken(token) {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, abc);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
}

// Example usage
const generatedToken = generateToken(user);
console.log('Generated Token:', generatedToken);

// Example: Uncomment the next line to test token verification
// const decodedToken = verifyToken(generatedToken);
// console.log('Decoded Token:', decodedToken);
