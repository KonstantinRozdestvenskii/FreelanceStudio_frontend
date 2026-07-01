
const host = 'https://freelancestudio-backend.onrender.com'

const config = {
    host: host,
    api: host + '/api',

    freelancerLevels: {
        junior: 'junior',
        middle: 'middle',
        senior: 'senior',
    },
    orderStatuses: {
        new: 'new',
        confirmed: 'confirmed',
        success: 'success',
        canceled: 'canceled',
    }
};

export default config;