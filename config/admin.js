module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f9a3942f901bf9bb59266819333d18e'),
  },
});
