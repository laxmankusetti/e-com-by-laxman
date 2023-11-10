import React, { useState, useEffect } from 'react';
import './App.css';
import Head from './Head'

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    // Simulate fetching job data from an API
    // Replace this with your actual data fetching code
    // Simulating data for demonstration purposes
    const fetchData = async () => {
      // Replace this with your data endpoint
      const response = await fetch('/data.json');
      const jobData = await response.json();
      setData(jobData);
      setFilteredData(jobData);
      
      // Extract available filter options
      const allFilters = [];
      jobData.forEach((job) => {
        allFilters.push(job.role, job.level, ...job.languages, ...job.tools);
      });
      const uniqueFilters = [...new Set(allFilters)];
      setFilters(uniqueFilters);
    };
    fetchData();
  }, []);

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  useEffect(() => {
    // Filter job data based on selected filters
    if (selectedFilters.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((job) => {
        const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
        return selectedFilters.every(filter => jobFilters.includes(filter));
      }));
    }
  }, [selectedFilters, data]);

  let isChoosen = false

  if(selectedFilters.length) isChoosen = true

  return (
    <div className="App">
      <Head />
      <div className="filters">
        <p>
        We have analyzed all the jobs mentioned below and filtered the skills required by the companies and put it here, 
        you can choose which skills you have from the following and which job you are eligible for.
        </p>
        {filters.map((filter) => (
          <span
            key={filter}
            className={`filter ${selectedFilters.includes(filter) ? 'active' : ''}`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      {isChoosen && <div className='selected-filters-list'>
          <h3>Here are the skills that you selected....</h3>
          <p>You can retrieve the removed job details either by refreshing the page or by clicking again on the selected filter.</p>
          {selectedFilters.map(filter => (
          <span>{filter}</span>
          ))}
        </div>
      }
      <div className="job-listings">
        {filteredData.map((job) => (
          <div className="job" key={job.id}>
            <div className='logo-company-details'>
              <img src={job.logo} alt={`${job.company} Logo`} id='logo'/>
              <div className="job-details">
                <div className="company">
                  <h3>{job.company}</h3>
                  <div className='new-feature'>
                    {job.new && <span className="new">New!</span>}
                    {job.featured && <span className="featured">Featured</span>}
                  </div>
                </div>
                <h2>{job.position}</h2>
                <p>
                  {job.postedAt} &bull; {job.contract} &bull; {job.location}
                </p>
              </div>
            </div>
            <div className="tags">
              <span className={`tag ${selectedFilters.includes(job.role) ? 'active' : ''}`} onClick={() => toggleFilter(job.role)}>
                {job.role}
              </span>
              <span className={`tag ${selectedFilters.includes(job.level) ? 'active' : ''}`} onClick={() => toggleFilter(job.level)}>
                {job.level}
              </span>
              {job.languages.map((language) => (
                <span
                  key={language}
                  className={`tag ${selectedFilters.includes(language) ? 'active' : ''}`}
                  onClick={() => toggleFilter(language)}
                >
                  {language}
                </span>
              ))}
              {job.tools.map((tool) => (
                <span
                  key={tool}
                  className={`tag ${selectedFilters.includes(tool) ? 'active' : ''}`}
                  onClick={() => toggleFilter(tool)}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
