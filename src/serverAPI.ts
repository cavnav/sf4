interface RequestCompaniesList {
  query: string;
}

export const serverAPI = {
  getCompaniesList: (request: RequestCompaniesList) => {
    fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token 8255e2ab02c36fd603e2d72e78c768cdbcd697e2',
      },    
      body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(res => console.table(res));
  }
};