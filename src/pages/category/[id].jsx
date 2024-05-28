import axios from 'axios';
import React from 'react';

const SingleCategory = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>{data?.name}</h1>;
    </>
  );
};
export async function getServerSideProps(context) {
  const singleCategoryId = context.params.id;
  const { data } = await axios.get(
    `https://api.morgans-store.uz/categories/${singleCategoryId}`
  );
  return { props: { data } };
}
export default SingleCategory;
