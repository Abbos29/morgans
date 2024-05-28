import axios from 'axios';
import React from 'react';

const SingleBrand = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>{data?.name}</h1>;
    </>
  );
};
export async function getServerSideProps(context) {
  const singleBrandId = context.params.id;
  const { data } = await axios.get(
    `https://api.morgans-store.uz/brands/${singleBrandId}`
  );
  return { props: { data } };
}
export default SingleBrand;
