/* eslint-disable @next/next/no-img-element */

const Footer = ({props}) => {
  return (
    <>
      <div>
        <h1 className="text-2xl	ml-6 my-4		text-white font-bold">{props.title}</h1>
      </div>
      <div>
        {props.body.map((data, index) => {
          return (
            <div key={index} className="ml-10 my-2"
              style={{ color: `${data.isCor ? data.isCor : 'rgba(255, 255, 255, 0.7)' }` }}
            >
              {data.text}
            </div>
          )
        })}
      </div>
    </>
  )
};

export default Footer;
