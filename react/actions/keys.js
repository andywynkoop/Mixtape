if (process.env.NODE_ENV === 'production') {
  export default process.env.GOOGLE_API_KEY
} else {
  import API_KEY from './secret.js'
  export default API_KEY;
}