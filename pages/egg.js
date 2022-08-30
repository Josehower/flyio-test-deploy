import styles from '../styles/Home.module.css';

export default function Home(props) {
  return (
    <>
      {/* {JSON.stringify(props.users)} */}
      <div className={styles.container}>This is an egg two times bigger</div>
      <div className={styles.container}>This is an egg thre times bigger</div>
      <div className={styles.container}>This is an cookie for you</div>
      <div className={styles.container}>This is a new change</div>
    </>
  );
}

// export async function getServerSideProps() {
//   const users = await getUsers();
//   return {
//     // Anything that you pass in the props
//     // object will get passed to the component
//     // at the top in the `props` parameter
//     props: {
//       users: users,
//     },
//   };
// }
