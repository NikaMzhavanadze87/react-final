import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversities } from '../api';
import { setUniversities } from '../redux/universitySlice';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.universities);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('Georgia');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUniversities(selectedCountry);
      dispatch(setUniversities(data));
      setLoading(false);
    };

    fetchData();
  }, [dispatch, selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="dropdown">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="Georgia">Georgia</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Greece">Greece</option>
        </select>
      </div>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {universities.map((university, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {university.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    Country: {university.country}
                  </Typography>
                  {university.web_pages.map((webPage, index) => (
                    <Typography key={index}>
                      <a href={webPage} target="_blank" rel="noopener noreferrer">
                        {webPage}
                      </a>
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;
