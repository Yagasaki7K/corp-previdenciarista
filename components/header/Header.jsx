
const Header = ({ props }) => {
  return (
    <>
      <div className="flex flex-col pt-14 px-5 mt-36	items-center text-default-text_body">
        <div>
          <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">{props.title}</h1>
        </div>
        <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1007px]">
          {props.body}
        </p>
      </div>
    </>
  );
};

export default Header;
