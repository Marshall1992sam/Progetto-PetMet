import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPet from "../../components/MainFeaturedPet";
import { featuredPets, mainFeaturedPost } from "../../data";
import FeaturedPet from "../../components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../../redux/actions/pets";

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);

  useEffect(() => {
    fetchAllPets({ dispatch });
  }, []);

  return (
    <>
      <MainFeaturedPet post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {/* distanza tra i componenti figli */}
        {pets?.map((pet) => (
          <FeaturedPet key={pet._id} pet={pet} />
        ))}
      </Grid>
    </>
  );
};

export default Homepage;
