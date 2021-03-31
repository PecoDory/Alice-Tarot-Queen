export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Tarot`;

export const baseURLTWO = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/The%20Ether`

export const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    },
};
