/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const ContainerHome = ({props}) => {
  return (
    <>
      <div>
        <h2
          style={{lineHeight: "33px"}}
          className="text-left text-title30	mb-8 font-black text-prev-default-text_body"
        >
          {props.title}
        </h2>
      </div>
      <div>
        {props.body.map((data, index) => {
          return (
            <div key={index} className="my-1">
              - {data.text}
            </div>
          )
        })}
      </div>
      
      <div className="mt-8">
        <img src={props.urlImage} alt={props.alt} />
      </div>

      {props.urlRef ?
        <div className="flex items-start w-full mt-4 mb-24">
          <Link
            href={props.urlRef}
          >
            <a
              className="flex py-2 px-6	text-prev-default-text_orange	rounded"
              style={{ border: '2px solid rgb(255, 117, 34)' }}
              >
              Saiba mais
            </a>
          </Link>
        </div>
        :
        <div className="mt-4 mb-24" />
      }
    </>
  )
};

export default ContainerHome;
