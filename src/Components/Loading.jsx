import React, { useState, useEffect } from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <section className="min-h-screen w-full bg-lime-900 flex justify-center items-center fixed top-0 left-0 z-[9999]">
      <Grid
        height="80"
        width="80"
        color="#fff"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  ) : null;
};

export default Loading;
