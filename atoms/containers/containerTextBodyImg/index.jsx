/* eslint-disable @next/next/no-img-element */
import { Parallax } from 'react-scroll-parallax';

const ContainerTextBodyImg = ({props, index}) => {

  const handleLeft = () => {
    return (
      <div>
        <div>
          <h1 style={{lineHeight: "normal"}} className="mb-5 text-[28px] font-bold lg:text-[32px] lg:max-w-[438px]">
            {props.title}
          </h1>
        </div>
        
        <div
          className="
            my-1
            text-prev-default-subtitle
            text-base
            leading-{1.81}
            lg:max-w-[555px]
            lg:my-5
            "
        >
          {props.body}
        </div>

        <a className="trialContainer">
          Teste grátis por 15 dias!
        </a>

      </div>
    );
  };

  const handleRight = () => {
    return (
      <div className="flex items-center">
        <>
          <Parallax
            translateX={ props.position ? [-28, 28] : [28, -28]}
            tagouter="figure"
          >
            
            <img
              src={props.imageLeft?.src}
              alt={props.alt}
              style={{
                width: props.imageLeft.width,
                height: props.imageLeft.height,
              }}  
            />
            {props.play && index === 0 && (
              <a
                href="https://www.youtube.com/watch?v=XF6mZDszpuY&feature=emb_title"
                target="_blank"
                style={{cursor: 'pointer'}}
              >
                <Play
                  style={{
                    position: 'absolute',
                    right: 0,
                    cursor: 'pointer',
                  }}
                />
              </a>
            )}
          </Parallax>
          {
            !props?.imageRight?.src ? "" : (
              <Parallax
                translateY={ props.position ? [-20, 20] : [20, -20]}
                tagouter="figure"
              >
                <img
                  className="mr-[150px]"
                  style={{
                    width: props.imageRight.width,
                    height: props.imageRight.height,
                  }}  
                  src={props.imageRight.src}
                  alt={props.alt}
                />
              </Parallax>
            )
            }
          </>
      </div>
    );
  };

  return (
    <div className="my-[150px] text-prev-default-text_body lg:flex lg:justify-center">
      <div className="flex max-w-[1300px]">
        {
          props.position === true ? (
            (handleLeft())

          ) : (
            (handleRight())
          )
        }
        {
          props.position === false  ? (
            (handleLeft())

          ) : (
            (handleRight())
          )
        }
      </div>

      <div className="lg:hidden">
        <div>
          <h1 style={{lineHeight: "normal"}} className="mb-5 text-[28px] font-bold lg:text-[32px] lg:max-w-[438px]">
            {props.title}
          </h1>
        </div>
        
        <div
          className="
            my-1
            text-prev-default-subtitle
            text-base
            leading-{1.81}
            lg:max-w-[555px]
            lg:my-5
            "
        >
          {props.body}
        </div>
      </div>

      <div className="mt-8 lg:hidden">
        <img
          className="mt-10"
          src={props.urlImage}
          alt={props.alt}
          style={{width: "312px", height: "211px"}}
        />
      </div>
    </div>
  )
};

export default ContainerTextBodyImg;
