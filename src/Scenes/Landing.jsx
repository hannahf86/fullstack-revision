

const Landing = () => {

  const styles = {
    container: 'bg-[#F2C572] w-full h-screen pt-32',
    title: 'text-3xl text-center',
    subtitle: 'text-3xl tracking-widest text-center',
    buttonContainer: 'flex flex-col justify-items-center items-center mx-12 mt-12',
    button: 'bg-white rounded-lg border-4 border-[#4A4873] font-bold my-8 py-4 w-2/3 sm:w-2/3 md:w-2/3 lg:2/3 max-w-[840px]',
    smButton: 'bg-white rounded-lg border-4 border-[#4A4873] my-40 py-2 w-2/3 sm:w-2/3 md:w-2/3 lg:2/3 max-w-[840px]'
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>FULLSTACK</h1>
        <h2 className={styles.subtitle}>REVISION</h2>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>LEVEL ONE</button>
        <button className={styles.button}>LEVEL TWO</button>
        <button className={styles.smButton}>References</button>
      </div>

    </div>
  )
}

export default Landing
