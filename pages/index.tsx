import Layout from "../components/common/Layout";

import { useSelector, useDispatch } from "react-redux";
const Index = () => {
  const count: number = useSelector((state: RootState) => {
    console.log(state);
    return state.count;
  });
  const dispatch = useDispatch();

  return (
    <Layout title="Index Page">
      <h1>Hello Next.js 👋</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch.count.increment(1)}>+</button>
      <button onClick={() => dispatch.count.decrementAsync(1)}>-</button>
    </Layout>
  );
};

export default Index;
