const isDev = process.env.NODE_ENV === 'development';
const host  =  isDev ?  'http://localhost:3000' : 'https://gulfhandybackend.onrender.com';
export const url = `${host}`
