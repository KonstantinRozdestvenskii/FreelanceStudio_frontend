// Берём адрес из переменной окружения (Vercel/Render) или используем локальный по умолчанию
const host = process.env.API_URL || 'http://localhost:3000';

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