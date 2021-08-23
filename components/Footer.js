import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        👐🏼Hecho a mano con mucho amor
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/zetabe__" className="max-w-xs ml-4">
          <NextImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
        </a>
        <a href="https://facebook.com/zetabe__" className="ml-3">
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
