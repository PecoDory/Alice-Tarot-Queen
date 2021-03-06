export const cardURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Tarot`;

export const readingURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/The%20Ether`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
