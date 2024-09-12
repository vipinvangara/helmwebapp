import React, { useState, useEffect } from 'react';

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:31326/companies')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Interview Application</h1>
      </header>
      <main>
        <h2>Top 10 Most Valuable Companies</h2>
        <select>
          {companies.length === 0 ? (
            <option>Loading companies...</option>
          ) : (
            companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))
          )}
        </select>
      </main>
    </div>
  );
}

export default App;
