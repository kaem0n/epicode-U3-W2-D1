const currentYear = new Date().getFullYear()

const MyFooter = () => {
  return (
    <>
      <p>
        &copy;2023-{currentYear} -{' '}
        <a
          href="https://github.com/kaem0n"
          className="link-underline link-underline-opacity-0"
        >
          kaem0n
        </a>
      </p>
    </>
  )
}

export default MyFooter
